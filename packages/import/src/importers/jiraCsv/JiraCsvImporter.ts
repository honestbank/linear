import csv from "csvtojson";
import { Importer, ImportResult } from "../../types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const j2m = require("jira2md");

type JiraPriority = "Highest" | "High" | "Medium" | "Low" | "Lowest";

interface JiraIssueType {
  Description: string;
  Status: string;
  "Issue key": string;
  "Issue Type": string;
  Priority: JiraPriority;
  "Project key": string;
  Summary: string;
  Assignee: string;
  Created: string;
  Release: string;
  "Custom field (Story Points)"?: string;
}

/**
 * Import issues from a Jira CSV export.
 *
 * @param apiKey GitHub api key for authentication
 */
export class JiraCsvImporter implements Importer {
  public constructor(filePath: string, orgSlug: string, customUrl: string) {
    this.filePath = filePath;
    this.organizationName = orgSlug;
    this.customJiraUrl = customUrl;
  }

  public get name(): string {
    return "Jira (CSV)";
  }

  public get defaultTeamName(): string {
    return "Jira";
  }

  public import = async (): Promise<ImportResult> => {
    const data = (await csv().fromFile(this.filePath)) as JiraIssueType[];

    const importData: ImportResult = {
      issues: [],
      labels: {},
      users: {},
      statuses: {},
    };

    const statuses = Array.from(new Set(data.map(row => row.Status)));
    const assignees = Array.from(new Set(data.map(row => row.Assignee)));

    for (const user of assignees) {
      importData.users[user] = {
        name: user,
      };
    }
    for (const status of statuses) {
      if (importData.statuses?.[status]) {
        importData.statuses[status] = {
          name: status,
        };
      }
    }

    for (const row of data) {
      const url = this.organizationName
        ? `https://${this.organizationName}.atlassian.net/browse/${row["Issue key"]}`
        : `${this.customJiraUrl}/browse/${row["Issue key"]}`;
      const mdDesc = row.Description ? j2m.to_markdown(row.Description) : undefined;
      const description =
        mdDesc && url
          ? `${mdDesc}\n\n[View original issue in Jira](${url})`
          : url
          ? `[View original issue in Jira](${url})`
          : undefined;
      const priority = mapPriority(row.Priority);
      const type = `Type: ${row["Issue Type"]}`;
      const release = row.Release && row.Release.length > 0 ? `Release: ${row.Release}` : undefined;
      const assigneeId = row.Assignee && row.Assignee.length > 0 ? row.Assignee : undefined;
      const status = row.Status;
      let labels = [type];
      if (row["Labels"] && row["Labels"].length > 0) {
        labels = labels.concat(row["Labels"].split(","));
      }
      if (release) {
        labels.push(release);
      }
      importData.issues.push({
        title: row.Summary,
        description,
        status,
        priority,
        url,
        assigneeId,
        labels,
      });

      for (const lab of labels) {
        if (!importData.labels[lab]) {
          importData.labels[lab] = {
            name: lab,
          };
        }
      }
    }

    return importData;
  };

  // -- Private interface

  private filePath: string;
  private customJiraUrl: string;
  private organizationName?: string;
}

const mapPriority = (input: JiraPriority): number => {
  const priorityMap = {
    Highest: 1,
    High: 2,
    Medium: 3,
    Low: 4,
    Lowest: 0,
  };
  return priorityMap[input] || 0;
};
