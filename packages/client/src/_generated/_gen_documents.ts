import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `TimelessDateScalar` scalar type represents Date values without a timestamp. It expects strings in the format YYYY-MM-DD */
  TimelessDateScalar: any;
  /** The `JSON` scalar type represents JSON values */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON values as a string */
  JSONObject: any;
};

export type Query = {
  __typename?: "Query";
  /** Fetch data to catch up the client to the state of the world. */
  syncBootstrap: SyncResponse;
  /** Fetches delta packets to catch up the user to the current state of the world. */
  syncUpdates: SyncResponse;
  /** Fetches an archived model. */
  archivedModelSync: ArchiveResponse;
  /** Fetches archived models. */
  archivedModelsSync: ArchiveResponse;
  /** All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** Billing details for the customer. */
  billingDetails: BillingDetailsPayload;
  /** Join collaborative document and get missing steps. */
  collaborativeDocumentJoin: CollaborationDocumentUpdatePayload;
  /** All comments. */
  comments: CommentConnection;
  /** A specific comment. */
  comment: Comment;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** All cycles. */
  cycles: CycleConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** Fetch Figma screenshot and other information with file and node identifiers. */
  figmaEmbedInfo: FigmaEmbedPayload;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific integration. */
  integration: Integration;
  /** All integrations resources (e.g. linked GitHub pull requests for issues). */
  integrationResources: IntegrationResourceConnection;
  /** One specific integration resource. (e.g. linked GitHub pull requests for an issue) */
  integrationResource: IntegrationResource;
  /** Retrieves information for the public invite page. */
  inviteInfo: InvitePagePayload;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issues. */
  issues: IssueConnection;
  /** One specific issue. */
  issue: Issue;
  /** [ALPHA] Search issues. This query is experimental and is subject to change without notice. */
  issueSearch: IssueConnection;
  /** All milestones. */
  milestones: MilestoneConnection;
  /** One specific milestone. */
  milestone: Milestone;
  /** All notifications. */
  notifications: NotificationConnection;
  /** One specific notification. */
  notification: Notification;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific organization invite. */
  organizationInvite: IssueLabel;
  /** The user's organization. */
  organization: Organization;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All projects. */
  projects: ProjectConnection;
  /** One specific project. */
  project: Project;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionPayload;
  /** All comment emoji reactions. */
  reactions: ReactionConnection;
  /** A specific reaction. */
  reaction: Reaction;
  /** The organization's subscription. */
  subscription: Subscription;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All teams. */
  teams: TeamConnection;
  /** One specific team. */
  team: Team;
  /** All templates from all users. */
  templates: Array<Template>;
  /** A specific template. */
  template: Template;
  /** All users for the organization. */
  users: UserConnection;
  /** One specific user. */
  user: User;
  /** The currently authenticated user. */
  viewer: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** A specific webhook. */
  webhook: Webhook;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
  /** One specific state. */
  workflowState: WorkflowState;
};

export type QuerySyncBootstrapArgs = {
  databaseVersion: Scalars["Int"];
  sinceSyncId: Scalars["Int"];
};

export type QuerySyncUpdatesArgs = {
  sinceSyncId: Scalars["Float"];
};

export type QueryArchivedModelSyncArgs = {
  identifier: Scalars["String"];
  modelClass: Scalars["String"];
};

export type QueryArchivedModelsSyncArgs = {
  modelClass: Scalars["String"];
  teamId: Scalars["String"];
  before?: Maybe<Scalars["DateTime"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryApiKeysArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryApplicationWithAuthorizationArgs = {
  redirectUri?: Maybe<Scalars["String"]>;
  scope: Array<Scalars["String"]>;
  clientId: Scalars["String"];
};

export type QuerySsoUrlFromEmailArgs = {
  isDesktop?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
};

export type QueryCollaborativeDocumentJoinArgs = {
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
};

export type QueryCommentsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryCommentArgs = {
  id: Scalars["String"];
};

export type QueryCustomViewsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryCustomViewArgs = {
  id: Scalars["String"];
};

export type QueryCyclesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryCycleArgs = {
  id: Scalars["String"];
};

export type QueryEmojisArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryEmojiArgs = {
  id: Scalars["String"];
};

export type QueryFavoritesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryFavoriteArgs = {
  id: Scalars["String"];
};

export type QueryFigmaEmbedInfoArgs = {
  nodeId?: Maybe<Scalars["String"]>;
  fileId: Scalars["String"];
};

export type QueryIntegrationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIntegrationArgs = {
  id: Scalars["String"];
};

export type QueryIntegrationResourcesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIntegrationResourceArgs = {
  id: Scalars["String"];
};

export type QueryInviteInfoArgs = {
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
};

export type QueryIssueLabelsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIssueLabelArgs = {
  id: Scalars["String"];
};

export type QueryIssueRelationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIssueRelationArgs = {
  id: Scalars["String"];
};

export type QueryIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryIssueArgs = {
  id: Scalars["String"];
};

export type QueryIssueSearchArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
  query: Scalars["String"];
};

export type QueryMilestonesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryMilestoneArgs = {
  id: Scalars["String"];
};

export type QueryNotificationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryNotificationArgs = {
  id: Scalars["String"];
};

export type QueryNotificationSubscriptionsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryNotificationSubscriptionArgs = {
  id: Scalars["String"];
};

export type QueryOrganizationInvitesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryOrganizationInviteArgs = {
  id: Scalars["String"];
};

export type QueryOrganizationExistsArgs = {
  urlKey: Scalars["String"];
};

export type QueryProjectLinksArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryProjectLinkArgs = {
  id: Scalars["String"];
};

export type QueryProjectsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryProjectArgs = {
  id: Scalars["String"];
};

export type QueryReactionsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryReactionArgs = {
  id: Scalars["String"];
};

export type QueryTeamMembershipsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryTeamMembershipArgs = {
  id: Scalars["String"];
};

export type QueryTeamsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryTeamArgs = {
  id: Scalars["String"];
};

export type QueryTemplateArgs = {
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryWebhooksArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryWebhookArgs = {
  id: Scalars["String"];
};

export type QueryWorkflowStatesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type QueryWorkflowStateArgs = {
  id: Scalars["String"];
};

/**
 * Contains either the full serialized state of the application or delta packets that the requester can
 *   apply to the local data set in order to be up-to-date.
 */
export type SyncResponse = {
  __typename?: "SyncResponse";
  /**
   * The full state of the organization as a serialized JSON object.
   *     Mutually exclusive with the delta property
   */
  state?: Maybe<Scalars["String"]>;
  /**
   * JSON serialized delta changes that the client can apply to its local state
   *     in order to catch up with the state of the world.
   */
  delta?: Maybe<Scalars["String"]>;
  /** A JSON serialized collection of model objects loaded from the archive */
  archive?: Maybe<Scalars["String"]>;
  /** The last sync id covered by the response. */
  lastSyncId: Scalars["Float"];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars["Float"];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: "ArchiveResponse";
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars["String"];
  /** The total number of entities in the archive. */
  totalCount: Scalars["Float"];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars["Float"];
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
}

export type ApiKeyConnection = {
  __typename?: "ApiKeyConnection";
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyEdge = {
  __typename?: "ApiKeyEdge";
  node: ApiKey;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: "ApiKey";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The label of the API key. */
  label: Scalars["String"];
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars["Boolean"];
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars["Boolean"];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars["String"]>;
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars["String"]>;
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: "UserAuthorizedApplication";
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Application name. */
  name: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars["Boolean"];
};

/** Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: "AuthorizedApplication";
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Application name. */
  name: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars["String"]>;
  /** OAuth application's ID. */
  appId: Scalars["String"];
};

export type AuthResolverResponse = {
  __typename?: "AuthResolverResponse";
  /** User account ID. */
  id: Scalars["String"];
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars["String"]>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars["String"]>;
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars["Boolean"]>;
  /** Users belonging to this account. */
  users: Array<User>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<Organization>>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: "User";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The user's full name. */
  name: Scalars["String"];
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars["String"];
  /** The user's email address. */
  email: Scalars["String"];
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars["String"]>;
  /** Reason why is the account disabled. */
  disableReason: Scalars["String"];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars["String"];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars["DateTime"]>;
  /** Whether the user is an organization administrator. */
  admin: Scalars["Boolean"];
  /** Whether the user account is active or disabled. */
  active: Scalars["Boolean"];
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** Organization in which the user belongs to. */
  organization: Organization;
  /** Number of issues created. */
  createdIssueCount: Scalars["Int"];
  /** Memberships associated with the user. */
  teamMemberships: TeamMembershipConnection;
};

/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type IssueConnection = {
  __typename?: "IssueConnection";
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueEdge = {
  __typename?: "IssueEdge";
  node: Issue;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An issue. */
export type Issue = Node & {
  __typename?: "Issue";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The issue's unique number. */
  number: Scalars["Float"];
  /** The issue's title. */
  title: Scalars["String"];
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The priority of the issue. */
  priority: Scalars["Float"];
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars["Float"]>;
  /** The order of the item in its column on the board. */
  boardOrder: Scalars["Float"];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars["DateTime"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars["String"]>;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars["String"];
  /** Label for the priority. */
  priorityLabel: Scalars["String"];
  /** Issue URL. */
  url: Scalars["String"];
  /** The team that the issue is associated with. */
  team: Team;
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** Suggested branch name for the issue. */
  branchName: Scalars["String"];
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** Integration resources for this issue. */
  integrationResources: IntegrationResourceConnection;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
};

/** An issue. */
export type IssueSubscribersArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueChildrenArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueCommentsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueHistoryArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueLabelsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueIntegrationResourcesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueRelationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An issue. */
export type IssueInverseRelationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: "Team";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The team's name. */
  name: Scalars["String"];
  /** The team's unique key. The key is used in URLs. */
  key: Scalars["String"];
  /** The team's description. */
  description?: Maybe<Scalars["String"]>;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars["Boolean"];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars["Float"];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars["Float"];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars["Float"];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars["Boolean"];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars["Boolean"];
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive: Scalars["Boolean"];
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars["Float"];
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars["String"];
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars["String"];
  /** The issue estimation type to use. */
  issueEstimationType: Scalars["String"];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars["Boolean"];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars["Boolean"];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars["Float"];
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembersId: Scalars["String"];
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembersId: Scalars["String"];
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars["Boolean"];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars["Boolean"];
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars["Boolean"];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars["Boolean"];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod: Scalars["Float"];
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** Period after which automatically closed and completed issues are automatically archived in months. Null/undefined means disabled. */
  autoArchivePeriod: Scalars["Float"];
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** Memberships associated with the team. */
  memberships: TeamMembershipConnection;
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Calender feed (iCal) for cycles. */
  cycleCalenderUrl: Scalars["String"];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};

/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: "WorkflowState";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The state's name. */
  name: Scalars["String"];
  /** The state's UI color as a HEX string. */
  color: Scalars["String"];
  /** Description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The position of the state in the team flow. */
  position: Scalars["Float"];
  /** The type of the state. */
  type: Scalars["String"];
  /** The team to which this state belongs to. */
  team: Team;
  /** Issues belonging in this state. */
  issues: IssueConnection;
};

/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type CycleConnection = {
  __typename?: "CycleConnection";
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleEdge = {
  __typename?: "CycleEdge";
  node: Cycle;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: "Cycle";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The number of the cycle. */
  number: Scalars["Float"];
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The start time of the cycle. */
  startsAt: Scalars["DateTime"];
  /** The end time of the cycle. */
  endsAt: Scalars["DateTime"];
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars["Float"]>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars["Float"]>;
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars["Float"]>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars["Float"]>;
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
};

/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type TeamMembershipConnection = {
  __typename?: "TeamMembershipConnection";
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipEdge = {
  __typename?: "TeamMembershipEdge";
  node: TeamMembership;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: "TeamMembership";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The user that the membership is associated with. */
  user: User;
  /** The team that the membership is associated with. */
  team: Team;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  node: Project;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A project. */
export type Project = Node & {
  __typename?: "Project";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The project's name. */
  name: Scalars["String"];
  /** The project's description. */
  description: Scalars["String"];
  /** The project's unique URL slug. */
  slugId: Scalars["String"];
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The project's color. */
  color: Scalars["String"];
  /** The type of the state. */
  state: Scalars["String"];
  /** The user who created the project. */
  creator: User;
  /** The project lead. */
  lead?: Maybe<User>;
  /** The milestone that this project is associated with. */
  milestone?: Maybe<Milestone>;
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The sort order for the project within its milestone. */
  sortOrder: Scalars["Float"];
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars["Float"]>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars["Float"]>;
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars["Float"]>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars["Float"]>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars["Boolean"];
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars["Boolean"];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars["Boolean"];
  /** Teams associated with this project. */
  teams: TeamConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
};

/** A project. */
export type ProjectTeamsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectMembersArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A project. */
export type ProjectLinksArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** A milestone that contains projects. */
export type Milestone = Node & {
  __typename?: "Milestone";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The name of the milestone. */
  name: Scalars["String"];
  /** The organization that the milestone belongs to. */
  organization: Organization;
  /** The sort order for the milestone. */
  sortOrder: Scalars["Float"];
  /** Projects associated with the milestone. */
  projects: ProjectConnection;
};

/** A milestone that contains projects. */
export type MilestoneProjectsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: "Organization";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The organization's name. */
  name: Scalars["String"];
  /** The organization's unique URL key. */
  urlKey: Scalars["String"];
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars["String"]>;
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars["Float"];
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat: Scalars["String"];
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars["Boolean"];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars["Boolean"];
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars["Boolean"];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars["Boolean"];
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars["String"]>;
  /** Users associated with the organization. */
  users: UserConnection;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Milestones associated with the organization. */
  milestones: MilestoneConnection;
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<Subscription>;
  /** Number of active users in the organization. */
  userCount: Scalars["Int"];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars["Int"];
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationMilestonesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: "UserEdge";
  node: User;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

export type TeamConnection = {
  __typename?: "TeamConnection";
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamEdge = {
  __typename?: "TeamEdge";
  node: Team;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

export type MilestoneConnection = {
  __typename?: "MilestoneConnection";
  edges: Array<MilestoneEdge>;
  nodes: Array<Milestone>;
  pageInfo: PageInfo;
};

export type MilestoneEdge = {
  __typename?: "MilestoneEdge";
  node: Milestone;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

export type IntegrationConnection = {
  __typename?: "IntegrationConnection";
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: "IntegrationEdge";
  node: Integration;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: "Integration";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The integration's type. */
  service: Scalars["String"];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /** The user that added the integration. */
  creator: User;
};

/** The subscription of an organization. */
export type Subscription = Node & {
  __typename?: "Subscription";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The subscription type. */
  type: Scalars["String"];
  /** The number of seats in the subscription. */
  seats: Scalars["Float"];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars["String"]>;
};

export type ProjectLinkConnection = {
  __typename?: "ProjectLinkConnection";
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkEdge = {
  __typename?: "ProjectLinkEdge";
  node: ProjectLink;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: "ProjectLink";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The link's URL. */
  url: Scalars["String"];
  /** The link's label. */
  label: Scalars["String"];
  /** The user who created the link. */
  creator: User;
  /** The project that the link is associated with. */
  project: Project;
};

export type WorkflowStateConnection = {
  __typename?: "WorkflowStateConnection";
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateEdge = {
  __typename?: "WorkflowStateEdge";
  node: WorkflowState;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

export type TemplateConnection = {
  __typename?: "TemplateConnection";
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateEdge = {
  __typename?: "TemplateEdge";
  node: Template;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A template object used for creating new issues faster. */
export type Template = Node & {
  __typename?: "Template";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The entity type this template is for. */
  type: Scalars["String"];
  /** The name of the template. */
  name: Scalars["String"];
  /** Template description. */
  description?: Maybe<Scalars["String"]>;
  /** Template data. */
  templateData: Scalars["JSON"];
  /** The team that the template is associated with. */
  team: Team;
  /** The user who created the template. */
  creator?: Maybe<User>;
};

export type IssueLabelConnection = {
  __typename?: "IssueLabelConnection";
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelEdge = {
  __typename?: "IssueLabelEdge";
  node: IssueLabel;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: "IssueLabel";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The label's name. */
  name: Scalars["String"];
  /** The label's description. */
  description?: Maybe<Scalars["String"]>;
  /** The label's color as a HEX string. */
  color: Scalars["String"];
  /** The team to which the label belongs to. */
  team: Team;
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** Issues associated with the label. */
  issues: IssueConnection;
};

/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
};

export type WebhookConnection = {
  __typename?: "WebhookConnection";
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookEdge = {
  __typename?: "WebhookEdge";
  node: Webhook;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  __typename?: "Webhook";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Webhook URL */
  url: Scalars["String"];
  /** Whether the Webhook is enabled. */
  enabled: Scalars["Boolean"];
  /** The team that the webhook is associated with. */
  team: Team;
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars["String"]>;
};

export type CommentConnection = {
  __typename?: "CommentConnection";
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  node: Comment;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: "Comment";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The comment content in markdown format. */
  body: Scalars["String"];
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars["DateTime"]>;
  /** The user who wrote the comment. */
  user: User;
  /** The issue that the comment is associated with. */
  issue: Issue;
};

export type IssueHistoryConnection = {
  __typename?: "IssueHistoryConnection";
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: "IssueHistoryEdge";
  node: IssueHistory;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: "IssueHistory";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The issue that was changed. */
  issue: Issue;
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** Information about the integration or application which created this history entry. */
  source?: Maybe<Scalars["JSONObject"]>;
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars["Boolean"]>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars["String"]>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars["String"]>;
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars["Float"]>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars["Float"]>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars["Float"]>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars["Float"]>;
  /** Whether the issue was archived or un-archived. */
  archived?: Maybe<Scalars["Boolean"]>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars["String"]>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars["String"]>>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<Scalars["String"]>>;
  autoClosed?: Maybe<Scalars["Boolean"]>;
  autoArchived?: Maybe<Scalars["Boolean"]>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars["TimelessDateScalar"]>;
};

export type IntegrationResourceConnection = {
  __typename?: "IntegrationResourceConnection";
  edges: Array<IntegrationResourceEdge>;
  nodes: Array<IntegrationResource>;
  pageInfo: PageInfo;
};

export type IntegrationResourceEdge = {
  __typename?: "IntegrationResourceEdge";
  node: IntegrationResource;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An integration resource created by an external service. */
export type IntegrationResource = Node & {
  __typename?: "IntegrationResource";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The integration's type. */
  resourceType: Scalars["String"];
  /** The external service resource ID. */
  resourceId: Scalars["String"];
  /** Detailed information about the external resource. */
  data: IntegrationResourceData;
  /** The integration that the resource is associated with. */
  integration: Integration;
  /** The issue that the resource is associated with. */
  issue: Issue;
  /** Pull request information for GitHub pull requests and GitLab merge requests. */
  pullRequest: PullRequestPayload;
};

/** Integration resource's payload */
export type IntegrationResourceData = {
  __typename?: "IntegrationResourceData";
  /** The payload for an IntegrationResource of type 'githubPullRequest' */
  githubPullRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'gitlabMergeRequest' */
  gitlabMergeRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'githubCommit' */
  githubCommit?: Maybe<CommitPayload>;
  /** The payload for an IntegrationResource of type 'sentryIssue' */
  sentryIssue?: Maybe<SentryIssuePayload>;
};

/** Pull request data */
export type PullRequestPayload = {
  __typename?: "PullRequestPayload";
  status: Scalars["String"];
  number: Scalars["Float"];
  url: Scalars["String"];
  draft: Scalars["Boolean"];
  id: Scalars["String"];
  title: Scalars["String"];
  branch: Scalars["String"];
  userId: Scalars["String"];
  userLogin: Scalars["String"];
  repoLogin: Scalars["String"];
  repoName: Scalars["String"];
  createdAt: Scalars["String"];
  updatedAt: Scalars["String"];
  closedAt: Scalars["String"];
  mergedAt: Scalars["String"];
};

/** GitHub's commit data */
export type CommitPayload = {
  __typename?: "CommitPayload";
  id: Scalars["String"];
  message: Scalars["String"];
  timestamp: Scalars["String"];
  url: Scalars["String"];
  added: Array<Scalars["String"]>;
  removed: Array<Scalars["String"]>;
  modified: Array<Scalars["String"]>;
};

/** Sentry issue data */
export type SentryIssuePayload = {
  __typename?: "SentryIssuePayload";
  /** The Sentry identifier for the issue. */
  issueId: Scalars["String"];
  /** The description of the issue. */
  webUrl: Scalars["String"];
  /** The type of the actor who created the issue. */
  actorType: Scalars["String"];
  /** The Sentry identifier of the actor who created the issue. */
  actorId: Scalars["Float"];
  /** The name of the Sentry actor who created this issue. */
  actorName: Scalars["String"];
  /** The Sentry identifier of the project this issue belongs to. */
  projectId: Scalars["Float"];
  /** The slug of the project this issue belongs to. */
  projectSlug: Scalars["String"];
  /** The title of the issue. */
  issueTitle: Scalars["String"];
  /** The shortId of the issue. */
  shortId: Scalars["String"];
  /** The date this issue was first seen. */
  firstSeen: Scalars["String"];
  /** The name of the first release version this issue appeared on, if available. */
  firstVersion?: Maybe<Scalars["String"]>;
};

export type IssueRelationConnection = {
  __typename?: "IssueRelationConnection";
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationEdge = {
  __typename?: "IssueRelationEdge";
  node: IssueRelation;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: "IssueRelation";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The relationship of the issue with the related issue. */
  type: Scalars["String"];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
};

export type SsoUrlFromEmailResponse = {
  __typename?: "SsoUrlFromEmailResponse";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars["String"];
};

export type BillingDetailsPayload = {
  __typename?: "BillingDetailsPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars["String"]>;
  /** List of invoices, if any. */
  invoices: Array<Invoice>;
  /** The payment method. */
  paymentMethod?: Maybe<Card>;
};

export type Invoice = {
  __typename?: "Invoice";
  /** The URL at which the invoice can be viewed or paid. */
  url?: Maybe<Scalars["String"]>;
  /** The creation date of the invoice. */
  created: Scalars["TimelessDateScalar"];
  /** The due date of the invoice. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The status of the invoice. */
  status: Scalars["String"];
  /** The invoice total, in cents. */
  total: Scalars["Float"];
};

export type Card = {
  __typename?: "Card";
  /** The brand of the card, e.g. Visa. */
  brand: Scalars["String"];
  /** The last four digits used to identify the card. */
  last4: Scalars["String"];
};

export type CollaborationDocumentUpdatePayload = {
  __typename?: "CollaborationDocumentUpdatePayload";
  /** Document steps the client has not seen yet and need to rebase it's local steps on. */
  steps?: Maybe<StepsResponse>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type StepsResponse = {
  __typename?: "StepsResponse";
  /** Client's document version. */
  version: Scalars["Int"];
  /** New document steps from the client. */
  steps?: Maybe<Array<Scalars["JSON"]>>;
  /** List of client IDs for the document steps. */
  clientIds: Array<Scalars["String"]>;
};

export type CustomViewConnection = {
  __typename?: "CustomViewConnection";
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewEdge = {
  __typename?: "CustomViewEdge";
  node: CustomView;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: "CustomView";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The name of the custom view. */
  name: Scalars["String"];
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The organization of the custom view. */
  organization: Organization;
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /** The user who created the custom view. */
  creator: User;
  /** The filters applied to issues in the custom view. */
  filters: Scalars["JSONObject"];
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars["Boolean"];
};

export type EmojiConnection = {
  __typename?: "EmojiConnection";
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiEdge = {
  __typename?: "EmojiEdge";
  node: Emoji;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: "Emoji";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The emoji's name. */
  name: Scalars["String"];
  /** The emoji image URL. */
  url: Scalars["String"];
  /** The source of the emoji. */
  source: Scalars["String"];
  /** The user who created the emoji. */
  creator: User;
  /** The organization that the emoji belongs to. */
  organization: Organization;
};

export type FavoriteConnection = {
  __typename?: "FavoriteConnection";
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteEdge = {
  __typename?: "FavoriteEdge";
  node: Favorite;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: "Favorite";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The type of the favorite. */
  type: Scalars["String"];
  /** The order of the item in the favorites list. */
  sortOrder: Scalars["Float"];
  /** The owner of the favorite. */
  user: User;
  /** Favorited issue. */
  issue?: Maybe<Issue>;
  /** Favorited project. */
  project?: Maybe<Project>;
  /** Favorited project team. */
  projectTeam?: Maybe<Project>;
  /** Favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** Favorited issue label. */
  label?: Maybe<IssueLabel>;
};

export type FigmaEmbedPayload = {
  __typename?: "FigmaEmbedPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Figma embed information. */
  figmaEmbed?: Maybe<FigmaEmbed>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Object representing Figma preview information. */
export type FigmaEmbed = {
  __typename?: "FigmaEmbed";
  /** Figma file name. */
  name: Scalars["String"];
  /** Date when the file was updated at the time of embedding. */
  lastModified: Scalars["DateTime"];
  /** Node name. */
  nodeName?: Maybe<Scalars["String"]>;
  /** Figma screenshot URL. */
  url?: Maybe<Scalars["String"]>;
};

export type InvitePagePayload = {
  __typename?: "InvitePagePayload";
  /** Invite data. */
  inviteData?: Maybe<InviteData>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type InviteData = {
  __typename?: "InviteData";
  /** The name of the inviter. */
  inviterName: Scalars["String"];
  /** Avatar URLs for the invitees. */
  avatarURLs: Array<Scalars["String"]>;
  /** Team names for the invitees. */
  teamNames: Array<Scalars["String"]>;
  /** Team identifiers for the invitees. */
  teamIds: Array<Scalars["String"]>;
  /** The name of the organization the users were invited to. */
  organizationName: Scalars["String"];
  /** The domain of the organization the users were invited to. */
  organizationDomain: Scalars["String"];
  /** The logo of the organization the users were invited to. */
  organizationLogoUrl?: Maybe<Scalars["String"]>;
  /** The user count of the organization. */
  userCount: Scalars["Float"];
};

export type NotificationConnection = {
  __typename?: "NotificationConnection";
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  __typename?: "NotificationEdge";
  node: Notification;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A notification sent to a user. */
export type Notification = Node & {
  __typename?: "Notification";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Notification type */
  type: Scalars["String"];
  /** Name of the reaction emoji associated with the notification. */
  reactionEmoji?: Maybe<Scalars["String"]>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars["DateTime"]>;
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars["DateTime"]>;
  /** The recipient of the notification. */
  user: User;
  /** The issue that the notification is associated with. */
  issue: Issue;
  /** The team which the notification is associated with. */
  team: Team;
  /** The comment which the notification is associated with. */
  comment?: Maybe<Comment>;
};

export type NotificationSubscriptionConnection = {
  __typename?: "NotificationSubscriptionConnection";
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionEdge = {
  __typename?: "NotificationSubscriptionEdge";
  node: NotificationSubscription;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = Node & {
  __typename?: "NotificationSubscription";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The type of the subscription. */
  type: Scalars["String"];
  /** The user associated with notification subscriptions. */
  user: User;
  /** Subscribed team. */
  team?: Maybe<Team>;
  /** Subscribed project. */
  project?: Maybe<Project>;
};

export type OrganizationInviteConnection = {
  __typename?: "OrganizationInviteConnection";
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteEdge = {
  __typename?: "OrganizationInviteEdge";
  node: OrganizationInvite;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: "OrganizationInvite";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The invitees email address. */
  email: Scalars["String"];
  /** The invite was sent to external address. */
  external: Scalars["Boolean"];
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars["DateTime"]>;
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars["DateTime"]>;
  /** The user who created the invitation. */
  inviter: User;
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The organization that the invite is associated with. */
  organization: Organization;
};

export type OrganizationExistsPayload = {
  __typename?: "OrganizationExistsPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** Whether the organization exists. */
  exists: Scalars["Boolean"];
};

export type PushSubscriptionPayload = {
  __typename?: "PushSubscriptionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ReactionConnection = {
  __typename?: "ReactionConnection";
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionEdge = {
  __typename?: "ReactionEdge";
  node: Reaction;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

/** A reaction associated with a comment. */
export type Reaction = Node & {
  __typename?: "Reaction";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Name of the reaction's emoji. */
  emoji: Scalars["String"];
  /** The user who reacted. */
  user: User;
  /** The comment that the reaction is associated with. */
  comment: Comment;
};

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: "UserSettings";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars["JSONObject"];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars["String"]>;
  /** The user to whom this notification was targeted for. */
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  /** [Deprecated] Creates a new event. */
  eventCreate: EventPayload;
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** Deletes an API key. */
  apiKeyDelete: ArchivePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Updates the billing email address for the customer. */
  billingEmailUpdate: BillingEmailPayload;
  /** Update collaborative document with client steps. */
  collaborativeDocumentUpdate: CollaborationDocumentUpdatePayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: ArchivePayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: ArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** Archives a cycle. */
  cycleArchive: ArchivePayload;
  /** Always fails with internal error. Used to debug logging. */
  debugFailWithInternalError: DebugPayload;
  /** Always logs an error to Sentry as warning. Used to debug logging. */
  debugFailWithWarning: DebugPayload;
  /** Create the SAML test organization in development. */
  debugCreateSAMLOrg: DebugPayload;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: ArchivePayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: ArchivePayload;
  /** Saves user feedback. */
  feedbackCreate: FeedbackPayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: IntegrationPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** Deletes an integration. */
  integrationDelete: ArchivePayload;
  /** Archives an integration resource. */
  integrationResourceArchive: ArchivePayload;
  /** Kicks off a GitHub import job. */
  issueImportCreate: IssueImportPayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Archives an issue label. */
  issueLabelArchive: ArchivePayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: ArchivePayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** Archives an issue. */
  issueArchive: ArchivePayload;
  /** Unarchives an issue. */
  issueUnarchive: ArchivePayload;
  /** Creates a new milestone. */
  milestoneCreate: MilestonePayload;
  /** Updates a milestone. */
  milestoneUpdate: MilestonePayload;
  /** Deletes a milestone. */
  milestoneDelete: ArchivePayload;
  /** Creates a notification. */
  notificationCreate: NotificationPayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** [Deprecated] Deletes a notification. */
  notificationDelete: ArchivePayload;
  /** Archives a notification. */
  notificationArchive: ArchivePayload;
  /** Unarchives a notification. */
  notificationUnarchive: ArchivePayload;
  /** Creates a new notification subscription for a team or a project. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /** Deletes a notification subscription reference. */
  notificationSubscriptionDelete: ArchivePayload;
  /** Creates a new OAuth client. */
  oauthClientCreate: OauthClientPayload;
  /** Updates an OAuth client. */
  oauthClientUpdate: OauthClientPayload;
  /** Archives an OAuth client. */
  oauthClientArchive: ArchivePayload;
  /** Updates an OAuth client. */
  oauthClientRotateSecret: RotateSecretPayload;
  /** Revokes an OAuth token. */
  oauthTokenRevoke: OauthTokenRevokePayload;
  /** Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: ArchivePayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Re-send an organization invite. */
  resentOrganizationInvite: ArchivePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: ArchivePayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: ArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Archives a project. */
  projectArchive: ArchivePayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: ArchivePayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates a subscription session. Used internally to integrate with Stripe. */
  subscriptionSessionCreate: SubscriptionSessionPayload;
  /** Creates a subscription update session. Used internally to integrate with Stripe. */
  subscriptionUpdateSessionCreate: SubscriptionSessionPayload;
  /** Updates a subscription. */
  subscriptionUpdate: SubscriptionPayload;
  /** Upgrades a subscription plan. */
  subscriptionUpgrade: SubscriptionPayload;
  /** Archives a subscription. */
  subscriptionArchive: ArchivePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: ArchivePayload;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Archives a team. */
  teamArchive: ArchivePayload;
  /** Deletes a team. */
  teamDelete: ArchivePayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: ArchivePayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Subscribes user to changelog newsletter. */
  userSubscribeToNewsletter: UserSubscribeToNewsletterPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: ArchivePayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: ArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: ArchivePayload;
};

export type MutationEventCreateArgs = {
  input: EventCreateInput;
};

export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};

export type MutationApiKeyDeleteArgs = {
  id: Scalars["String"];
};

export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};

export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};

export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};

export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};

export type MutationCreateOrganizationFromOnboardingArgs = {
  survey?: Maybe<OnboardingCustomerSurvey>;
  input: CreateOrganizationInput;
};

export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};

export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars["String"];
};

export type MutationBillingEmailUpdateArgs = {
  input: BillingEmailUpdateInput;
};

export type MutationCollaborativeDocumentUpdateArgs = {
  input: CollaborationDocumentUpdateInput;
};

export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};

export type MutationCommentUpdateArgs = {
  input: CommentUpdateInput;
  id: Scalars["String"];
};

export type MutationCommentDeleteArgs = {
  id: Scalars["String"];
};

export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};

export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};

export type MutationCustomViewUpdateArgs = {
  input: CustomViewUpdateInput;
  id: Scalars["String"];
};

export type MutationCustomViewDeleteArgs = {
  id: Scalars["String"];
};

export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};

export type MutationCycleUpdateArgs = {
  input: CycleUpdateInput;
  id: Scalars["String"];
};

export type MutationCycleArchiveArgs = {
  id: Scalars["String"];
};

export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};

export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};

export type MutationEmojiDeleteArgs = {
  id: Scalars["String"];
};

export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};

export type MutationFavoriteUpdateArgs = {
  input: FavoriteUpdateInput;
  id: Scalars["String"];
};

export type MutationFavoriteDeleteArgs = {
  id: Scalars["String"];
};

export type MutationFeedbackCreateArgs = {
  input: FeedbackCreateInput;
};

export type MutationFileUploadArgs = {
  metaData?: Maybe<Scalars["JSON"]>;
  size: Scalars["Int"];
  contentType: Scalars["String"];
  filename: Scalars["String"];
};

export type MutationImageUploadFromUrlArgs = {
  url: Scalars["String"];
};

export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars["String"];
};

export type MutationIntegrationGitlabConnectArgs = {
  gitlabUrl: Scalars["String"];
  accessToken: Scalars["String"];
};

export type MutationIntegrationSlackArgs = {
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  redirectUri: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationSlackPersonalArgs = {
  redirectUri: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationSlackPostArgs = {
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  redirectUri: Scalars["String"];
  teamId: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationSlackProjectPostArgs = {
  redirectUri: Scalars["String"];
  projectId: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationSlackImportEmojisArgs = {
  redirectUri: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationFigmaArgs = {
  redirectUri: Scalars["String"];
  code: Scalars["String"];
};

export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars["String"];
};

export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars["String"];
};

export type MutationIntegrationSentryConnectArgs = {
  organizationSlug: Scalars["String"];
  code: Scalars["String"];
  installationId: Scalars["String"];
};

export type MutationIntegrationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationIntegrationResourceArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueImportCreateArgs = {
  input: ImportCreateInput;
};

export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
};

export type MutationIssueLabelUpdateArgs = {
  input: IssueLabelUpdateInput;
  id: Scalars["String"];
};

export type MutationIssueLabelArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};

export type MutationIssueRelationUpdateArgs = {
  input: IssueRelationUpdateInput;
  id: Scalars["String"];
};

export type MutationIssueRelationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};

export type MutationIssueUpdateArgs = {
  input: IssueUpdateInput;
  id: Scalars["String"];
};

export type MutationIssueArchiveArgs = {
  id: Scalars["String"];
};

export type MutationIssueUnarchiveArgs = {
  id: Scalars["String"];
};

export type MutationMilestoneCreateArgs = {
  input: MilestoneCreateInput;
};

export type MutationMilestoneUpdateArgs = {
  input: MilestoneUpdateInput;
  id: Scalars["String"];
};

export type MutationMilestoneDeleteArgs = {
  id: Scalars["String"];
};

export type MutationNotificationCreateArgs = {
  input: NotificationUpdateInput;
  id: Scalars["String"];
};

export type MutationNotificationUpdateArgs = {
  input: NotificationUpdateInput;
  id: Scalars["String"];
};

export type MutationNotificationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationNotificationArchiveArgs = {
  id: Scalars["String"];
};

export type MutationNotificationUnarchiveArgs = {
  id: Scalars["String"];
};

export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};

export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationOauthClientCreateArgs = {
  input: OauthClientCreateInput;
};

export type MutationOauthClientUpdateArgs = {
  input: OauthClientUpdateInput;
  id: Scalars["String"];
};

export type MutationOauthClientArchiveArgs = {
  id: Scalars["String"];
};

export type MutationOauthClientRotateSecretArgs = {
  id: Scalars["String"];
};

export type MutationOauthTokenRevokeArgs = {
  scope: Array<Scalars["String"]>;
  appId: Scalars["String"];
};

export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};

export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
};

export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars["String"];
};

export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};

export type MutationResentOrganizationInviteArgs = {
  id: Scalars["String"];
};

export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars["String"];
};

export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganizationInput;
};

export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};

export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};

export type MutationProjectLinkDeleteArgs = {
  id: Scalars["String"];
};

export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};

export type MutationProjectUpdateArgs = {
  input: ProjectUpdateInput;
  id: Scalars["String"];
};

export type MutationProjectArchiveArgs = {
  id: Scalars["String"];
};

export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};

export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};

export type MutationReactionDeleteArgs = {
  id: Scalars["String"];
};

export type MutationSubscriptionSessionCreateArgs = {
  plan: Scalars["String"];
};

export type MutationSubscriptionUpdateArgs = {
  input: SubscriptionUpdateInput;
  id: Scalars["String"];
};

export type MutationSubscriptionUpgradeArgs = {
  type: Scalars["String"];
  id: Scalars["String"];
};

export type MutationSubscriptionArchiveArgs = {
  id: Scalars["String"];
};

export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};

export type MutationTeamMembershipDeleteArgs = {
  id: Scalars["String"];
};

export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: Maybe<Scalars["String"]>;
  input: TeamCreateInput;
};

export type MutationTeamUpdateArgs = {
  input: TeamUpdateInput;
  id: Scalars["String"];
};

export type MutationTeamArchiveArgs = {
  id: Scalars["String"];
};

export type MutationTeamDeleteArgs = {
  id: Scalars["String"];
};

export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};

export type MutationTemplateUpdateArgs = {
  input: TemplateUpdateInput;
  id: Scalars["String"];
};

export type MutationTemplateDeleteArgs = {
  id: Scalars["String"];
};

export type MutationUserUpdateArgs = {
  input: UpdateUserInput;
  id: Scalars["String"];
};

export type MutationUserPromoteAdminArgs = {
  id: Scalars["String"];
};

export type MutationUserDemoteAdminArgs = {
  id: Scalars["String"];
};

export type MutationUserSuspendArgs = {
  id: Scalars["String"];
};

export type MutationUserUnsuspendArgs = {
  id: Scalars["String"];
};

export type MutationUserSettingsUpdateArgs = {
  input: UserSettingsUpdateInput;
  id: Scalars["String"];
};

export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars["String"];
};

export type MutationUserFlagUpdateArgs = {
  operation: UserFlagUpdateOperation;
  flag: UserFlagType;
};

export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};

export type MutationViewPreferencesUpdateArgs = {
  input: ViewPreferencesUpdateInput;
  id: Scalars["String"];
};

export type MutationViewPreferencesDeleteArgs = {
  id: Scalars["String"];
};

export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};

export type MutationWebhookUpdateArgs = {
  input: WebhookUpdateInput;
  id: Scalars["String"];
};

export type MutationWebhookDeleteArgs = {
  id: Scalars["String"];
};

export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};

export type MutationWorkflowStateUpdateArgs = {
  input: WorkflowStateUpdateInput;
  id: Scalars["String"];
};

export type MutationWorkflowStateArchiveArgs = {
  id: Scalars["String"];
};

export type EventCreateInput = {
  /** The category of the event to create. */
  category: Scalars["String"];
  /** The subject of the event. */
  subject: Scalars["String"];
  /** The target identifier of the event. */
  targetId?: Maybe<Scalars["String"]>;
  /** The value of the event. */
  value?: Maybe<Scalars["Float"]>;
  /** Additional data of the event, encoded as JSON. */
  data?: Maybe<Scalars["JSON"]>;
};

export type EventPayload = {
  __typename?: "EventPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ApiKeyCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The label for the API key. */
  label: Scalars["String"];
  /** The API key value (format: /^[a-zA-Z0-9]{40}$/). */
  key: Scalars["String"];
};

export type ApiKeyPayload = {
  __typename?: "ApiKeyPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The API key that was created. */
  apiKey: ApiKey;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ArchivePayload = {
  __typename?: "ArchivePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type EmailUserAccountAuthChallengeInput = {
  /** The email for which to generate the magic login code. */
  email: Scalars["String"];
  /** Whether the login was requested from the desktop app. */
  isDesktop?: Maybe<Scalars["Boolean"]>;
  /** Signup code. */
  signupCode?: Maybe<Scalars["String"]>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: "EmailUserAccountAuthChallengeResponse";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars["String"];
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars["String"];
  /** The magic login code. */
  token: Scalars["String"];
  /** The timezone of the user's browser. */
  timezone: Scalars["String"];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars["String"]>>;
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars["String"];
  /** The URI to redirect the user to. */
  redirectUri?: Maybe<Scalars["String"]>;
  /** The timezone of the user's browser. */
  timezone: Scalars["String"];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: Maybe<Array<Scalars["String"]>>;
  /** Signup code. */
  signupCode?: Maybe<Scalars["String"]>;
};

export type OnboardingCustomerSurvey = {
  companyRole?: Maybe<Scalars["String"]>;
  companySize?: Maybe<Scalars["String"]>;
};

export type CreateOrganizationInput = {
  /** The name of the organization. */
  name: Scalars["String"];
  /** The URL key of the organization. */
  urlKey: Scalars["String"];
  /** Whether the organization should allow email domain access. */
  domainAccess?: Maybe<Scalars["Boolean"]>;
  /** The timezone of the organization, passed in by client. */
  timezone?: Maybe<Scalars["String"]>;
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: "CreateOrJoinOrganizationResponse";
  organization: Organization;
  user: User;
};

export type JoinOrganizationInput = {
  /** The identifier of the organization. */
  organizationId: Scalars["String"];
};

export type BillingEmailUpdateInput = {
  /** The email address to which to send invoices. */
  email: Scalars["String"];
};

export type BillingEmailPayload = {
  __typename?: "BillingEmailPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars["String"]>;
};

export type CollaborationDocumentUpdateInput = {
  /** Document identifier. */
  issueId: Scalars["String"];
  /** Client's document version number. */
  version: Scalars["Int"];
  /** New document steps from the client. */
  steps: Array<Scalars["JSON"]>;
  /** Client identifier. */
  clientId: Scalars["String"];
};

export type CommentCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The comment content in markdown format. */
  body?: Maybe<Scalars["String"]>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars["JSON"]>;
  /** The issue to associate the comment with. */
  issueId: Scalars["String"];
};

export type CommentPayload = {
  __typename?: "CommentPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The comment that was created or updated. */
  comment: Comment;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: Maybe<Scalars["String"]>;
  /** The comment content as a Prosemirror document. */
  bodyData?: Maybe<Scalars["JSON"]>;
};

export type ContactCreateInput = {
  /** The type of support contact. */
  type: Scalars["String"];
  /** The message the user sent. */
  message: Scalars["String"];
  /** User's operating system. */
  operatingSystem?: Maybe<Scalars["String"]>;
  /** User's browser information. */
  browser?: Maybe<Scalars["String"]>;
  /** User's device information. */
  device?: Maybe<Scalars["String"]>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: Maybe<Scalars["Int"]>;
};

export type ContactPayload = {
  __typename?: "ContactPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CustomViewCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the custom view. */
  name: Scalars["String"];
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars["String"]>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars["JSONObject"]>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars["Boolean"]>;
};

export type CustomViewPayload = {
  __typename?: "CustomViewPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CustomViewUpdateInput = {
  /** The name of the custom view. */
  name?: Maybe<Scalars["String"]>;
  /** The description of the custom view. */
  description?: Maybe<Scalars["String"]>;
  /** The icon of the custom view. */
  icon?: Maybe<Scalars["String"]>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars["String"]>;
  /** The id of the team associated with the custom view. */
  teamId?: Maybe<Scalars["String"]>;
  /** The filters applied to issues in the custom view. */
  filters?: Maybe<Scalars["JSONObject"]>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: Maybe<Scalars["Boolean"]>;
};

export type CycleCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The team to associate the cycle with. */
  teamId: Scalars["String"];
  /** The start date of the cycle. */
  startsAt: Scalars["DateTime"];
  /** The end date of the cycle. */
  endsAt: Scalars["DateTime"];
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars["DateTime"]>;
};

export type CyclePayload = {
  __typename?: "CyclePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type CycleUpdateInput = {
  /** The custom name of the cycle. */
  name?: Maybe<Scalars["String"]>;
  /** The start date of the cycle. */
  startsAt?: Maybe<Scalars["DateTime"]>;
  /** The end date of the cycle. */
  endsAt?: Maybe<Scalars["DateTime"]>;
  /** The end date of the cycle. */
  completedAt?: Maybe<Scalars["DateTime"]>;
};

export type DebugPayload = {
  __typename?: "DebugPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type EmailUnsubscribeInput = {
  /** Email type to unsubscribed from. */
  type: Scalars["String"];
  /** The user's email validation token. */
  token: Scalars["String"];
  /** The identifier of the user. */
  userId: Scalars["String"];
};

export type EmailUnsubscribePayload = {
  __typename?: "EmailUnsubscribePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type EmojiCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the custom emoji. */
  name: Scalars["String"];
  /** The URL for the emoji. */
  url: Scalars["String"];
};

export type EmojiPayload = {
  __typename?: "EmojiPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The emoji that was created. */
  emoji: Emoji;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type FavoriteCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the issue to favorite. */
  issueId?: Maybe<Scalars["String"]>;
  /** The identifier of the project to favorite. */
  projectId?: Maybe<Scalars["String"]>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: Maybe<Scalars["String"]>;
  /** The identifier of the cycle to favorite. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The identifier of the custom view to favorite. */
  customViewId?: Maybe<Scalars["String"]>;
  /** The identifier of the label to favorite. */
  labelId?: Maybe<Scalars["String"]>;
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type FavoritePayload = {
  __typename?: "FavoritePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type FavoriteUpdateInput = {
  /** The position of the item in the favorites list. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type FeedbackCreateInput = {
  /** The feedback the user sent. */
  feedback: Scalars["String"];
  /** How disappointed the user would be if he/she could no longer use Linear. */
  disappointmentRating: Scalars["Float"];
};

export type FeedbackPayload = {
  __typename?: "FeedbackPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UploadPayload = {
  __typename?: "UploadPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: "UploadFile";
  /** The filename. */
  filename: Scalars["String"];
  /** The content type. */
  contentType: Scalars["String"];
  /** The size of the uploaded file. */
  size: Scalars["Int"];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars["String"];
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars["String"];
  metaData?: Maybe<Scalars["JSON"]>;
  headers: Array<UploadFileHeader>;
};

export type UploadFileHeader = {
  __typename?: "UploadFileHeader";
  /** Upload file header key. */
  key: Scalars["String"];
  /** Upload file header value. */
  value: Scalars["String"];
};

export type ImageUploadFromUrlPayload = {
  __typename?: "ImageUploadFromUrlPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The URL containing the image. */
  url?: Maybe<Scalars["String"]>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type IntegrationPayload = {
  __typename?: "IntegrationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ImportCreateInput = {
  /** The external service from which we will import data. */
  service: Scalars["String"];
};

export type IssueImportPayload = {
  __typename?: "IssueImportPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The import job that was created or updated. */
  importJob?: Maybe<IssueImport>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  __typename?: "IssueImport";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The id for the organization where data will be imported. */
  organizationId: Scalars["String"];
  /** The id for the user that started the job. */
  creatorId: Scalars["String"];
  /** The service from which data will be imported. */
  service: Scalars["String"];
  /** The status for the import job. */
  status: Scalars["String"];
};

export type IssueLabelCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the label. */
  name: Scalars["String"];
  /** The description of the label. */
  description?: Maybe<Scalars["String"]>;
  /** The color of the label. */
  color?: Maybe<Scalars["String"]>;
  /** The team associated with the label. */
  teamId: Scalars["String"];
};

export type IssueLabelPayload = {
  __typename?: "IssueLabelPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type IssueLabelUpdateInput = {
  /** The name of the label. */
  name?: Maybe<Scalars["String"]>;
  /** The description of the label. */
  description?: Maybe<Scalars["String"]>;
  /** The color of the label. */
  color?: Maybe<Scalars["String"]>;
};

export type IssueRelationCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars["String"];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars["String"];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = "blocks",
  Duplicate = "duplicate",
  Related = "related",
}

export type IssueRelationPayload = {
  __typename?: "IssueRelationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type IssueRelationUpdateInput = {
  /** The type of relation of the issue to the related issue. */
  type?: Maybe<Scalars["String"]>;
  /** The identifier of the issue that is related to another issue. */
  issueId?: Maybe<Scalars["String"]>;
  /** The identifier of the related issue. */
  relatedIssueId?: Maybe<Scalars["String"]>;
};

export type IssueCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The title of the issue. */
  title: Scalars["String"];
  /** The issue description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars["JSON"]>;
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars["String"]>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars["String"]>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars["Int"]>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars["Int"]>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars["String"];
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars["String"]>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars["String"]>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars["Float"]>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
};

export type IssuePayload = {
  __typename?: "IssuePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type IssueUpdateInput = {
  /** The issue title. */
  title?: Maybe<Scalars["String"]>;
  /** The issue description in markdown format. */
  description?: Maybe<Scalars["String"]>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: Maybe<Scalars["JSON"]>;
  /** The identifier of the user to assign the issue to. */
  assigneeId?: Maybe<Scalars["String"]>;
  /** The identifier of the parent issue. */
  parentId?: Maybe<Scalars["String"]>;
  /** The priority of the issue. */
  priority?: Maybe<Scalars["Int"]>;
  /** The estimated complexity of the issue. */
  estimate?: Maybe<Scalars["Int"]>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: Maybe<Scalars["String"]>;
  /** The cycle associated with the issue. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The project associated with the issue. */
  projectId?: Maybe<Scalars["String"]>;
  /** The team state of the issue. */
  stateId?: Maybe<Scalars["String"]>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: Maybe<Scalars["Float"]>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: Maybe<Scalars["Float"]>;
  /** [DEPRECATED] Document version for backwards compatibility. */
  documentVersion?: Maybe<Scalars["Int"]>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars["TimelessDateScalar"]>;
};

export type MilestoneCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the milestone. */
  name: Scalars["String"];
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type MilestonePayload = {
  __typename?: "MilestonePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The milesteone that was created or updated. */
  milestone?: Maybe<Milestone>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type MilestoneUpdateInput = {
  /** The name of the milestone. */
  name?: Maybe<Scalars["String"]>;
  /** The sort order of the milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type NotificationUpdateInput = {
  /** The time when notification was marked as read. */
  readAt?: Maybe<Scalars["DateTime"]>;
};

export type NotificationPayload = {
  __typename?: "NotificationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type NotificationSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the team to subscribe to. */
  teamId?: Maybe<Scalars["String"]>;
  /** The identifier of the project to subscribe to. */
  projectId?: Maybe<Scalars["String"]>;
};

export type NotificationSubscriptionPayload = {
  __typename?: "NotificationSubscriptionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OauthClientCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The application's name. */
  name: Scalars["String"];
  /** User facing description of the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer of the application. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars["String"]>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars["String"]>;
};

export type OauthClientPayload = {
  __typename?: "OauthClientPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The OAuth client application that was created or updated. */
  oauthClient: OauthClient;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: "OauthClient";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** OAuth application's client name. */
  name: Scalars["String"];
  /** Information about the application. */
  description: Scalars["String"];
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer. */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl: Scalars["String"];
  /** OAuth application's client secret. */
  clientSecret: Scalars["String"];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars["String"]>;
};

export type OauthClientUpdateInput = {
  /** The application's name. */
  name?: Maybe<Scalars["String"]>;
  /** User facing description of the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer of the application. */
  developer?: Maybe<Scalars["String"]>;
  /** URL of the developer (homepage or docs). */
  developerUrl?: Maybe<Scalars["String"]>;
  /** List of allowed redirect URIs for the application. */
  redirectUris?: Maybe<Array<Scalars["String"]>>;
  /** URL for the app icon. */
  imageUrl?: Maybe<Scalars["String"]>;
};

export type RotateSecretPayload = {
  __typename?: "RotateSecretPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OauthTokenRevokePayload = {
  __typename?: "OauthTokenRevokePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier of the domain being verified. */
  organizationDomainId: Scalars["String"];
  /** The verification code sent via email. */
  verificationCode: Scalars["String"];
};

export type OrganizationDomainPayload = {
  __typename?: "OrganizationDomainPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: "OrganizationDomain";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Domain name */
  name: Scalars["String"];
  /** Is this domain verified */
  verified: Scalars["Boolean"];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars["String"]>;
};

export type OrganizationDomainCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The domain name to add. */
  name: Scalars["String"];
  /** The email address to which to send the verification code. */
  verificationEmail: Scalars["String"];
  /** Is the domain verified. */
  verified: Scalars["Boolean"];
};

export type OrganizationInviteCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The email of the invitee. */
  email: Scalars["String"];
  /** The message to send to the invitee. */
  message?: Maybe<Scalars["String"]>;
  /** The teams that the user has been invited to. */
  teamIds?: Maybe<Array<Scalars["String"]>>;
};

export type OrganizationInvitePayload = {
  __typename?: "OrganizationInvitePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UpdateOrganizationInput = {
  /** The name of the organization. */
  name?: Maybe<Scalars["String"]>;
  /** The logo of the organization. */
  logoUrl?: Maybe<Scalars["String"]>;
  /** The URL key of the organization. */
  urlKey?: Maybe<Scalars["String"]>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars["String"]>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: Maybe<Scalars["Boolean"]>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: Maybe<Scalars["Boolean"]>;
  /** Whether the organization is using project milestones. */
  roadmapEnabled?: Maybe<Scalars["Boolean"]>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: Maybe<Scalars["JSONObject"]>;
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: Maybe<Array<Scalars["String"]>>;
};

export type OrganizationPayload = {
  __typename?: "OrganizationPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type OrganizationDeletePayload = {
  __typename?: "OrganizationDeletePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars["String"];
};

export type ProjectLinkCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The URL of the link. */
  url: Scalars["String"];
  /** The label for the link. */
  label: Scalars["String"];
  /** Related project for the link. */
  projectId: Scalars["String"];
};

export type ProjectLinkPayload = {
  __typename?: "ProjectLinkPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ProjectCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the project. */
  name: Scalars["String"];
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The color of the project. */
  color?: Maybe<Scalars["String"]>;
  /** The state of the project. */
  state?: Maybe<Scalars["String"]>;
  /** The description for the project. */
  description?: Maybe<Scalars["String"]>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars["String"]>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars["String"]>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars["String"]>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars["String"]>>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type ProjectPayload = {
  __typename?: "ProjectPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ProjectUpdateInput = {
  /** The state of the project. */
  state?: Maybe<Scalars["String"]>;
  /** The name of the project. */
  name?: Maybe<Scalars["String"]>;
  /** The description for the project. */
  description?: Maybe<Scalars["String"]>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: Maybe<Scalars["String"]>;
  /** The icon of the project. */
  icon?: Maybe<Scalars["String"]>;
  /** The color of the project. */
  color?: Maybe<Scalars["String"]>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: Maybe<Array<Scalars["String"]>>;
  /** The identifier of the project lead. */
  leadId?: Maybe<Scalars["String"]>;
  /** The identifiers of the members of this project. */
  memberIds?: Maybe<Array<Scalars["String"]>>;
  /** The planned target date of the project. */
  targetDate?: Maybe<Scalars["TimelessDateScalar"]>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars["Boolean"]>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars["Boolean"]>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars["Boolean"]>;
  /** The sort order for the project within its milestone. */
  sortOrder?: Maybe<Scalars["Float"]>;
};

export type PushSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The user identifier of the subscription. */
  userId: Scalars["String"];
  /** The data of the subscription in stringified JSON format. */
  data: Scalars["String"];
};

export type ReactionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one */
  id?: Maybe<Scalars["String"]>;
  /** The emoji the user reacted with. */
  emoji?: Maybe<Scalars["String"]>;
  /** The comment to associate the reaction with. */
  commentId: Scalars["String"];
};

export type ReactionPayload = {
  __typename?: "ReactionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  reaction: Reaction;
  success: Scalars["Boolean"];
};

export type CreateCsvExportReportPayload = {
  __typename?: "CreateCsvExportReportPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type SubscriptionSessionPayload = {
  __typename?: "SubscriptionSessionPayload";
  /** The subscription session that was created or updated. */
  session?: Maybe<Scalars["String"]>;
};

export type SubscriptionUpdateInput = {
  /** The date the subscription was set to cancel, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars["String"]>;
};

export type SubscriptionPayload = {
  __typename?: "SubscriptionPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The subscription entity being mutated. */
  subscription: Subscription;
  /** The date the subscription was set to cancel at the end of the billing period, if any. */
  canceledAt?: Maybe<Scalars["DateTime"]>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type TeamMembershipCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The identifier of the user associated with the membership. */
  userId: Scalars["String"];
  /** The identifier of the team associated with the membership. */
  teamId: Scalars["String"];
};

export type TeamMembershipPayload = {
  __typename?: "TeamMembershipPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type TeamCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The name of the team. */
  name: Scalars["String"];
  /** The description of the team. */
  description?: Maybe<Scalars["String"]>;
  /** The key of the team. If not given, rc key will be generated based on the name of the team. */
  key?: Maybe<Scalars["String"]>;
  /** The organization associated with the team. */
  organizationId?: Maybe<Scalars["String"]>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars["Boolean"]>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars["Float"]>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars["Int"]>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars["Int"]>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars["Boolean"]>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars["Boolean"]>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars["Boolean"]>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars["Float"]>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars["String"]>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars["String"]>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars["Boolean"]>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars["Boolean"]>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars["Float"]>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars["Boolean"]>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars["String"]>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars["String"]>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars["Float"]>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: Maybe<Scalars["Float"]>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars["String"]>;
};

export type TeamPayload = {
  __typename?: "TeamPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type TeamUpdateInput = {
  /** The name of the team. */
  name?: Maybe<Scalars["String"]>;
  /** The description of the team. */
  description?: Maybe<Scalars["String"]>;
  /** The key of the team. */
  key?: Maybe<Scalars["String"]>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: Maybe<Scalars["Boolean"]>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: Maybe<Scalars["Float"]>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: Maybe<Scalars["Int"]>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: Maybe<Scalars["Int"]>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: Maybe<Scalars["Boolean"]>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: Maybe<Scalars["Boolean"]>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: Maybe<Scalars["Boolean"]>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: Maybe<Scalars["Float"]>;
  /** The timezone of the team. */
  timezone?: Maybe<Scalars["String"]>;
  /** The issue estimation type to use. */
  issueEstimationType?: Maybe<Scalars["String"]>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: Maybe<Scalars["Boolean"]>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: Maybe<Scalars["Boolean"]>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: Maybe<Scalars["Float"]>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: Maybe<Scalars["String"]>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: Maybe<Scalars["String"]>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: Maybe<Scalars["Boolean"]>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: Maybe<Scalars["Boolean"]>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: Maybe<Scalars["Boolean"]>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: Maybe<Scalars["Boolean"]>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: Maybe<Scalars["String"]>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: Maybe<Scalars["String"]>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: Maybe<Scalars["Float"]>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: Maybe<Scalars["String"]>;
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: Maybe<Scalars["Float"]>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: Maybe<Scalars["String"]>;
};

export type TemplateCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The template type, e.g. 'issue'. */
  type: Scalars["String"];
  /** The identifier or key of the team associated with the template. */
  teamId: Scalars["String"];
  /** The template name. */
  name: Scalars["String"];
  /** The template description. */
  description?: Maybe<Scalars["String"]>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars["JSON"];
};

export type TemplatePayload = {
  __typename?: "TemplatePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The template that was created or updated. */
  template: Template;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type TemplateUpdateInput = {
  /** The template name. */
  name?: Maybe<Scalars["String"]>;
  /** The template description. */
  description?: Maybe<Scalars["String"]>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: Maybe<Scalars["JSON"]>;
};

export type UpdateUserInput = {
  /** The name of the user. */
  name?: Maybe<Scalars["String"]>;
  /** The display name of the user. */
  displayName?: Maybe<Scalars["String"]>;
  /** The avatar image URL of the user. */
  avatarUrl?: Maybe<Scalars["String"]>;
  /** Whether the user account is active. */
  active?: Maybe<Scalars["Boolean"]>;
  /** Reason for deactivation. */
  disableReason?: Maybe<Scalars["String"]>;
  /** Whether the user account has admin privileges. */
  admin?: Maybe<Scalars["Boolean"]>;
};

export type UserPayload = {
  __typename?: "UserPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The user that was created or updated. */
  user?: Maybe<User>;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UserAdminPayload = {
  __typename?: "UserAdminPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UserSettingsUpdateInput = {
  /** The user's settings. */
  settings?: Maybe<Scalars["String"]>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: Maybe<Array<Scalars["String"]>>;
  /** The user's notification preferences. */
  notificationPreferences?: Maybe<Scalars["JSONObject"]>;
};

export type UserSettingsPayload = {
  __typename?: "UserSettingsPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The user's settings. */
  userSettings: UserSettings;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UserSettingsFlagPayload = {
  __typename?: "UserSettingsFlagPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The flag key which was updated. */
  flag: Scalars["String"];
  /** The flag value after update. */
  value: Scalars["Int"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type UserSettingsFlagsResetPayload = {
  __typename?: "UserSettingsFlagsResetPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Incr = "incr",
  Decr = "decr",
  Clear = "clear",
  Lock = "lock",
}

/** The types of flags that the user can have. */
export enum UserFlagType {
  CompletedOnboarding = "completedOnboarding",
  DesktopInstalled = "desktopInstalled",
  DesktopDownloadToastDismissed = "desktopDownloadToastDismissed",
  EmptyBacklogDismissed = "emptyBacklogDismissed",
  EmptyCustomViewsDismissed = "emptyCustomViewsDismissed",
  EmptyActiveIssuesDismissed = "emptyActiveIssuesDismissed",
  EmptyMyIssuesDismissed = "emptyMyIssuesDismissed",
  CycleWelcomeDismissed = "cycleWelcomeDismissed",
  ProjectWelcomeDismissed = "projectWelcomeDismissed",
  AnalyticsWelcomeDismissed = "analyticsWelcomeDismissed",
  FigmaPromptDismissed = "figmaPromptDismissed",
  MigrateThemePreference = "migrateThemePreference",
  ListSelectionTip = "listSelectionTip",
  CanPlaySnake = "canPlaySnake",
}

export type UserSubscribeToNewsletterPayload = {
  __typename?: "UserSubscribeToNewsletterPayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type ViewPreferencesCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
  /** View preferences object. */
  preferences: Scalars["JSONObject"];
  /** The team these view preferences are associated with. */
  teamId?: Maybe<Scalars["String"]>;
  /** The project these view preferences are associated with. */
  projectId?: Maybe<Scalars["String"]>;
  /** The label these view preferences are associated with. */
  labelId?: Maybe<Scalars["String"]>;
  /** The cycle these view preferences are associated with. */
  cycleId?: Maybe<Scalars["String"]>;
  /** The custom view these view preferences are associated with. */
  customViewId?: Maybe<Scalars["String"]>;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = "organization",
  User = "user",
}

/** The client view this custom view is targeting. */
export enum ViewType {
  Inbox = "inbox",
  MyIssues = "myIssues",
  Board = "board",
  CompletedCycle = "completedCycle",
  Cycle = "cycle",
  Project = "project",
  Label = "label",
  ActiveIssues = "activeIssues",
  Backlog = "backlog",
  AllIssues = "allIssues",
  CustomView = "customView",
  Roadmap = "roadmap",
  Projects = "projects",
}

export type ViewPreferencesPayload = {
  __typename?: "ViewPreferencesPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: "ViewPreferences";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The view preference type. */
  type: Scalars["String"];
  /** The view type. */
  viewType: Scalars["String"];
};

export type ViewPreferencesUpdateInput = {
  /** View preferences. */
  preferences: Scalars["JSONObject"];
};

export type WebhookCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars["Boolean"]>;
  /** An optional secret token used to sign the webhook payload. */
  secret?: Maybe<Scalars["String"]>;
  /** The URL that will be called on data changes. */
  url: Scalars["String"];
  /** The identifier or key of the team associated with the Webhook. */
  teamId: Scalars["String"];
};

export type WebhookPayload = {
  __typename?: "WebhookPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The webhook entity being mutated. */
  webhook: Webhook;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type WebhookUpdateInput = {
  /** An optional secret token used to sign the Webhook payload. */
  secret?: Maybe<Scalars["String"]>;
  /** Whether this webhook is enabled. */
  enabled?: Maybe<Scalars["Boolean"]>;
  /** The URL that will be called on data changes. */
  url?: Maybe<Scalars["String"]>;
};

export type WorkflowStateCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: Maybe<Scalars["String"]>;
  /** The workflow type. */
  type: Scalars["String"];
  /** The name of the state. */
  name: Scalars["String"];
  /** The color of the state. */
  color: Scalars["String"];
  /** The description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The position of the state. */
  position?: Maybe<Scalars["Float"]>;
  /** The team associated with the state. */
  teamId: Scalars["String"];
};

export type WorkflowStatePayload = {
  __typename?: "WorkflowStatePayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type WorkflowStateUpdateInput = {
  /** The name of the state. */
  name?: Maybe<Scalars["String"]>;
  /** The color of the state. */
  color?: Maybe<Scalars["String"]>;
  /** The description of the state. */
  description?: Maybe<Scalars["String"]>;
  /** The position of the state. */
  position?: Maybe<Scalars["Float"]>;
};

export type SynchronizedPayload = {
  __typename?: "SynchronizedPayload";
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars["Float"];
};

/** Collaborative editing steps for documents. */
export type DocumentStep = Node & {
  __typename?: "DocumentStep";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** Step data. */
  step: Scalars["JSON"];
  /** Step version. */
  version: Scalars["Float"];
  /** Connected client ID. */
  clientId: Scalars["String"];
};

/** The integration resource's settings */
export type SamlConfiguration = {
  __typename?: "SamlConfiguration";
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars["String"]>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars["String"]>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars["String"]>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars["String"]>;
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars["String"]>>;
};

/** A user account. */
export type UserAccount = {
  __typename?: "UserAccount";
  /** The models identifier. */
  id: Scalars["ID"];
  /** The time at which the model was created. */
  createdAt: Scalars["DateTime"];
  /** The time at which the model was updated. */
  updatedAt: Scalars["DateTime"];
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
  /** The user's name. */
  name?: Maybe<Scalars["String"]>;
  /** The user's email address. */
  email: Scalars["String"];
  /** The authentication service used to create the account. */
  service: Scalars["String"];
  /** Users belonging to the account. */
  users: Array<User>;
};

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: "SlackPostSettings";
  channel: Scalars["String"];
  channelId: Scalars["String"];
  configurationUrl: Scalars["String"];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: "GoogleSheetsSettings";
  spreadsheetId: Scalars["String"];
  spreadsheetUrl: Scalars["String"];
  sheetId: Scalars["Float"];
  updatedIssuesAt: Scalars["DateTime"];
};

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: "SentrySettings";
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars["String"];
};

/** The integration resource's settings */
export type IntegrationSettings = {
  __typename?: "IntegrationSettings";
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  googleSheets?: Maybe<GoogleSheetsSettings>;
  sentry?: Maybe<SentrySettings>;
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  __typename?: "PushSubscription";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The time at which the entity was created. */
  createdAt: Scalars["DateTime"];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars["DateTime"];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars["DateTime"]>;
};

export type PushSubscriptionEdge = {
  __typename?: "PushSubscriptionEdge";
  node: PushSubscription;
  /** Used in `before` and `after` args */
  cursor: Scalars["String"];
};

export type PushSubscriptionConnection = {
  __typename?: "PushSubscriptionConnection";
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

/** A recorded entry of a file uploaded by a user. */
export type FileUpload = {
  __typename?: "FileUpload";
  /** The unique identifier of the entity. */
  id: Scalars["ID"];
  /** The user who uploaded the file. */
  creator?: Maybe<User>;
  /** The organization the upload belongs to. */
  organization: Organization;
  /** The asset URL this file is available at. */
  assetUrl?: Maybe<Scalars["String"]>;
  /** The MIME type of the uploaded file. */
  contentType?: Maybe<Scalars["String"]>;
  /** The name of the uploaded file. */
  filename?: Maybe<Scalars["String"]>;
  /** Additional metadata of the file. */
  metaData: Scalars["JSON"];
  /** Size of the uploaded file in bytes. */
  size: Scalars["Float"];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: "Application";
  /** OAuth application's client ID. */
  clientId: Scalars["String"];
  /** Application name. */
  name: Scalars["String"];
  /** Information about the application. */
  description?: Maybe<Scalars["String"]>;
  /** Name of the developer. */
  developer: Scalars["String"];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars["String"];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars["String"]>;
};

export type OrganizationDomainSimplePayload = {
  __typename?: "OrganizationDomainSimplePayload";
  /** Whether the operation was successful. */
  success: Scalars["Boolean"];
};

export type SamlConfigurationInput = {
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars["String"]>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars["String"]>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars["String"]>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars["String"]>;
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars["String"]>>;
};

export type SyncResponseFragment = { __typename?: "SyncResponse" } & Pick<
  SyncResponse,
  "state" | "delta" | "archive" | "lastSyncId" | "databaseVersion"
>;

export type ArchiveResponseFragment = { __typename?: "ArchiveResponse" } & Pick<
  ArchiveResponse,
  "archive" | "totalCount" | "databaseVersion"
>;

export type ApiKeyConnectionFragment = { __typename?: "ApiKeyConnection" } & {
  nodes: Array<{ __typename?: "ApiKey" } & ApiKeyFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ApiKeyFragment = { __typename?: "ApiKey" } & Pick<
  ApiKey,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "label"
>;

export type PageInfoFragment = { __typename?: "PageInfo" } & Pick<
  PageInfo,
  "hasPreviousPage" | "hasNextPage" | "startCursor" | "endCursor"
>;

export type UserAuthorizedApplicationFragment = { __typename?: "UserAuthorizedApplication" } & Pick<
  UserAuthorizedApplication,
  "clientId" | "name" | "description" | "developer" | "developerUrl" | "imageUrl" | "isAuthorized"
>;

export type AuthorizedApplicationFragment = { __typename?: "AuthorizedApplication" } & Pick<
  AuthorizedApplication,
  "clientId" | "name" | "description" | "developer" | "developerUrl" | "imageUrl" | "scope" | "appId"
>;

export type AuthResolverResponseFragment = { __typename?: "AuthResolverResponse" } & Pick<
  AuthResolverResponse,
  "id" | "token" | "email" | "allowDomainAccess"
> & {
    users: Array<{ __typename?: "User" } & UserFragment>;
    availableOrganizations?: Maybe<Array<{ __typename?: "Organization" } & OrganizationFragment>>;
  };

export type UserFragment = { __typename?: "User" } & Pick<
  User,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "name"
  | "displayName"
  | "email"
  | "avatarUrl"
  | "inviteHash"
  | "lastSeen"
  | "admin"
  | "active"
  | "createdIssueCount"
>;

export type IssueConnectionFragment = { __typename?: "IssueConnection" } & {
  nodes: Array<{ __typename?: "Issue" } & IssueFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueFragment = { __typename?: "Issue" } & Pick<
  Issue,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "number"
  | "title"
  | "description"
  | "priority"
  | "estimate"
  | "boardOrder"
  | "startedAt"
  | "completedAt"
  | "canceledAt"
  | "autoClosedAt"
  | "autoArchivedAt"
  | "dueDate"
  | "previousIdentifiers"
  | "subIssueSortOrder"
  | "identifier"
  | "priorityLabel"
  | "url"
  | "branchName"
> & {
    team: { __typename?: "Team" } & Pick<Team, "id">;
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    state: { __typename?: "WorkflowState" } & Pick<WorkflowState, "id">;
    assignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    parent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type TeamFragment = { __typename?: "Team" } & Pick<
  Team,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "name"
  | "key"
  | "description"
  | "cyclesEnabled"
  | "cycleStartDay"
  | "cycleDuration"
  | "cycleCooldownTime"
  | "cycleIssueAutoAssignStarted"
  | "cycleIssueAutoAssignCompleted"
  | "cycleLockToActive"
  | "upcomingCycleCount"
  | "timezone"
  | "inviteHash"
  | "issueEstimationType"
  | "issueEstimationAllowZero"
  | "issueEstimationExtended"
  | "defaultIssueEstimate"
  | "groupIssueHistory"
  | "slackNewIssue"
  | "slackIssueComments"
  | "slackIssueStatuses"
  | "autoClosePeriod"
  | "autoCloseStateId"
  | "autoArchivePeriod"
  | "cycleCalenderUrl"
> & {
    draftWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    startWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    reviewWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    mergeWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    markedAsDuplicateWorkflowState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    activeCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
  };

export type WorkflowStateFragment = { __typename?: "WorkflowState" } & Pick<
  WorkflowState,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "color" | "description" | "position" | "type"
> & { team: { __typename?: "Team" } & Pick<Team, "id"> };

export type CycleConnectionFragment = { __typename?: "CycleConnection" } & {
  nodes: Array<{ __typename?: "Cycle" } & CycleFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CycleFragment = { __typename?: "Cycle" } & Pick<
  Cycle,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "number"
  | "name"
  | "startsAt"
  | "endsAt"
  | "completedAt"
  | "issueCountHistory"
  | "completedIssueCountHistory"
  | "scopeHistory"
  | "completedScopeHistory"
> & { team: { __typename?: "Team" } & Pick<Team, "id"> };

export type TeamMembershipConnectionFragment = { __typename?: "TeamMembershipConnection" } & {
  nodes: Array<{ __typename?: "TeamMembership" } & TeamMembershipFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TeamMembershipFragment = { __typename?: "TeamMembership" } & Pick<
  TeamMembership,
  "id" | "createdAt" | "updatedAt" | "archivedAt"
> & { user: { __typename?: "User" } & Pick<User, "id">; team: { __typename?: "Team" } & Pick<Team, "id"> };

export type ProjectConnectionFragment = { __typename?: "ProjectConnection" } & {
  nodes: Array<{ __typename?: "Project" } & ProjectFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ProjectFragment = { __typename?: "Project" } & Pick<
  Project,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "name"
  | "description"
  | "slugId"
  | "icon"
  | "color"
  | "state"
  | "targetDate"
  | "startedAt"
  | "completedAt"
  | "canceledAt"
  | "sortOrder"
  | "issueCountHistory"
  | "completedIssueCountHistory"
  | "scopeHistory"
  | "completedScopeHistory"
  | "slackNewIssue"
  | "slackIssueComments"
  | "slackIssueStatuses"
> & {
    creator: { __typename?: "User" } & Pick<User, "id">;
    lead?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    milestone?: Maybe<{ __typename?: "Milestone" } & Pick<Milestone, "id">>;
  };

export type MilestoneFragment = { __typename?: "Milestone" } & Pick<
  Milestone,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "sortOrder"
>;

export type OrganizationFragment = { __typename?: "Organization" } & Pick<
  Organization,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "name"
  | "urlKey"
  | "logoUrl"
  | "periodUploadVolume"
  | "gitBranchFormat"
  | "gitLinkbackMessagesEnabled"
  | "gitPublicLinkbackMessagesEnabled"
  | "roadmapEnabled"
  | "samlEnabled"
  | "allowedAuthServices"
  | "userCount"
  | "createdIssueCount"
>;

export type UserConnectionFragment = { __typename?: "UserConnection" } & {
  nodes: Array<{ __typename?: "User" } & UserFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TeamConnectionFragment = { __typename?: "TeamConnection" } & {
  nodes: Array<{ __typename?: "Team" } & TeamFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type MilestoneConnectionFragment = { __typename?: "MilestoneConnection" } & {
  nodes: Array<{ __typename?: "Milestone" } & MilestoneFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IntegrationConnectionFragment = { __typename?: "IntegrationConnection" } & {
  nodes: Array<{ __typename?: "Integration" } & IntegrationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IntegrationFragment = { __typename?: "Integration" } & Pick<
  Integration,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "service"
> & { team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>; creator: { __typename?: "User" } & Pick<User, "id"> };

export type SubscriptionFragment = { __typename?: "Subscription" } & Pick<
  Subscription,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "seats" | "canceledAt" | "pendingChangeType"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type ProjectLinkConnectionFragment = { __typename?: "ProjectLinkConnection" } & {
  nodes: Array<{ __typename?: "ProjectLink" } & ProjectLinkFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ProjectLinkFragment = { __typename?: "ProjectLink" } & Pick<
  ProjectLink,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "url" | "label"
> & { creator: { __typename?: "User" } & Pick<User, "id">; project: { __typename?: "Project" } & Pick<Project, "id"> };

export type WorkflowStateConnectionFragment = { __typename?: "WorkflowStateConnection" } & {
  nodes: Array<{ __typename?: "WorkflowState" } & WorkflowStateFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TemplateConnectionFragment = { __typename?: "TemplateConnection" } & {
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type TemplateFragment = { __typename?: "Template" } & Pick<
  Template,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "name" | "description" | "templateData"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type IssueLabelConnectionFragment = { __typename?: "IssueLabelConnection" } & {
  nodes: Array<{ __typename?: "IssueLabel" } & IssueLabelFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueLabelFragment = { __typename?: "IssueLabel" } & Pick<
  IssueLabel,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "description" | "color"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type WebhookConnectionFragment = { __typename?: "WebhookConnection" } & {
  nodes: Array<{ __typename?: "Webhook" } & WebhookFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type WebhookFragment = { __typename?: "Webhook" } & Pick<
  Webhook,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "url" | "enabled" | "secret"
> & { team: { __typename?: "Team" } & Pick<Team, "id">; creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type CommentConnectionFragment = { __typename?: "CommentConnection" } & {
  nodes: Array<{ __typename?: "Comment" } & CommentFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CommentFragment = { __typename?: "Comment" } & Pick<
  Comment,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "body" | "editedAt"
> & { user: { __typename?: "User" } & Pick<User, "id">; issue: { __typename?: "Issue" } & Pick<Issue, "id"> };

export type IssueHistoryConnectionFragment = { __typename?: "IssueHistoryConnection" } & {
  nodes: Array<{ __typename?: "IssueHistory" } & IssueHistoryFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueHistoryFragment = { __typename?: "IssueHistory" } & Pick<
  IssueHistory,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "source"
  | "updatedDescription"
  | "fromTitle"
  | "toTitle"
  | "fromPriority"
  | "toPriority"
  | "fromEstimate"
  | "toEstimate"
  | "archived"
  | "addedLabelIds"
  | "removedLabelIds"
  | "relationChanges"
  | "autoClosed"
  | "autoArchived"
  | "fromDueDate"
  | "toDueDate"
> & {
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
    actor?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    fromAssignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    toAssignee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
    fromTeam?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    toTeam?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    fromParent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    toParent?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    fromState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    toState?: Maybe<{ __typename?: "WorkflowState" } & Pick<WorkflowState, "id">>;
    fromCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    toCycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    fromProject?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    toProject?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
  };

export type IntegrationResourceConnectionFragment = { __typename?: "IntegrationResourceConnection" } & {
  nodes: Array<{ __typename?: "IntegrationResource" } & IntegrationResourceFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IntegrationResourceFragment = { __typename?: "IntegrationResource" } & Pick<
  IntegrationResource,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "resourceType" | "resourceId"
> & {
    data: { __typename?: "IntegrationResourceData" } & IntegrationResourceDataFragment;
    integration: { __typename?: "Integration" } & Pick<Integration, "id">;
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
    pullRequest: { __typename?: "PullRequestPayload" } & PullRequestPayloadFragment;
  };

export type IntegrationResourceDataFragment = { __typename?: "IntegrationResourceData" } & {
  githubPullRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
  gitlabMergeRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
  githubCommit?: Maybe<{ __typename?: "CommitPayload" } & CommitPayloadFragment>;
  sentryIssue?: Maybe<{ __typename?: "SentryIssuePayload" } & SentryIssuePayloadFragment>;
};

export type PullRequestPayloadFragment = { __typename?: "PullRequestPayload" } & Pick<
  PullRequestPayload,
  | "status"
  | "number"
  | "url"
  | "draft"
  | "id"
  | "title"
  | "branch"
  | "userId"
  | "userLogin"
  | "repoLogin"
  | "repoName"
  | "createdAt"
  | "updatedAt"
  | "closedAt"
  | "mergedAt"
>;

export type CommitPayloadFragment = { __typename?: "CommitPayload" } & Pick<
  CommitPayload,
  "id" | "message" | "timestamp" | "url" | "added" | "removed" | "modified"
>;

export type SentryIssuePayloadFragment = { __typename?: "SentryIssuePayload" } & Pick<
  SentryIssuePayload,
  | "issueId"
  | "webUrl"
  | "actorType"
  | "actorId"
  | "actorName"
  | "projectId"
  | "projectSlug"
  | "issueTitle"
  | "shortId"
  | "firstSeen"
  | "firstVersion"
>;

export type IssueRelationConnectionFragment = { __typename?: "IssueRelationConnection" } & {
  nodes: Array<{ __typename?: "IssueRelation" } & IssueRelationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type IssueRelationFragment = { __typename?: "IssueRelation" } & Pick<
  IssueRelation,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type"
> & { issue: { __typename?: "Issue" } & Pick<Issue, "id">; relatedIssue: { __typename?: "Issue" } & Pick<Issue, "id"> };

export type SsoUrlFromEmailResponseFragment = { __typename?: "SsoUrlFromEmailResponse" } & Pick<
  SsoUrlFromEmailResponse,
  "success" | "samlSsoUrl"
>;

export type BillingDetailsPayloadFragment = { __typename?: "BillingDetailsPayload" } & Pick<
  BillingDetailsPayload,
  "success" | "email"
> & {
    invoices: Array<{ __typename?: "Invoice" } & InvoiceFragment>;
    paymentMethod?: Maybe<{ __typename?: "Card" } & CardFragment>;
  };

export type InvoiceFragment = { __typename?: "Invoice" } & Pick<
  Invoice,
  "url" | "created" | "dueDate" | "status" | "total"
>;

export type CardFragment = { __typename?: "Card" } & Pick<Card, "brand" | "last4">;

export type CollaborationDocumentUpdatePayloadFragment = { __typename?: "CollaborationDocumentUpdatePayload" } & Pick<
  CollaborationDocumentUpdatePayload,
  "success"
> & { steps?: Maybe<{ __typename?: "StepsResponse" } & StepsResponseFragment> };

export type StepsResponseFragment = { __typename?: "StepsResponse" } & Pick<
  StepsResponse,
  "version" | "steps" | "clientIds"
>;

export type CustomViewConnectionFragment = { __typename?: "CustomViewConnection" } & {
  nodes: Array<{ __typename?: "CustomView" } & CustomViewFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type CustomViewFragment = { __typename?: "CustomView" } & Pick<
  CustomView,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "description" | "icon" | "color" | "filters" | "shared"
> & { team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>; creator: { __typename?: "User" } & Pick<User, "id"> };

export type EmojiConnectionFragment = { __typename?: "EmojiConnection" } & {
  nodes: Array<{ __typename?: "Emoji" } & EmojiFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type EmojiFragment = { __typename?: "Emoji" } & Pick<
  Emoji,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "url" | "source"
> & { creator: { __typename?: "User" } & Pick<User, "id"> };

export type FavoriteConnectionFragment = { __typename?: "FavoriteConnection" } & {
  nodes: Array<{ __typename?: "Favorite" } & FavoriteFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type FavoriteFragment = { __typename?: "Favorite" } & Pick<
  Favorite,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "sortOrder"
> & {
    user: { __typename?: "User" } & Pick<User, "id">;
    issue?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    projectTeam?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
    label?: Maybe<{ __typename?: "IssueLabel" } & Pick<IssueLabel, "id">>;
  };

export type FigmaEmbedPayloadFragment = { __typename?: "FigmaEmbedPayload" } & Pick<
  FigmaEmbedPayload,
  "lastSyncId" | "success"
> & { figmaEmbed?: Maybe<{ __typename?: "FigmaEmbed" } & FigmaEmbedFragment> };

export type FigmaEmbedFragment = { __typename?: "FigmaEmbed" } & Pick<
  FigmaEmbed,
  "name" | "lastModified" | "nodeName" | "url"
>;

export type InvitePagePayloadFragment = { __typename?: "InvitePagePayload" } & Pick<InvitePagePayload, "success"> & {
    inviteData?: Maybe<{ __typename?: "InviteData" } & InviteDataFragment>;
  };

export type InviteDataFragment = { __typename?: "InviteData" } & Pick<
  InviteData,
  | "inviterName"
  | "avatarURLs"
  | "teamNames"
  | "teamIds"
  | "organizationName"
  | "organizationDomain"
  | "organizationLogoUrl"
  | "userCount"
>;

export type NotificationConnectionFragment = { __typename?: "NotificationConnection" } & {
  nodes: Array<{ __typename?: "Notification" } & NotificationFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type NotificationFragment = { __typename?: "Notification" } & Pick<
  Notification,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "reactionEmoji" | "readAt" | "emailedAt"
> & {
    user: { __typename?: "User" } & Pick<User, "id">;
    issue: { __typename?: "Issue" } & Pick<Issue, "id">;
    team: { __typename?: "Team" } & Pick<Team, "id">;
    comment?: Maybe<{ __typename?: "Comment" } & Pick<Comment, "id">>;
  };

export type NotificationSubscriptionConnectionFragment = { __typename?: "NotificationSubscriptionConnection" } & {
  nodes: Array<{ __typename?: "NotificationSubscription" } & NotificationSubscriptionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type NotificationSubscriptionFragment = { __typename?: "NotificationSubscription" } & Pick<
  NotificationSubscription,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type"
> & {
    user: { __typename?: "User" } & Pick<User, "id">;
    team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
    project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">>;
  };

export type OrganizationInviteConnectionFragment = { __typename?: "OrganizationInviteConnection" } & {
  nodes: Array<{ __typename?: "OrganizationInvite" } & OrganizationInviteFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type OrganizationInviteFragment = { __typename?: "OrganizationInvite" } & Pick<
  OrganizationInvite,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "email" | "external" | "acceptedAt" | "expiresAt"
> & {
    inviter: { __typename?: "User" } & Pick<User, "id">;
    invitee?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type OrganizationExistsPayloadFragment = { __typename?: "OrganizationExistsPayload" } & Pick<
  OrganizationExistsPayload,
  "success" | "exists"
>;

export type PushSubscriptionPayloadFragment = { __typename?: "PushSubscriptionPayload" } & Pick<
  PushSubscriptionPayload,
  "lastSyncId" | "success"
>;

export type ReactionConnectionFragment = { __typename?: "ReactionConnection" } & {
  nodes: Array<{ __typename?: "Reaction" } & ReactionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type ReactionFragment = { __typename?: "Reaction" } & Pick<
  Reaction,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "emoji"
> & { user: { __typename?: "User" } & Pick<User, "id">; comment: { __typename?: "Comment" } & Pick<Comment, "id"> };

export type UserSettingsFragment = { __typename?: "UserSettings" } & Pick<
  UserSettings,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "notificationPreferences" | "unsubscribedFrom"
> & { user: { __typename?: "User" } & Pick<User, "id"> };

export type EventPayloadFragment = { __typename?: "EventPayload" } & Pick<EventPayload, "success">;

export type ApiKeyPayloadFragment = { __typename?: "ApiKeyPayload" } & Pick<ApiKeyPayload, "lastSyncId" | "success"> & {
    apiKey: { __typename?: "ApiKey" } & ApiKeyFragment;
  };

export type ArchivePayloadFragment = { __typename?: "ArchivePayload" } & Pick<ArchivePayload, "lastSyncId" | "success">;

export type EmailUserAccountAuthChallengeResponseFragment = {
  __typename?: "EmailUserAccountAuthChallengeResponse";
} & Pick<EmailUserAccountAuthChallengeResponse, "success" | "authType">;

export type CreateOrJoinOrganizationResponseFragment = { __typename?: "CreateOrJoinOrganizationResponse" } & {
  user: { __typename?: "User" } & Pick<User, "id">;
};

export type BillingEmailPayloadFragment = { __typename?: "BillingEmailPayload" } & Pick<
  BillingEmailPayload,
  "success" | "email"
>;

export type CommentPayloadFragment = { __typename?: "CommentPayload" } & Pick<
  CommentPayload,
  "lastSyncId" | "success"
> & { comment: { __typename?: "Comment" } & Pick<Comment, "id"> };

export type ContactPayloadFragment = { __typename?: "ContactPayload" } & Pick<ContactPayload, "success">;

export type CustomViewPayloadFragment = { __typename?: "CustomViewPayload" } & Pick<
  CustomViewPayload,
  "lastSyncId" | "success"
> & { customView: { __typename?: "CustomView" } & Pick<CustomView, "id"> };

export type CyclePayloadFragment = { __typename?: "CyclePayload" } & Pick<CyclePayload, "lastSyncId" | "success"> & {
    cycle?: Maybe<{ __typename?: "Cycle" } & Pick<Cycle, "id">>;
  };

export type DebugPayloadFragment = { __typename?: "DebugPayload" } & Pick<DebugPayload, "success">;

export type EmailUnsubscribePayloadFragment = { __typename?: "EmailUnsubscribePayload" } & Pick<
  EmailUnsubscribePayload,
  "success"
>;

export type EmojiPayloadFragment = { __typename?: "EmojiPayload" } & Pick<EmojiPayload, "lastSyncId" | "success"> & {
    emoji: { __typename?: "Emoji" } & Pick<Emoji, "id">;
  };

export type FavoritePayloadFragment = { __typename?: "FavoritePayload" } & Pick<
  FavoritePayload,
  "lastSyncId" | "success"
> & { favorite: { __typename?: "Favorite" } & Pick<Favorite, "id"> };

export type FeedbackPayloadFragment = { __typename?: "FeedbackPayload" } & Pick<FeedbackPayload, "success">;

export type UploadPayloadFragment = { __typename?: "UploadPayload" } & Pick<UploadPayload, "lastSyncId" | "success"> & {
    uploadFile?: Maybe<{ __typename?: "UploadFile" } & UploadFileFragment>;
  };

export type UploadFileFragment = { __typename?: "UploadFile" } & Pick<
  UploadFile,
  "filename" | "contentType" | "size" | "uploadUrl" | "assetUrl" | "metaData"
> & { headers: Array<{ __typename?: "UploadFileHeader" } & UploadFileHeaderFragment> };

export type UploadFileHeaderFragment = { __typename?: "UploadFileHeader" } & Pick<UploadFileHeader, "key" | "value">;

export type ImageUploadFromUrlPayloadFragment = { __typename?: "ImageUploadFromUrlPayload" } & Pick<
  ImageUploadFromUrlPayload,
  "lastSyncId" | "url" | "success"
>;

export type IntegrationPayloadFragment = { __typename?: "IntegrationPayload" } & Pick<
  IntegrationPayload,
  "lastSyncId" | "success"
> & { integration?: Maybe<{ __typename?: "Integration" } & Pick<Integration, "id">> };

export type IssueImportPayloadFragment = { __typename?: "IssueImportPayload" } & Pick<
  IssueImportPayload,
  "lastSyncId" | "success"
> & { importJob?: Maybe<{ __typename?: "IssueImport" } & IssueImportFragment> };

export type IssueImportFragment = { __typename?: "IssueImport" } & Pick<
  IssueImport,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "organizationId" | "creatorId" | "service" | "status"
>;

export type IssueLabelPayloadFragment = { __typename?: "IssueLabelPayload" } & Pick<
  IssueLabelPayload,
  "lastSyncId" | "success"
> & { issueLabel: { __typename?: "IssueLabel" } & Pick<IssueLabel, "id"> };

export type IssueRelationPayloadFragment = { __typename?: "IssueRelationPayload" } & Pick<
  IssueRelationPayload,
  "lastSyncId" | "success"
> & { issueRelation: { __typename?: "IssueRelation" } & Pick<IssueRelation, "id"> };

export type IssuePayloadFragment = { __typename?: "IssuePayload" } & Pick<IssuePayload, "lastSyncId" | "success"> & {
    issue?: Maybe<{ __typename?: "Issue" } & Pick<Issue, "id">>;
  };

export type MilestonePayloadFragment = { __typename?: "MilestonePayload" } & Pick<
  MilestonePayload,
  "lastSyncId" | "success"
> & { milestone?: Maybe<{ __typename?: "Milestone" } & Pick<Milestone, "id">> };

export type NotificationPayloadFragment = { __typename?: "NotificationPayload" } & Pick<
  NotificationPayload,
  "lastSyncId" | "success"
> & { notification: { __typename?: "Notification" } & Pick<Notification, "id"> };

export type NotificationSubscriptionPayloadFragment = { __typename?: "NotificationSubscriptionPayload" } & Pick<
  NotificationSubscriptionPayload,
  "lastSyncId" | "success"
> & { notificationSubscription: { __typename?: "NotificationSubscription" } & Pick<NotificationSubscription, "id"> };

export type OauthClientPayloadFragment = { __typename?: "OauthClientPayload" } & Pick<
  OauthClientPayload,
  "lastSyncId" | "success"
> & { oauthClient: { __typename?: "OauthClient" } & OauthClientFragment };

export type OauthClientFragment = { __typename?: "OauthClient" } & Pick<
  OauthClient,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "archivedAt"
  | "clientId"
  | "name"
  | "description"
  | "developer"
  | "developerUrl"
  | "imageUrl"
  | "clientSecret"
  | "redirectUris"
>;

export type RotateSecretPayloadFragment = { __typename?: "RotateSecretPayload" } & Pick<
  RotateSecretPayload,
  "lastSyncId" | "success"
>;

export type OauthTokenRevokePayloadFragment = { __typename?: "OauthTokenRevokePayload" } & Pick<
  OauthTokenRevokePayload,
  "success"
>;

export type OrganizationDomainPayloadFragment = { __typename?: "OrganizationDomainPayload" } & Pick<
  OrganizationDomainPayload,
  "lastSyncId" | "success"
> & { organizationDomain: { __typename?: "OrganizationDomain" } & OrganizationDomainFragment };

export type OrganizationDomainFragment = { __typename?: "OrganizationDomain" } & Pick<
  OrganizationDomain,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "verified" | "verificationEmail"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type OrganizationInvitePayloadFragment = { __typename?: "OrganizationInvitePayload" } & Pick<
  OrganizationInvitePayload,
  "lastSyncId" | "success"
> & { organizationInvite: { __typename?: "OrganizationInvite" } & OrganizationInviteFragment };

export type OrganizationPayloadFragment = { __typename?: "OrganizationPayload" } & Pick<
  OrganizationPayload,
  "lastSyncId" | "success"
>;

export type OrganizationDeletePayloadFragment = { __typename?: "OrganizationDeletePayload" } & Pick<
  OrganizationDeletePayload,
  "success"
>;

export type ProjectLinkPayloadFragment = { __typename?: "ProjectLinkPayload" } & Pick<
  ProjectLinkPayload,
  "lastSyncId" | "success"
> & { projectLink: { __typename?: "ProjectLink" } & Pick<ProjectLink, "id"> };

export type ProjectPayloadFragment = { __typename?: "ProjectPayload" } & Pick<
  ProjectPayload,
  "lastSyncId" | "success"
> & { project?: Maybe<{ __typename?: "Project" } & Pick<Project, "id">> };

export type ReactionPayloadFragment = { __typename?: "ReactionPayload" } & Pick<
  ReactionPayload,
  "lastSyncId" | "success"
> & { reaction: { __typename?: "Reaction" } & Pick<Reaction, "id"> };

export type CreateCsvExportReportPayloadFragment = { __typename?: "CreateCsvExportReportPayload" } & Pick<
  CreateCsvExportReportPayload,
  "success"
>;

export type SubscriptionSessionPayloadFragment = { __typename?: "SubscriptionSessionPayload" } & Pick<
  SubscriptionSessionPayload,
  "session"
>;

export type SubscriptionPayloadFragment = { __typename?: "SubscriptionPayload" } & Pick<
  SubscriptionPayload,
  "lastSyncId" | "canceledAt" | "success"
>;

export type TeamMembershipPayloadFragment = { __typename?: "TeamMembershipPayload" } & Pick<
  TeamMembershipPayload,
  "lastSyncId" | "success"
> & { teamMembership?: Maybe<{ __typename?: "TeamMembership" } & Pick<TeamMembership, "id">> };

export type TeamPayloadFragment = { __typename?: "TeamPayload" } & Pick<TeamPayload, "lastSyncId" | "success"> & {
    team?: Maybe<{ __typename?: "Team" } & Pick<Team, "id">>;
  };

export type TemplatePayloadFragment = { __typename?: "TemplatePayload" } & Pick<
  TemplatePayload,
  "lastSyncId" | "success"
> & { template: { __typename?: "Template" } & Pick<Template, "id"> };

export type UserPayloadFragment = { __typename?: "UserPayload" } & Pick<UserPayload, "lastSyncId" | "success"> & {
    user?: Maybe<{ __typename?: "User" } & Pick<User, "id">>;
  };

export type UserAdminPayloadFragment = { __typename?: "UserAdminPayload" } & Pick<UserAdminPayload, "success">;

export type UserSettingsPayloadFragment = { __typename?: "UserSettingsPayload" } & Pick<
  UserSettingsPayload,
  "lastSyncId" | "success"
>;

export type UserSettingsFlagPayloadFragment = { __typename?: "UserSettingsFlagPayload" } & Pick<
  UserSettingsFlagPayload,
  "lastSyncId" | "flag" | "value" | "success"
>;

export type UserSettingsFlagsResetPayloadFragment = { __typename?: "UserSettingsFlagsResetPayload" } & Pick<
  UserSettingsFlagsResetPayload,
  "lastSyncId" | "success"
>;

export type UserSubscribeToNewsletterPayloadFragment = { __typename?: "UserSubscribeToNewsletterPayload" } & Pick<
  UserSubscribeToNewsletterPayload,
  "success"
>;

export type ViewPreferencesPayloadFragment = { __typename?: "ViewPreferencesPayload" } & Pick<
  ViewPreferencesPayload,
  "lastSyncId" | "success"
> & { viewPreferences: { __typename?: "ViewPreferences" } & ViewPreferencesFragment };

export type ViewPreferencesFragment = { __typename?: "ViewPreferences" } & Pick<
  ViewPreferences,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "viewType"
>;

export type WebhookPayloadFragment = { __typename?: "WebhookPayload" } & Pick<
  WebhookPayload,
  "lastSyncId" | "success"
> & { webhook: { __typename?: "Webhook" } & Pick<Webhook, "id"> };

export type WorkflowStatePayloadFragment = { __typename?: "WorkflowStatePayload" } & Pick<
  WorkflowStatePayload,
  "lastSyncId" | "success"
> & { workflowState: { __typename?: "WorkflowState" } & Pick<WorkflowState, "id"> };

export type SynchronizedPayloadFragment = { __typename?: "SynchronizedPayload" } & Pick<
  SynchronizedPayload,
  "lastSyncId"
>;

export type DocumentStepFragment = { __typename?: "DocumentStep" } & Pick<
  DocumentStep,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "step" | "version" | "clientId"
>;

export type SamlConfigurationFragment = { __typename?: "SamlConfiguration" } & Pick<
  SamlConfiguration,
  "ssoSigningCert" | "ssoEndpoint" | "ssoBinding" | "ssoSignAlgo" | "allowedDomains"
>;

export type UserAccountFragment = { __typename?: "UserAccount" } & Pick<
  UserAccount,
  "id" | "createdAt" | "updatedAt" | "archivedAt" | "name" | "email" | "service"
> & { users: Array<{ __typename?: "User" } & UserFragment> };

export type SlackPostSettingsFragment = { __typename?: "SlackPostSettings" } & Pick<
  SlackPostSettings,
  "channel" | "channelId" | "configurationUrl"
>;

export type GoogleSheetsSettingsFragment = { __typename?: "GoogleSheetsSettings" } & Pick<
  GoogleSheetsSettings,
  "spreadsheetId" | "spreadsheetUrl" | "sheetId" | "updatedIssuesAt"
>;

export type SentrySettingsFragment = { __typename?: "SentrySettings" } & Pick<SentrySettings, "organizationSlug">;

export type IntegrationSettingsFragment = { __typename?: "IntegrationSettings" } & {
  slackPost?: Maybe<{ __typename?: "SlackPostSettings" } & SlackPostSettingsFragment>;
  slackProjectPost?: Maybe<{ __typename?: "SlackPostSettings" } & SlackPostSettingsFragment>;
  googleSheets?: Maybe<{ __typename?: "GoogleSheetsSettings" } & GoogleSheetsSettingsFragment>;
  sentry?: Maybe<{ __typename?: "SentrySettings" } & SentrySettingsFragment>;
};

export type PushSubscriptionFragment = { __typename?: "PushSubscription" } & Pick<
  PushSubscription,
  "id" | "createdAt" | "updatedAt" | "archivedAt"
>;

export type PushSubscriptionConnectionFragment = { __typename?: "PushSubscriptionConnection" } & {
  nodes: Array<{ __typename?: "PushSubscription" } & PushSubscriptionFragment>;
  pageInfo: { __typename?: "PageInfo" } & PageInfoFragment;
};

export type FileUploadFragment = { __typename?: "FileUpload" } & Pick<
  FileUpload,
  "id" | "assetUrl" | "contentType" | "filename" | "metaData" | "size"
> & { creator?: Maybe<{ __typename?: "User" } & Pick<User, "id">> };

export type ApplicationFragment = { __typename?: "Application" } & Pick<
  Application,
  "clientId" | "name" | "description" | "developer" | "developerUrl" | "imageUrl"
>;

export type OrganizationDomainSimplePayloadFragment = { __typename?: "OrganizationDomainSimplePayload" } & Pick<
  OrganizationDomainSimplePayload,
  "success"
>;

export type SyncBootstrapQueryVariables = Exact<{
  databaseVersion: Scalars["Int"];
  sinceSyncId: Scalars["Int"];
}>;

export type SyncBootstrapQuery = { __typename?: "Query" } & {
  syncBootstrap: { __typename?: "SyncResponse" } & SyncResponseFragment;
};

export type SyncUpdatesQueryVariables = Exact<{
  sinceSyncId: Scalars["Float"];
}>;

export type SyncUpdatesQuery = { __typename?: "Query" } & {
  syncUpdates: { __typename?: "SyncResponse" } & SyncResponseFragment;
};

export type ArchivedModelSyncQueryVariables = Exact<{
  identifier: Scalars["String"];
  modelClass: Scalars["String"];
}>;

export type ArchivedModelSyncQuery = { __typename?: "Query" } & {
  archivedModelSync: { __typename?: "ArchiveResponse" } & ArchiveResponseFragment;
};

export type ArchivedModelsSyncQueryVariables = Exact<{
  modelClass: Scalars["String"];
  teamId: Scalars["String"];
  before?: Maybe<Scalars["DateTime"]>;
  last?: Maybe<Scalars["Int"]>;
}>;

export type ArchivedModelsSyncQuery = { __typename?: "Query" } & {
  archivedModelsSync: { __typename?: "ArchiveResponse" } & ArchiveResponseFragment;
};

export type ApiKeysQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ApiKeysQuery = { __typename?: "Query" } & {
  apiKeys: { __typename?: "ApiKeyConnection" } & ApiKeyConnectionFragment;
};

export type ApplicationWithAuthorizationQueryVariables = Exact<{
  redirectUri?: Maybe<Scalars["String"]>;
  scope: Array<Scalars["String"]>;
  clientId: Scalars["String"];
}>;

export type ApplicationWithAuthorizationQuery = { __typename?: "Query" } & {
  applicationWithAuthorization: { __typename?: "UserAuthorizedApplication" } & UserAuthorizedApplicationFragment;
};

export type AuthorizedApplicationsQueryVariables = Exact<{ [key: string]: never }>;

export type AuthorizedApplicationsQuery = { __typename?: "Query" } & {
  authorizedApplications: Array<
    { __typename?: "AuthorizedApplication" } & Pick<
      AuthorizedApplication,
      "clientId" | "name" | "description" | "developer" | "developerUrl" | "imageUrl" | "scope" | "appId"
    >
  >;
};

export type AvailableUsersQueryVariables = Exact<{ [key: string]: never }>;

export type AvailableUsersQuery = { __typename?: "Query" } & {
  availableUsers: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type SsoUrlFromEmailQueryVariables = Exact<{
  isDesktop?: Maybe<Scalars["Boolean"]>;
  email: Scalars["String"];
}>;

export type SsoUrlFromEmailQuery = { __typename?: "Query" } & {
  ssoUrlFromEmail: { __typename?: "SsoUrlFromEmailResponse" } & SsoUrlFromEmailResponseFragment;
};

export type BillingDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type BillingDetailsQuery = { __typename?: "Query" } & {
  billingDetails: { __typename?: "BillingDetailsPayload" } & BillingDetailsPayloadFragment;
};

export type BillingDetails_PaymentMethodQueryVariables = Exact<{ [key: string]: never }>;

export type BillingDetails_PaymentMethodQuery = { __typename?: "Query" } & {
  billingDetails: { __typename?: "BillingDetailsPayload" } & {
    paymentMethod?: Maybe<{ __typename?: "Card" } & CardFragment>;
  };
};

export type CollaborativeDocumentJoinQueryVariables = Exact<{
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
}>;

export type CollaborativeDocumentJoinQuery = { __typename?: "Query" } & {
  collaborativeDocumentJoin: {
    __typename?: "CollaborationDocumentUpdatePayload";
  } & CollaborationDocumentUpdatePayloadFragment;
};

export type CollaborativeDocumentJoin_StepsQueryVariables = Exact<{
  clientId: Scalars["String"];
  issueId: Scalars["String"];
  version: Scalars["Int"];
}>;

export type CollaborativeDocumentJoin_StepsQuery = { __typename?: "Query" } & {
  collaborativeDocumentJoin: { __typename?: "CollaborationDocumentUpdatePayload" } & {
    steps?: Maybe<{ __typename?: "StepsResponse" } & StepsResponseFragment>;
  };
};

export type CommentsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CommentsQuery = { __typename?: "Query" } & {
  comments: { __typename?: "CommentConnection" } & CommentConnectionFragment;
};

export type CommentQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CommentQuery = { __typename?: "Query" } & { comment: { __typename?: "Comment" } & CommentFragment };

export type CustomViewsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CustomViewsQuery = { __typename?: "Query" } & {
  customViews: { __typename?: "CustomViewConnection" } & CustomViewConnectionFragment;
};

export type CustomViewQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CustomViewQuery = { __typename?: "Query" } & {
  customView: { __typename?: "CustomView" } & CustomViewFragment;
};

export type CyclesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type CyclesQuery = { __typename?: "Query" } & {
  cycles: { __typename?: "CycleConnection" } & CycleConnectionFragment;
};

export type CycleQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type CycleQuery = { __typename?: "Query" } & { cycle: { __typename?: "Cycle" } & CycleFragment };

export type Cycle_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Cycle_IssuesQuery = { __typename?: "Query" } & {
  cycle: { __typename?: "Cycle" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Cycle_UncompletedIssuesUponCloseQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Cycle_UncompletedIssuesUponCloseQuery = { __typename?: "Query" } & {
  cycle: { __typename?: "Cycle" } & {
    uncompletedIssuesUponClose: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type EmojisQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type EmojisQuery = { __typename?: "Query" } & {
  emojis: { __typename?: "EmojiConnection" } & EmojiConnectionFragment;
};

export type EmojiQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type EmojiQuery = { __typename?: "Query" } & { emoji: { __typename?: "Emoji" } & EmojiFragment };

export type FavoritesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type FavoritesQuery = { __typename?: "Query" } & {
  favorites: { __typename?: "FavoriteConnection" } & FavoriteConnectionFragment;
};

export type FavoriteQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FavoriteQuery = { __typename?: "Query" } & { favorite: { __typename?: "Favorite" } & FavoriteFragment };

export type FigmaEmbedInfoQueryVariables = Exact<{
  nodeId?: Maybe<Scalars["String"]>;
  fileId: Scalars["String"];
}>;

export type FigmaEmbedInfoQuery = { __typename?: "Query" } & {
  figmaEmbedInfo: { __typename?: "FigmaEmbedPayload" } & FigmaEmbedPayloadFragment;
};

export type FigmaEmbedInfo_FigmaEmbedQueryVariables = Exact<{
  nodeId?: Maybe<Scalars["String"]>;
  fileId: Scalars["String"];
}>;

export type FigmaEmbedInfo_FigmaEmbedQuery = { __typename?: "Query" } & {
  figmaEmbedInfo: { __typename?: "FigmaEmbedPayload" } & {
    figmaEmbed?: Maybe<{ __typename?: "FigmaEmbed" } & FigmaEmbedFragment>;
  };
};

export type IntegrationsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IntegrationsQuery = { __typename?: "Query" } & {
  integrations: { __typename?: "IntegrationConnection" } & IntegrationConnectionFragment;
};

export type IntegrationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationQuery = { __typename?: "Query" } & {
  integration: { __typename?: "Integration" } & IntegrationFragment;
};

export type IntegrationResourcesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IntegrationResourcesQuery = { __typename?: "Query" } & {
  integrationResources: { __typename?: "IntegrationResourceConnection" } & IntegrationResourceConnectionFragment;
};

export type IntegrationResourceQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResourceQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & IntegrationResourceFragment;
};

export type IntegrationResource_DataQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_DataQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    data: { __typename?: "IntegrationResourceData" } & IntegrationResourceDataFragment;
  };
};

export type IntegrationResource_Data_GithubPullRequestQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_Data_GithubPullRequestQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    data: { __typename?: "IntegrationResourceData" } & {
      githubPullRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
    };
  };
};

export type IntegrationResource_Data_GitlabMergeRequestQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_Data_GitlabMergeRequestQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    data: { __typename?: "IntegrationResourceData" } & {
      gitlabMergeRequest?: Maybe<{ __typename?: "PullRequestPayload" } & PullRequestPayloadFragment>;
    };
  };
};

export type IntegrationResource_Data_GithubCommitQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_Data_GithubCommitQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    data: { __typename?: "IntegrationResourceData" } & {
      githubCommit?: Maybe<{ __typename?: "CommitPayload" } & CommitPayloadFragment>;
    };
  };
};

export type IntegrationResource_Data_SentryIssueQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_Data_SentryIssueQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    data: { __typename?: "IntegrationResourceData" } & {
      sentryIssue?: Maybe<{ __typename?: "SentryIssuePayload" } & SentryIssuePayloadFragment>;
    };
  };
};

export type IntegrationResource_PullRequestQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResource_PullRequestQuery = { __typename?: "Query" } & {
  integrationResource: { __typename?: "IntegrationResource" } & {
    pullRequest: { __typename?: "PullRequestPayload" } & PullRequestPayloadFragment;
  };
};

export type InviteInfoQueryVariables = Exact<{
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
}>;

export type InviteInfoQuery = { __typename?: "Query" } & {
  inviteInfo: { __typename?: "InvitePagePayload" } & InvitePagePayloadFragment;
};

export type InviteInfo_InviteDataQueryVariables = Exact<{
  teamHash?: Maybe<Scalars["String"]>;
  userHash: Scalars["String"];
}>;

export type InviteInfo_InviteDataQuery = { __typename?: "Query" } & {
  inviteInfo: { __typename?: "InvitePagePayload" } & {
    inviteData?: Maybe<{ __typename?: "InviteData" } & InviteDataFragment>;
  };
};

export type IssueLabelsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueLabelsQuery = { __typename?: "Query" } & {
  issueLabels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment;
};

export type IssueLabelQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueLabelQuery = { __typename?: "Query" } & {
  issueLabel: { __typename?: "IssueLabel" } & IssueLabelFragment;
};

export type IssueLabel_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueLabel_IssuesQuery = { __typename?: "Query" } & {
  issueLabel: { __typename?: "IssueLabel" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type IssueRelationsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssueRelationsQuery = { __typename?: "Query" } & {
  issueRelations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
};

export type IssueRelationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueRelationQuery = { __typename?: "Query" } & {
  issueRelation: { __typename?: "IssueRelation" } & IssueRelationFragment;
};

export type IssuesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type IssuesQuery = { __typename?: "Query" } & {
  issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
};

export type IssueQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueQuery = { __typename?: "Query" } & { issue: { __typename?: "Issue" } & IssueFragment };

export type Issue_SubscribersQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_SubscribersQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { subscribers: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type Issue_ChildrenQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_ChildrenQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { children: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Issue_CommentsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_CommentsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { comments: { __typename?: "CommentConnection" } & CommentConnectionFragment };
};

export type Issue_HistoryQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_HistoryQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    history: { __typename?: "IssueHistoryConnection" } & IssueHistoryConnectionFragment;
  };
};

export type Issue_LabelsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_LabelsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & { labels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment };
};

export type Issue_IntegrationResourcesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_IntegrationResourcesQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    integrationResources: { __typename?: "IntegrationResourceConnection" } & IntegrationResourceConnectionFragment;
  };
};

export type Issue_RelationsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_RelationsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    relations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
  };
};

export type Issue_InverseRelationsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Issue_InverseRelationsQuery = { __typename?: "Query" } & {
  issue: { __typename?: "Issue" } & {
    inverseRelations: { __typename?: "IssueRelationConnection" } & IssueRelationConnectionFragment;
  };
};

export type IssueSearchQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
  query: Scalars["String"];
}>;

export type IssueSearchQuery = { __typename?: "Query" } & {
  issueSearch: { __typename?: "IssueConnection" } & IssueConnectionFragment;
};

export type MilestonesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type MilestonesQuery = { __typename?: "Query" } & {
  milestones: { __typename?: "MilestoneConnection" } & MilestoneConnectionFragment;
};

export type MilestoneQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type MilestoneQuery = { __typename?: "Query" } & { milestone: { __typename?: "Milestone" } & MilestoneFragment };

export type Milestone_ProjectsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Milestone_ProjectsQuery = { __typename?: "Query" } & {
  milestone: { __typename?: "Milestone" } & {
    projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment;
  };
};

export type NotificationsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type NotificationsQuery = { __typename?: "Query" } & {
  notifications: { __typename?: "NotificationConnection" } & NotificationConnectionFragment;
};

export type NotificationQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationQuery = { __typename?: "Query" } & {
  notification: { __typename?: "Notification" } & NotificationFragment;
};

export type NotificationSubscriptionsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type NotificationSubscriptionsQuery = { __typename?: "Query" } & {
  notificationSubscriptions: {
    __typename?: "NotificationSubscriptionConnection";
  } & NotificationSubscriptionConnectionFragment;
};

export type NotificationSubscriptionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationSubscriptionQuery = { __typename?: "Query" } & {
  notificationSubscription: { __typename?: "NotificationSubscription" } & NotificationSubscriptionFragment;
};

export type OrganizationInvitesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type OrganizationInvitesQuery = { __typename?: "Query" } & {
  organizationInvites: { __typename?: "OrganizationInviteConnection" } & OrganizationInviteConnectionFragment;
};

export type OrganizationInviteQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationInviteQuery = { __typename?: "Query" } & {
  organizationInvite: { __typename?: "IssueLabel" } & IssueLabelFragment;
};

export type OrganizationInvite_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type OrganizationInvite_IssuesQuery = { __typename?: "Query" } & {
  organizationInvite: { __typename?: "IssueLabel" } & {
    issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type OrganizationQueryVariables = Exact<{ [key: string]: never }>;

export type OrganizationQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & OrganizationFragment;
};

export type Organization_UsersQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_UsersQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & { users: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type Organization_TeamsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_TeamsQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type Organization_MilestonesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_MilestonesQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & {
    milestones: { __typename?: "MilestoneConnection" } & MilestoneConnectionFragment;
  };
};

export type Organization_IntegrationsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Organization_IntegrationsQuery = { __typename?: "Query" } & {
  organization: { __typename?: "Organization" } & {
    integrations: { __typename?: "IntegrationConnection" } & IntegrationConnectionFragment;
  };
};

export type OrganizationExistsQueryVariables = Exact<{
  urlKey: Scalars["String"];
}>;

export type OrganizationExistsQuery = { __typename?: "Query" } & {
  organizationExists: { __typename?: "OrganizationExistsPayload" } & OrganizationExistsPayloadFragment;
};

export type ProjectLinksQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ProjectLinksQuery = { __typename?: "Query" } & {
  projectLinks: { __typename?: "ProjectLinkConnection" } & ProjectLinkConnectionFragment;
};

export type ProjectLinkQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectLinkQuery = { __typename?: "Query" } & {
  projectLink: { __typename?: "ProjectLink" } & ProjectLinkFragment;
};

export type ProjectsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ProjectsQuery = { __typename?: "Query" } & {
  projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment;
};

export type ProjectQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectQuery = { __typename?: "Query" } & { project: { __typename?: "Project" } & ProjectFragment };

export type Project_TeamsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_TeamsQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { teams: { __typename?: "TeamConnection" } & TeamConnectionFragment };
};

export type Project_MembersQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_MembersQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { members: { __typename?: "UserConnection" } & UserConnectionFragment };
};

export type Project_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_IssuesQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Project_LinksQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Project_LinksQuery = { __typename?: "Query" } & {
  project: { __typename?: "Project" } & {
    links: { __typename?: "ProjectLinkConnection" } & ProjectLinkConnectionFragment;
  };
};

export type PushSubscriptionTestQueryVariables = Exact<{ [key: string]: never }>;

export type PushSubscriptionTestQuery = { __typename?: "Query" } & {
  pushSubscriptionTest: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type ReactionsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type ReactionsQuery = { __typename?: "Query" } & {
  reactions: { __typename?: "ReactionConnection" } & ReactionConnectionFragment;
};

export type ReactionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ReactionQuery = { __typename?: "Query" } & { reaction: { __typename?: "Reaction" } & ReactionFragment };

export type SubscriptionQueryVariables = Exact<{ [key: string]: never }>;

export type SubscriptionQuery = { __typename?: "Query" } & {
  subscription: { __typename?: "Subscription" } & SubscriptionFragment;
};

export type TeamMembershipsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type TeamMembershipsQuery = { __typename?: "Query" } & {
  teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
};

export type TeamMembershipQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamMembershipQuery = { __typename?: "Query" } & {
  teamMembership: { __typename?: "TeamMembership" } & TeamMembershipFragment;
};

export type TeamsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type TeamsQuery = { __typename?: "Query" } & {
  teams: { __typename?: "TeamConnection" } & TeamConnectionFragment;
};

export type TeamQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamQuery = { __typename?: "Query" } & { team: { __typename?: "Team" } & TeamFragment };

export type Team_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_IssuesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { issues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Team_CyclesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_CyclesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { cycles: { __typename?: "CycleConnection" } & CycleConnectionFragment };
};

export type Team_MembershipsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_MembershipsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & {
    memberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type Team_ProjectsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_ProjectsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { projects: { __typename?: "ProjectConnection" } & ProjectConnectionFragment };
};

export type Team_StatesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_StatesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & {
    states: { __typename?: "WorkflowStateConnection" } & WorkflowStateConnectionFragment;
  };
};

export type Team_TemplatesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_TemplatesQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { templates: { __typename?: "TemplateConnection" } & TemplateConnectionFragment };
};

export type Team_LabelsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_LabelsQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { labels: { __typename?: "IssueLabelConnection" } & IssueLabelConnectionFragment };
};

export type Team_WebhooksQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Team_WebhooksQuery = { __typename?: "Query" } & {
  team: { __typename?: "Team" } & { webhooks: { __typename?: "WebhookConnection" } & WebhookConnectionFragment };
};

export type TemplatesQueryVariables = Exact<{ [key: string]: never }>;

export type TemplatesQuery = { __typename?: "Query" } & {
  templates: Array<
    { __typename?: "Template" } & Pick<
      Template,
      "id" | "createdAt" | "updatedAt" | "archivedAt" | "type" | "name" | "description" | "templateData"
    > & { team: { __typename?: "Team" } & TeamFragment; creator?: Maybe<{ __typename?: "User" } & UserFragment> }
  >;
};

export type TemplateQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type TemplateQuery = { __typename?: "Query" } & { template: { __typename?: "Template" } & TemplateFragment };

export type UsersQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type UsersQuery = { __typename?: "Query" } & {
  users: { __typename?: "UserConnection" } & UserConnectionFragment;
};

export type UserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserQuery = { __typename?: "Query" } & { user: { __typename?: "User" } & UserFragment };

export type User_AssignedIssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_AssignedIssuesQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & { assignedIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type User_CreatedIssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_CreatedIssuesQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & { createdIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type User_TeamMembershipsQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type User_TeamMembershipsQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & {
    teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = { __typename?: "Query" } & { viewer: { __typename?: "User" } & UserFragment };

export type Viewer_AssignedIssuesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_AssignedIssuesQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & { assignedIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Viewer_CreatedIssuesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_CreatedIssuesQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & { createdIssues: { __typename?: "IssueConnection" } & IssueConnectionFragment };
};

export type Viewer_TeamMembershipsQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type Viewer_TeamMembershipsQuery = { __typename?: "Query" } & {
  viewer: { __typename?: "User" } & {
    teamMemberships: { __typename?: "TeamMembershipConnection" } & TeamMembershipConnectionFragment;
  };
};

export type UserSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type UserSettingsQuery = { __typename?: "Query" } & {
  userSettings: { __typename?: "UserSettings" } & UserSettingsFragment;
};

export type WebhooksQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WebhooksQuery = { __typename?: "Query" } & {
  webhooks: { __typename?: "WebhookConnection" } & WebhookConnectionFragment;
};

export type WebhookQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type WebhookQuery = { __typename?: "Query" } & { webhook: { __typename?: "Webhook" } & WebhookFragment };

export type WorkflowStatesQueryVariables = Exact<{
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WorkflowStatesQuery = { __typename?: "Query" } & {
  workflowStates: { __typename?: "WorkflowStateConnection" } & WorkflowStateConnectionFragment;
};

export type WorkflowStateQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type WorkflowStateQuery = { __typename?: "Query" } & {
  workflowState: { __typename?: "WorkflowState" } & WorkflowStateFragment;
};

export type WorkflowState_IssuesQueryVariables = Exact<{
  id: Scalars["String"];
  before?: Maybe<Scalars["String"]>;
  after?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  includeArchived?: Maybe<Scalars["Boolean"]>;
  orderBy?: Maybe<PaginationOrderBy>;
}>;

export type WorkflowState_IssuesQuery = { __typename?: "Query" } & {
  workflowState: { __typename?: "WorkflowState" } & {
    issues: { __typename?: "IssueConnection" } & IssueConnectionFragment;
  };
};

export type EventCreateMutationVariables = Exact<{
  input: EventCreateInput;
}>;

export type EventCreateMutation = { __typename?: "Mutation" } & {
  eventCreate: { __typename?: "EventPayload" } & EventPayloadFragment;
};

export type ApiKeyCreateMutationVariables = Exact<{
  input: ApiKeyCreateInput;
}>;

export type ApiKeyCreateMutation = { __typename?: "Mutation" } & {
  apiKeyCreate: { __typename?: "ApiKeyPayload" } & ApiKeyPayloadFragment;
};

export type ApiKeyDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ApiKeyDeleteMutation = { __typename?: "Mutation" } & {
  apiKeyDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type EmailUserAccountAuthChallengeMutationVariables = Exact<{
  input: EmailUserAccountAuthChallengeInput;
}>;

export type EmailUserAccountAuthChallengeMutation = { __typename?: "Mutation" } & {
  emailUserAccountAuthChallenge: {
    __typename?: "EmailUserAccountAuthChallengeResponse";
  } & EmailUserAccountAuthChallengeResponseFragment;
};

export type EmailTokenUserAccountAuthMutationVariables = Exact<{
  input: TokenUserAccountAuthInput;
}>;

export type EmailTokenUserAccountAuthMutation = { __typename?: "Mutation" } & {
  emailTokenUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type SamlTokenUserAccountAuthMutationVariables = Exact<{
  input: TokenUserAccountAuthInput;
}>;

export type SamlTokenUserAccountAuthMutation = { __typename?: "Mutation" } & {
  samlTokenUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type GoogleUserAccountAuthMutationVariables = Exact<{
  input: GoogleUserAccountAuthInput;
}>;

export type GoogleUserAccountAuthMutation = { __typename?: "Mutation" } & {
  googleUserAccountAuth: { __typename?: "AuthResolverResponse" } & AuthResolverResponseFragment;
};

export type CreateOrganizationFromOnboardingMutationVariables = Exact<{
  survey?: Maybe<OnboardingCustomerSurvey>;
  input: CreateOrganizationInput;
}>;

export type CreateOrganizationFromOnboardingMutation = { __typename?: "Mutation" } & {
  createOrganizationFromOnboarding: {
    __typename?: "CreateOrJoinOrganizationResponse";
  } & CreateOrJoinOrganizationResponseFragment;
};

export type JoinOrganizationFromOnboardingMutationVariables = Exact<{
  input: JoinOrganizationInput;
}>;

export type JoinOrganizationFromOnboardingMutation = { __typename?: "Mutation" } & {
  joinOrganizationFromOnboarding: {
    __typename?: "CreateOrJoinOrganizationResponse";
  } & CreateOrJoinOrganizationResponseFragment;
};

export type LeaveOrganizationMutationVariables = Exact<{
  organizationId: Scalars["String"];
}>;

export type LeaveOrganizationMutation = { __typename?: "Mutation" } & {
  leaveOrganization: { __typename?: "CreateOrJoinOrganizationResponse" } & CreateOrJoinOrganizationResponseFragment;
};

export type BillingEmailUpdateMutationVariables = Exact<{
  input: BillingEmailUpdateInput;
}>;

export type BillingEmailUpdateMutation = { __typename?: "Mutation" } & {
  billingEmailUpdate: { __typename?: "BillingEmailPayload" } & BillingEmailPayloadFragment;
};

export type CollaborativeDocumentUpdateMutationVariables = Exact<{
  input: CollaborationDocumentUpdateInput;
}>;

export type CollaborativeDocumentUpdateMutation = { __typename?: "Mutation" } & {
  collaborativeDocumentUpdate: {
    __typename?: "CollaborationDocumentUpdatePayload";
  } & CollaborationDocumentUpdatePayloadFragment;
};

export type CommentCreateMutationVariables = Exact<{
  input: CommentCreateInput;
}>;

export type CommentCreateMutation = { __typename?: "Mutation" } & {
  commentCreate: { __typename?: "CommentPayload" } & CommentPayloadFragment;
};

export type CommentUpdateMutationVariables = Exact<{
  input: CommentUpdateInput;
  id: Scalars["String"];
}>;

export type CommentUpdateMutation = { __typename?: "Mutation" } & {
  commentUpdate: { __typename?: "CommentPayload" } & CommentPayloadFragment;
};

export type CommentDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CommentDeleteMutation = { __typename?: "Mutation" } & {
  commentDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type ContactCreateMutationVariables = Exact<{
  input: ContactCreateInput;
}>;

export type ContactCreateMutation = { __typename?: "Mutation" } & {
  contactCreate: { __typename?: "ContactPayload" } & ContactPayloadFragment;
};

export type CustomViewCreateMutationVariables = Exact<{
  input: CustomViewCreateInput;
}>;

export type CustomViewCreateMutation = { __typename?: "Mutation" } & {
  customViewCreate: { __typename?: "CustomViewPayload" } & CustomViewPayloadFragment;
};

export type CustomViewUpdateMutationVariables = Exact<{
  input: CustomViewUpdateInput;
  id: Scalars["String"];
}>;

export type CustomViewUpdateMutation = { __typename?: "Mutation" } & {
  customViewUpdate: { __typename?: "CustomViewPayload" } & CustomViewPayloadFragment;
};

export type CustomViewDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CustomViewDeleteMutation = { __typename?: "Mutation" } & {
  customViewDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type CycleCreateMutationVariables = Exact<{
  input: CycleCreateInput;
}>;

export type CycleCreateMutation = { __typename?: "Mutation" } & {
  cycleCreate: { __typename?: "CyclePayload" } & CyclePayloadFragment;
};

export type CycleUpdateMutationVariables = Exact<{
  input: CycleUpdateInput;
  id: Scalars["String"];
}>;

export type CycleUpdateMutation = { __typename?: "Mutation" } & {
  cycleUpdate: { __typename?: "CyclePayload" } & CyclePayloadFragment;
};

export type CycleArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type CycleArchiveMutation = { __typename?: "Mutation" } & {
  cycleArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type DebugFailWithInternalErrorMutationVariables = Exact<{ [key: string]: never }>;

export type DebugFailWithInternalErrorMutation = { __typename?: "Mutation" } & {
  debugFailWithInternalError: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type DebugFailWithWarningMutationVariables = Exact<{ [key: string]: never }>;

export type DebugFailWithWarningMutation = { __typename?: "Mutation" } & {
  debugFailWithWarning: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type DebugCreateSamlOrgMutationVariables = Exact<{ [key: string]: never }>;

export type DebugCreateSamlOrgMutation = { __typename?: "Mutation" } & {
  debugCreateSAMLOrg: { __typename?: "DebugPayload" } & DebugPayloadFragment;
};

export type EmailUnsubscribeMutationVariables = Exact<{
  input: EmailUnsubscribeInput;
}>;

export type EmailUnsubscribeMutation = { __typename?: "Mutation" } & {
  emailUnsubscribe: { __typename?: "EmailUnsubscribePayload" } & EmailUnsubscribePayloadFragment;
};

export type EmojiCreateMutationVariables = Exact<{
  input: EmojiCreateInput;
}>;

export type EmojiCreateMutation = { __typename?: "Mutation" } & {
  emojiCreate: { __typename?: "EmojiPayload" } & EmojiPayloadFragment;
};

export type EmojiDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type EmojiDeleteMutation = { __typename?: "Mutation" } & {
  emojiDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type FavoriteCreateMutationVariables = Exact<{
  input: FavoriteCreateInput;
}>;

export type FavoriteCreateMutation = { __typename?: "Mutation" } & {
  favoriteCreate: { __typename?: "FavoritePayload" } & FavoritePayloadFragment;
};

export type FavoriteUpdateMutationVariables = Exact<{
  input: FavoriteUpdateInput;
  id: Scalars["String"];
}>;

export type FavoriteUpdateMutation = { __typename?: "Mutation" } & {
  favoriteUpdate: { __typename?: "FavoritePayload" } & FavoritePayloadFragment;
};

export type FavoriteDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type FavoriteDeleteMutation = { __typename?: "Mutation" } & {
  favoriteDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type FeedbackCreateMutationVariables = Exact<{
  input: FeedbackCreateInput;
}>;

export type FeedbackCreateMutation = { __typename?: "Mutation" } & {
  feedbackCreate: { __typename?: "FeedbackPayload" } & FeedbackPayloadFragment;
};

export type FileUploadMutationVariables = Exact<{
  metaData?: Maybe<Scalars["JSON"]>;
  size: Scalars["Int"];
  contentType: Scalars["String"];
  filename: Scalars["String"];
}>;

export type FileUploadMutation = { __typename?: "Mutation" } & {
  fileUpload: { __typename?: "UploadPayload" } & UploadPayloadFragment;
};

export type ImageUploadFromUrlMutationVariables = Exact<{
  url: Scalars["String"];
}>;

export type ImageUploadFromUrlMutation = { __typename?: "Mutation" } & {
  imageUploadFromUrl: { __typename?: "ImageUploadFromUrlPayload" } & ImageUploadFromUrlPayloadFragment;
};

export type IntegrationGithubConnectMutationVariables = Exact<{
  installationId: Scalars["String"];
}>;

export type IntegrationGithubConnectMutation = { __typename?: "Mutation" } & {
  integrationGithubConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationGitlabConnectMutationVariables = Exact<{
  gitlabUrl: Scalars["String"];
  accessToken: Scalars["String"];
}>;

export type IntegrationGitlabConnectMutation = { __typename?: "Mutation" } & {
  integrationGitlabConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackMutationVariables = Exact<{
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  redirectUri: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationSlackMutation = { __typename?: "Mutation" } & {
  integrationSlack: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackPersonalMutationVariables = Exact<{
  redirectUri: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationSlackPersonalMutation = { __typename?: "Mutation" } & {
  integrationSlackPersonal: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackPostMutationVariables = Exact<{
  shouldUseV2Auth?: Maybe<Scalars["Boolean"]>;
  redirectUri: Scalars["String"];
  teamId: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationSlackPostMutation = { __typename?: "Mutation" } & {
  integrationSlackPost: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackProjectPostMutationVariables = Exact<{
  redirectUri: Scalars["String"];
  projectId: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationSlackProjectPostMutation = { __typename?: "Mutation" } & {
  integrationSlackProjectPost: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSlackImportEmojisMutationVariables = Exact<{
  redirectUri: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationSlackImportEmojisMutation = { __typename?: "Mutation" } & {
  integrationSlackImportEmojis: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationFigmaMutationVariables = Exact<{
  redirectUri: Scalars["String"];
  code: Scalars["String"];
}>;

export type IntegrationFigmaMutation = { __typename?: "Mutation" } & {
  integrationFigma: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationGoogleSheetsMutationVariables = Exact<{
  code: Scalars["String"];
}>;

export type IntegrationGoogleSheetsMutation = { __typename?: "Mutation" } & {
  integrationGoogleSheets: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type RefreshGoogleSheetsDataMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RefreshGoogleSheetsDataMutation = { __typename?: "Mutation" } & {
  refreshGoogleSheetsData: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationSentryConnectMutationVariables = Exact<{
  organizationSlug: Scalars["String"];
  code: Scalars["String"];
  installationId: Scalars["String"];
}>;

export type IntegrationSentryConnectMutation = { __typename?: "Mutation" } & {
  integrationSentryConnect: { __typename?: "IntegrationPayload" } & IntegrationPayloadFragment;
};

export type IntegrationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationDeleteMutation = { __typename?: "Mutation" } & {
  integrationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IntegrationResourceArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IntegrationResourceArchiveMutation = { __typename?: "Mutation" } & {
  integrationResourceArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueImportCreateMutationVariables = Exact<{
  input: ImportCreateInput;
}>;

export type IssueImportCreateMutation = { __typename?: "Mutation" } & {
  issueImportCreate: { __typename?: "IssueImportPayload" } & IssueImportPayloadFragment;
};

export type IssueLabelCreateMutationVariables = Exact<{
  input: IssueLabelCreateInput;
}>;

export type IssueLabelCreateMutation = { __typename?: "Mutation" } & {
  issueLabelCreate: { __typename?: "IssueLabelPayload" } & IssueLabelPayloadFragment;
};

export type IssueLabelUpdateMutationVariables = Exact<{
  input: IssueLabelUpdateInput;
  id: Scalars["String"];
}>;

export type IssueLabelUpdateMutation = { __typename?: "Mutation" } & {
  issueLabelUpdate: { __typename?: "IssueLabelPayload" } & IssueLabelPayloadFragment;
};

export type IssueLabelArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueLabelArchiveMutation = { __typename?: "Mutation" } & {
  issueLabelArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueRelationCreateMutationVariables = Exact<{
  input: IssueRelationCreateInput;
}>;

export type IssueRelationCreateMutation = { __typename?: "Mutation" } & {
  issueRelationCreate: { __typename?: "IssueRelationPayload" } & IssueRelationPayloadFragment;
};

export type IssueRelationUpdateMutationVariables = Exact<{
  input: IssueRelationUpdateInput;
  id: Scalars["String"];
}>;

export type IssueRelationUpdateMutation = { __typename?: "Mutation" } & {
  issueRelationUpdate: { __typename?: "IssueRelationPayload" } & IssueRelationPayloadFragment;
};

export type IssueRelationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueRelationDeleteMutation = { __typename?: "Mutation" } & {
  issueRelationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueCreateMutationVariables = Exact<{
  input: IssueCreateInput;
}>;

export type IssueCreateMutation = { __typename?: "Mutation" } & {
  issueCreate: { __typename?: "IssuePayload" } & IssuePayloadFragment;
};

export type IssueUpdateMutationVariables = Exact<{
  input: IssueUpdateInput;
  id: Scalars["String"];
}>;

export type IssueUpdateMutation = { __typename?: "Mutation" } & {
  issueUpdate: { __typename?: "IssuePayload" } & IssuePayloadFragment;
};

export type IssueArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueArchiveMutation = { __typename?: "Mutation" } & {
  issueArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type IssueUnarchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type IssueUnarchiveMutation = { __typename?: "Mutation" } & {
  issueUnarchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type MilestoneCreateMutationVariables = Exact<{
  input: MilestoneCreateInput;
}>;

export type MilestoneCreateMutation = { __typename?: "Mutation" } & {
  milestoneCreate: { __typename?: "MilestonePayload" } & MilestonePayloadFragment;
};

export type MilestoneUpdateMutationVariables = Exact<{
  input: MilestoneUpdateInput;
  id: Scalars["String"];
}>;

export type MilestoneUpdateMutation = { __typename?: "Mutation" } & {
  milestoneUpdate: { __typename?: "MilestonePayload" } & MilestonePayloadFragment;
};

export type MilestoneDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type MilestoneDeleteMutation = { __typename?: "Mutation" } & {
  milestoneDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationCreateMutationVariables = Exact<{
  input: NotificationUpdateInput;
  id: Scalars["String"];
}>;

export type NotificationCreateMutation = { __typename?: "Mutation" } & {
  notificationCreate: { __typename?: "NotificationPayload" } & NotificationPayloadFragment;
};

export type NotificationUpdateMutationVariables = Exact<{
  input: NotificationUpdateInput;
  id: Scalars["String"];
}>;

export type NotificationUpdateMutation = { __typename?: "Mutation" } & {
  notificationUpdate: { __typename?: "NotificationPayload" } & NotificationPayloadFragment;
};

export type NotificationDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationDeleteMutation = { __typename?: "Mutation" } & {
  notificationDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationArchiveMutation = { __typename?: "Mutation" } & {
  notificationArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationUnarchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationUnarchiveMutation = { __typename?: "Mutation" } & {
  notificationUnarchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type NotificationSubscriptionCreateMutationVariables = Exact<{
  input: NotificationSubscriptionCreateInput;
}>;

export type NotificationSubscriptionCreateMutation = { __typename?: "Mutation" } & {
  notificationSubscriptionCreate: {
    __typename?: "NotificationSubscriptionPayload";
  } & NotificationSubscriptionPayloadFragment;
};

export type NotificationSubscriptionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type NotificationSubscriptionDeleteMutation = { __typename?: "Mutation" } & {
  notificationSubscriptionDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OauthClientCreateMutationVariables = Exact<{
  input: OauthClientCreateInput;
}>;

export type OauthClientCreateMutation = { __typename?: "Mutation" } & {
  oauthClientCreate: { __typename?: "OauthClientPayload" } & OauthClientPayloadFragment;
};

export type OauthClientUpdateMutationVariables = Exact<{
  input: OauthClientUpdateInput;
  id: Scalars["String"];
}>;

export type OauthClientUpdateMutation = { __typename?: "Mutation" } & {
  oauthClientUpdate: { __typename?: "OauthClientPayload" } & OauthClientPayloadFragment;
};

export type OauthClientArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OauthClientArchiveMutation = { __typename?: "Mutation" } & {
  oauthClientArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OauthClientRotateSecretMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OauthClientRotateSecretMutation = { __typename?: "Mutation" } & {
  oauthClientRotateSecret: { __typename?: "RotateSecretPayload" } & RotateSecretPayloadFragment;
};

export type OauthTokenRevokeMutationVariables = Exact<{
  scope: Array<Scalars["String"]>;
  appId: Scalars["String"];
}>;

export type OauthTokenRevokeMutation = { __typename?: "Mutation" } & {
  oauthTokenRevoke: { __typename?: "OauthTokenRevokePayload" } & OauthTokenRevokePayloadFragment;
};

export type OrganizationDomainVerifyMutationVariables = Exact<{
  input: OrganizationDomainVerificationInput;
}>;

export type OrganizationDomainVerifyMutation = { __typename?: "Mutation" } & {
  organizationDomainVerify: { __typename?: "OrganizationDomainPayload" } & OrganizationDomainPayloadFragment;
};

export type OrganizationDomainCreateMutationVariables = Exact<{
  input: OrganizationDomainCreateInput;
}>;

export type OrganizationDomainCreateMutation = { __typename?: "Mutation" } & {
  organizationDomainCreate: { __typename?: "OrganizationDomainPayload" } & OrganizationDomainPayloadFragment;
};

export type OrganizationDomainDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationDomainDeleteMutation = { __typename?: "Mutation" } & {
  organizationDomainDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OrganizationInviteCreateMutationVariables = Exact<{
  input: OrganizationInviteCreateInput;
}>;

export type OrganizationInviteCreateMutation = { __typename?: "Mutation" } & {
  organizationInviteCreate: { __typename?: "OrganizationInvitePayload" } & OrganizationInvitePayloadFragment;
};

export type ResentOrganizationInviteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ResentOrganizationInviteMutation = { __typename?: "Mutation" } & {
  resentOrganizationInvite: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OrganizationInviteDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type OrganizationInviteDeleteMutation = { __typename?: "Mutation" } & {
  organizationInviteDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type OrganizationUpdateMutationVariables = Exact<{
  input: UpdateOrganizationInput;
}>;

export type OrganizationUpdateMutation = { __typename?: "Mutation" } & {
  organizationUpdate: { __typename?: "OrganizationPayload" } & OrganizationPayloadFragment;
};

export type OrganizationDeleteChallengeMutationVariables = Exact<{ [key: string]: never }>;

export type OrganizationDeleteChallengeMutation = { __typename?: "Mutation" } & {
  organizationDeleteChallenge: { __typename?: "OrganizationDeletePayload" } & OrganizationDeletePayloadFragment;
};

export type OrganizationDeleteMutationVariables = Exact<{
  input: DeleteOrganizationInput;
}>;

export type OrganizationDeleteMutation = { __typename?: "Mutation" } & {
  organizationDelete: { __typename?: "OrganizationDeletePayload" } & OrganizationDeletePayloadFragment;
};

export type ProjectLinkCreateMutationVariables = Exact<{
  input: ProjectLinkCreateInput;
}>;

export type ProjectLinkCreateMutation = { __typename?: "Mutation" } & {
  projectLinkCreate: { __typename?: "ProjectLinkPayload" } & ProjectLinkPayloadFragment;
};

export type ProjectLinkDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectLinkDeleteMutation = { __typename?: "Mutation" } & {
  projectLinkDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type ProjectCreateMutationVariables = Exact<{
  input: ProjectCreateInput;
}>;

export type ProjectCreateMutation = { __typename?: "Mutation" } & {
  projectCreate: { __typename?: "ProjectPayload" } & ProjectPayloadFragment;
};

export type ProjectUpdateMutationVariables = Exact<{
  input: ProjectUpdateInput;
  id: Scalars["String"];
}>;

export type ProjectUpdateMutation = { __typename?: "Mutation" } & {
  projectUpdate: { __typename?: "ProjectPayload" } & ProjectPayloadFragment;
};

export type ProjectArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProjectArchiveMutation = { __typename?: "Mutation" } & {
  projectArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type PushSubscriptionCreateMutationVariables = Exact<{
  input: PushSubscriptionCreateInput;
}>;

export type PushSubscriptionCreateMutation = { __typename?: "Mutation" } & {
  pushSubscriptionCreate: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type PushSubscriptionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type PushSubscriptionDeleteMutation = { __typename?: "Mutation" } & {
  pushSubscriptionDelete: { __typename?: "PushSubscriptionPayload" } & PushSubscriptionPayloadFragment;
};

export type ReactionCreateMutationVariables = Exact<{
  input: ReactionCreateInput;
}>;

export type ReactionCreateMutation = { __typename?: "Mutation" } & {
  reactionCreate: { __typename?: "ReactionPayload" } & ReactionPayloadFragment;
};

export type ReactionDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ReactionDeleteMutation = { __typename?: "Mutation" } & {
  reactionDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type CreateCsvExportReportMutationVariables = Exact<{ [key: string]: never }>;

export type CreateCsvExportReportMutation = { __typename?: "Mutation" } & {
  createCsvExportReport: { __typename?: "CreateCsvExportReportPayload" } & CreateCsvExportReportPayloadFragment;
};

export type SubscriptionSessionCreateMutationVariables = Exact<{
  plan: Scalars["String"];
}>;

export type SubscriptionSessionCreateMutation = { __typename?: "Mutation" } & {
  subscriptionSessionCreate: { __typename?: "SubscriptionSessionPayload" } & SubscriptionSessionPayloadFragment;
};

export type SubscriptionUpdateSessionCreateMutationVariables = Exact<{ [key: string]: never }>;

export type SubscriptionUpdateSessionCreateMutation = { __typename?: "Mutation" } & {
  subscriptionUpdateSessionCreate: { __typename?: "SubscriptionSessionPayload" } & SubscriptionSessionPayloadFragment;
};

export type SubscriptionUpdateMutationVariables = Exact<{
  input: SubscriptionUpdateInput;
  id: Scalars["String"];
}>;

export type SubscriptionUpdateMutation = { __typename?: "Mutation" } & {
  subscriptionUpdate: { __typename?: "SubscriptionPayload" } & SubscriptionPayloadFragment;
};

export type SubscriptionUpgradeMutationVariables = Exact<{
  type: Scalars["String"];
  id: Scalars["String"];
}>;

export type SubscriptionUpgradeMutation = { __typename?: "Mutation" } & {
  subscriptionUpgrade: { __typename?: "SubscriptionPayload" } & SubscriptionPayloadFragment;
};

export type SubscriptionArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type SubscriptionArchiveMutation = { __typename?: "Mutation" } & {
  subscriptionArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamMembershipCreateMutationVariables = Exact<{
  input: TeamMembershipCreateInput;
}>;

export type TeamMembershipCreateMutation = { __typename?: "Mutation" } & {
  teamMembershipCreate: { __typename?: "TeamMembershipPayload" } & TeamMembershipPayloadFragment;
};

export type TeamMembershipDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamMembershipDeleteMutation = { __typename?: "Mutation" } & {
  teamMembershipDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamCreateMutationVariables = Exact<{
  copySettingsFromTeamId?: Maybe<Scalars["String"]>;
  input: TeamCreateInput;
}>;

export type TeamCreateMutation = { __typename?: "Mutation" } & {
  teamCreate: { __typename?: "TeamPayload" } & TeamPayloadFragment;
};

export type TeamUpdateMutationVariables = Exact<{
  input: TeamUpdateInput;
  id: Scalars["String"];
}>;

export type TeamUpdateMutation = { __typename?: "Mutation" } & {
  teamUpdate: { __typename?: "TeamPayload" } & TeamPayloadFragment;
};

export type TeamArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamArchiveMutation = { __typename?: "Mutation" } & {
  teamArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TeamDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TeamDeleteMutation = { __typename?: "Mutation" } & {
  teamDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type TemplateCreateMutationVariables = Exact<{
  input: TemplateCreateInput;
}>;

export type TemplateCreateMutation = { __typename?: "Mutation" } & {
  templateCreate: { __typename?: "TemplatePayload" } & TemplatePayloadFragment;
};

export type TemplateUpdateMutationVariables = Exact<{
  input: TemplateUpdateInput;
  id: Scalars["String"];
}>;

export type TemplateUpdateMutation = { __typename?: "Mutation" } & {
  templateUpdate: { __typename?: "TemplatePayload" } & TemplatePayloadFragment;
};

export type TemplateDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type TemplateDeleteMutation = { __typename?: "Mutation" } & {
  templateDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type UserUpdateMutationVariables = Exact<{
  input: UpdateUserInput;
  id: Scalars["String"];
}>;

export type UserUpdateMutation = { __typename?: "Mutation" } & {
  userUpdate: { __typename?: "UserPayload" } & UserPayloadFragment;
};

export type UserPromoteAdminMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserPromoteAdminMutation = { __typename?: "Mutation" } & {
  userPromoteAdmin: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserDemoteAdminMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserDemoteAdminMutation = { __typename?: "Mutation" } & {
  userDemoteAdmin: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserSuspendMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserSuspendMutation = { __typename?: "Mutation" } & {
  userSuspend: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserUnsuspendMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type UserUnsuspendMutation = { __typename?: "Mutation" } & {
  userUnsuspend: { __typename?: "UserAdminPayload" } & UserAdminPayloadFragment;
};

export type UserSettingsUpdateMutationVariables = Exact<{
  input: UserSettingsUpdateInput;
  id: Scalars["String"];
}>;

export type UserSettingsUpdateMutation = { __typename?: "Mutation" } & {
  userSettingsUpdate: { __typename?: "UserSettingsPayload" } & UserSettingsPayloadFragment;
};

export type UserSettingsFlagIncrementMutationVariables = Exact<{
  flag: Scalars["String"];
}>;

export type UserSettingsFlagIncrementMutation = { __typename?: "Mutation" } & {
  userSettingsFlagIncrement: { __typename?: "UserSettingsFlagPayload" } & UserSettingsFlagPayloadFragment;
};

export type UserSettingsFlagsResetMutationVariables = Exact<{ [key: string]: never }>;

export type UserSettingsFlagsResetMutation = { __typename?: "Mutation" } & {
  userSettingsFlagsReset: { __typename?: "UserSettingsFlagsResetPayload" } & UserSettingsFlagsResetPayloadFragment;
};

export type UserFlagUpdateMutationVariables = Exact<{
  operation: UserFlagUpdateOperation;
  flag: UserFlagType;
}>;

export type UserFlagUpdateMutation = { __typename?: "Mutation" } & {
  userFlagUpdate: { __typename?: "UserSettingsFlagPayload" } & UserSettingsFlagPayloadFragment;
};

export type UserSubscribeToNewsletterMutationVariables = Exact<{ [key: string]: never }>;

export type UserSubscribeToNewsletterMutation = { __typename?: "Mutation" } & {
  userSubscribeToNewsletter: {
    __typename?: "UserSubscribeToNewsletterPayload";
  } & UserSubscribeToNewsletterPayloadFragment;
};

export type ViewPreferencesCreateMutationVariables = Exact<{
  input: ViewPreferencesCreateInput;
}>;

export type ViewPreferencesCreateMutation = { __typename?: "Mutation" } & {
  viewPreferencesCreate: { __typename?: "ViewPreferencesPayload" } & ViewPreferencesPayloadFragment;
};

export type ViewPreferencesUpdateMutationVariables = Exact<{
  input: ViewPreferencesUpdateInput;
  id: Scalars["String"];
}>;

export type ViewPreferencesUpdateMutation = { __typename?: "Mutation" } & {
  viewPreferencesUpdate: { __typename?: "ViewPreferencesPayload" } & ViewPreferencesPayloadFragment;
};

export type ViewPreferencesDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type ViewPreferencesDeleteMutation = { __typename?: "Mutation" } & {
  viewPreferencesDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type WebhookCreateMutationVariables = Exact<{
  input: WebhookCreateInput;
}>;

export type WebhookCreateMutation = { __typename?: "Mutation" } & {
  webhookCreate: { __typename?: "WebhookPayload" } & WebhookPayloadFragment;
};

export type WebhookUpdateMutationVariables = Exact<{
  input: WebhookUpdateInput;
  id: Scalars["String"];
}>;

export type WebhookUpdateMutation = { __typename?: "Mutation" } & {
  webhookUpdate: { __typename?: "WebhookPayload" } & WebhookPayloadFragment;
};

export type WebhookDeleteMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type WebhookDeleteMutation = { __typename?: "Mutation" } & {
  webhookDelete: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export type WorkflowStateCreateMutationVariables = Exact<{
  input: WorkflowStateCreateInput;
}>;

export type WorkflowStateCreateMutation = { __typename?: "Mutation" } & {
  workflowStateCreate: { __typename?: "WorkflowStatePayload" } & WorkflowStatePayloadFragment;
};

export type WorkflowStateUpdateMutationVariables = Exact<{
  input: WorkflowStateUpdateInput;
  id: Scalars["String"];
}>;

export type WorkflowStateUpdateMutation = { __typename?: "Mutation" } & {
  workflowStateUpdate: { __typename?: "WorkflowStatePayload" } & WorkflowStatePayloadFragment;
};

export type WorkflowStateArchiveMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type WorkflowStateArchiveMutation = { __typename?: "Mutation" } & {
  workflowStateArchive: { __typename?: "ArchivePayload" } & ArchivePayloadFragment;
};

export const SyncResponseFragmentDoc: DocumentNode<SyncResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SyncResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SyncResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "state" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "delta" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archive" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "databaseVersion" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ArchiveResponseFragmentDoc: DocumentNode<ArchiveResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArchiveResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArchiveResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "archive" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "totalCount" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "databaseVersion" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ApiKeyFragmentDoc: DocumentNode<ApiKeyFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKey" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKey" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "label" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const PageInfoFragmentDoc: DocumentNode<PageInfoFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PageInfo" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PageInfo" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "hasPreviousPage" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "hasNextPage" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "startCursor" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "endCursor" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ApiKeyConnectionFragmentDoc: DocumentNode<ApiKeyConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKeyConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKey" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ApiKeyFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const UserAuthorizedApplicationFragmentDoc: DocumentNode<UserAuthorizedApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAuthorizedApplication" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAuthorizedApplication" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developer" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "isAuthorized" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const AuthorizedApplicationFragmentDoc: DocumentNode<AuthorizedApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "AuthorizedApplication" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "AuthorizedApplication" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developer" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "scope" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "appId" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserFragmentDoc: DocumentNode<UserFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "User" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "User" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "displayName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "avatarUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "inviteHash" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "lastSeen" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "admin" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "active" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdIssueCount" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OrganizationFragmentDoc: DocumentNode<OrganizationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Organization" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Organization" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "urlKey" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "logoUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "periodUploadVolume" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "gitBranchFormat" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "gitLinkbackMessagesEnabled" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "gitPublicLinkbackMessagesEnabled" },
            arguments: [],
            directives: [],
          },
          { kind: "Field", name: { kind: "Name", value: "roadmapEnabled" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "samlEnabled" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "allowedAuthServices" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "userCount" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdIssueCount" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const AuthResolverResponseFragmentDoc: DocumentNode<AuthResolverResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "AuthResolverResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "AuthResolverResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "token" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "allowDomainAccess" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "availableOrganizations" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Organization" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
    ...OrganizationFragmentDoc.definitions,
  ],
};
export const IssueFragmentDoc: DocumentNode<IssueFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Issue" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Issue" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "number" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "priority" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "estimate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "boardOrder" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "startedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoClosedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoArchivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "dueDate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "previousIdentifiers" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "subIssueSortOrder" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "identifier" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "priorityLabel" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "state" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "assignee" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "parent" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "branchName" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueConnectionFragmentDoc: DocumentNode<IssueConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Issue" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const CycleFragmentDoc: DocumentNode<CycleFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Cycle" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Cycle" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "number" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "startsAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "endsAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueCountHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedIssueCountHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "scopeHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedScopeHistory" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const CycleConnectionFragmentDoc: DocumentNode<CycleConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CycleConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CycleConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Cycle" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CycleFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TeamMembershipFragmentDoc: DocumentNode<TeamMembershipFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembership" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembership" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const TeamMembershipConnectionFragmentDoc: DocumentNode<TeamMembershipConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembershipConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembership" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamMembershipFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const ProjectFragmentDoc: DocumentNode<ProjectFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Project" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slugId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "icon" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "color" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "state" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "lead" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "targetDate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "startedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueCountHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedIssueCountHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "scopeHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "completedScopeHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackNewIssue" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackIssueComments" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackIssueStatuses" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ProjectConnectionFragmentDoc: DocumentNode<ProjectConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Project" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const UserConnectionFragmentDoc: DocumentNode<UserConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TeamFragmentDoc: DocumentNode<TeamFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Team" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Team" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "key" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "cyclesEnabled" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "cycleStartDay" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "cycleDuration" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "cycleCooldownTime" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleIssueAutoAssignStarted" },
            arguments: [],
            directives: [],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleIssueAutoAssignCompleted" },
            arguments: [],
            directives: [],
          },
          { kind: "Field", name: { kind: "Name", value: "cycleLockToActive" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "upcomingCycleCount" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "timezone" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "inviteHash" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationType" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationAllowZero" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueEstimationExtended" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "defaultIssueEstimate" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "draftWorkflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startWorkflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "reviewWorkflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mergeWorkflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "groupIssueHistory" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackNewIssue" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackIssueComments" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "slackIssueStatuses" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoClosePeriod" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoCloseStateId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoArchivePeriod" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "markedAsDuplicateWorkflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "activeCycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "cycleCalenderUrl" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const TeamConnectionFragmentDoc: DocumentNode<TeamConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const MilestoneFragmentDoc: DocumentNode<MilestoneFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Milestone" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Milestone" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const MilestoneConnectionFragmentDoc: DocumentNode<MilestoneConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MilestoneConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MilestoneConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Milestone" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...MilestoneFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IntegrationFragmentDoc: DocumentNode<IntegrationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Integration" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Integration" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "service" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const IntegrationConnectionFragmentDoc: DocumentNode<IntegrationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Integration" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IntegrationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const SubscriptionFragmentDoc: DocumentNode<SubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Subscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Subscription" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "seats" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "pendingChangeType" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ProjectLinkFragmentDoc: DocumentNode<ProjectLinkFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLink" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "label" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const ProjectLinkConnectionFragmentDoc: DocumentNode<ProjectLinkConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLinkConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLink" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectLinkFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const WorkflowStateFragmentDoc: DocumentNode<WorkflowStateFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowState" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowState" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "color" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "position" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const WorkflowStateConnectionFragmentDoc: DocumentNode<WorkflowStateConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowStateConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowState" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WorkflowStateFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TemplateConnectionFragmentDoc: DocumentNode<TemplateConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TemplateConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TemplateConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const TemplateFragmentDoc: DocumentNode<TemplateFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Template" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Template" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "templateData" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueLabelFragmentDoc: DocumentNode<IssueLabelFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabel" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabel" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "color" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueLabelConnectionFragmentDoc: DocumentNode<IssueLabelConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabelConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const WebhookFragmentDoc: DocumentNode<WebhookFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Webhook" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Webhook" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "enabled" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "secret" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const WebhookConnectionFragmentDoc: DocumentNode<WebhookConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WebhookConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WebhookConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Webhook" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WebhookFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const CommentFragmentDoc: DocumentNode<CommentFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Comment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Comment" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "body" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "editedAt" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const CommentConnectionFragmentDoc: DocumentNode<CommentConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommentConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommentConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Comment" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CommentFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueHistoryFragmentDoc: DocumentNode<IssueHistoryFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueHistory" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueHistory" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "actor" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "source" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedDescription" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "fromTitle" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "toTitle" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromAssignee" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toAssignee" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fromPriority" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "toPriority" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromTeam" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toTeam" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromParent" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toParent" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromCycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toCycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "fromProject" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "toProject" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "fromEstimate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "toEstimate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archived" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "addedLabelIds" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "removedLabelIds" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "relationChanges" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoClosed" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "autoArchived" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "fromDueDate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "toDueDate" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IssueHistoryConnectionFragmentDoc: DocumentNode<IssueHistoryConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueHistoryConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueHistoryConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueHistory" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueHistoryFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const PullRequestPayloadFragmentDoc: DocumentNode<PullRequestPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PullRequestPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PullRequestPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "status" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "number" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "draft" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "branch" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "userId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "userLogin" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "repoLogin" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "repoName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "closedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "mergedAt" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CommitPayloadFragmentDoc: DocumentNode<CommitPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommitPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommitPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "message" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "timestamp" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "added" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "removed" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "modified" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const SentryIssuePayloadFragmentDoc: DocumentNode<SentryIssuePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SentryIssuePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SentryIssuePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "issueId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "webUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "actorType" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "actorId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "actorName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "projectId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "projectSlug" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "issueTitle" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "shortId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "firstSeen" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "firstVersion" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IntegrationResourceDataFragmentDoc: DocumentNode<IntegrationResourceDataFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResourceData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResourceData" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "githubPullRequest" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "gitlabMergeRequest" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "githubCommit" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommitPayload" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sentryIssue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SentryIssuePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...PullRequestPayloadFragmentDoc.definitions,
    ...CommitPayloadFragmentDoc.definitions,
    ...SentryIssuePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceFragmentDoc: DocumentNode<IntegrationResourceFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResource" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResource" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "resourceType" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "resourceId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "data" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationResourceData" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pullRequest" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationResourceDataFragmentDoc.definitions,
    ...PullRequestPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceConnectionFragmentDoc: DocumentNode<IntegrationResourceConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationResourceConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationResourceConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationResource" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IntegrationResourceFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const IssueRelationFragmentDoc: DocumentNode<IssueRelationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelation" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelation" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "relatedIssue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const IssueRelationConnectionFragmentDoc: DocumentNode<IssueRelationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelation" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueRelationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const SsoUrlFromEmailResponseFragmentDoc: DocumentNode<SsoUrlFromEmailResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SsoUrlFromEmailResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SsoUrlFromEmailResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "samlSsoUrl" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const InvoiceFragmentDoc: DocumentNode<InvoiceFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Invoice" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Invoice" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "created" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "dueDate" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "status" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "total" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CardFragmentDoc: DocumentNode<CardFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Card" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Card" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "brand" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "last4" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const BillingDetailsPayloadFragmentDoc: DocumentNode<BillingDetailsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BillingDetailsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BillingDetailsPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "invoices" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Invoice" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "paymentMethod" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Card" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...InvoiceFragmentDoc.definitions,
    ...CardFragmentDoc.definitions,
  ],
};
export const StepsResponseFragmentDoc: DocumentNode<StepsResponseFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "StepsResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "StepsResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "version" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "steps" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "clientIds" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CollaborationDocumentUpdatePayloadFragmentDoc: DocumentNode<
  CollaborationDocumentUpdatePayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "steps" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "StepsResponse" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...StepsResponseFragmentDoc.definitions,
  ],
};
export const CustomViewFragmentDoc: DocumentNode<CustomViewFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomView" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomView" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "icon" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "color" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "filters" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "shared" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CustomViewConnectionFragmentDoc: DocumentNode<CustomViewConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomViewConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomViewConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomView" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CustomViewFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const EmojiFragmentDoc: DocumentNode<EmojiFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Emoji" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Emoji" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "source" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const EmojiConnectionFragmentDoc: DocumentNode<EmojiConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmojiConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmojiConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Emoji" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...EmojiFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const FavoriteFragmentDoc: DocumentNode<FavoriteFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Favorite" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Favorite" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "sortOrder" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "projectTeam" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "label" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const FavoriteConnectionFragmentDoc: DocumentNode<FavoriteConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FavoriteConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FavoriteConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Favorite" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...FavoriteFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const FigmaEmbedFragmentDoc: DocumentNode<FigmaEmbedFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FigmaEmbed" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FigmaEmbed" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "lastModified" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "nodeName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const FigmaEmbedPayloadFragmentDoc: DocumentNode<FigmaEmbedPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FigmaEmbedPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FigmaEmbedPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbed" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbed" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...FigmaEmbedFragmentDoc.definitions,
  ],
};
export const InviteDataFragmentDoc: DocumentNode<InviteDataFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "InviteData" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "InviteData" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "inviterName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "avatarURLs" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "teamNames" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "teamIds" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "organizationName" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "organizationDomain" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "organizationLogoUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "userCount" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const InvitePagePayloadFragmentDoc: DocumentNode<InvitePagePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "InvitePagePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "InvitePagePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteData" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "InviteData" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...InviteDataFragmentDoc.definitions,
  ],
};
export const NotificationFragmentDoc: DocumentNode<NotificationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Notification" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Notification" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "reactionEmoji" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "readAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "emailedAt" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const NotificationConnectionFragmentDoc: DocumentNode<NotificationConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Notification" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...NotificationFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionFragmentDoc: DocumentNode<NotificationSubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscription" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const NotificationSubscriptionConnectionFragmentDoc: DocumentNode<
  NotificationSubscriptionConnectionFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscriptionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscription" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const OrganizationInviteFragmentDoc: DocumentNode<OrganizationInviteFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInvite" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInvite" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "external" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "acceptedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "expiresAt" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "inviter" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "invitee" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const OrganizationInviteConnectionFragmentDoc: DocumentNode<OrganizationInviteConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInviteConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInviteConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvite" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...OrganizationInviteFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const OrganizationExistsPayloadFragmentDoc: DocumentNode<OrganizationExistsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationExistsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationExistsPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "exists" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const PushSubscriptionPayloadFragmentDoc: DocumentNode<PushSubscriptionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ReactionFragmentDoc: DocumentNode<ReactionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reaction" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Reaction" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "emoji" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const ReactionConnectionFragmentDoc: DocumentNode<ReactionConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReactionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ReactionConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Reaction" }, directives: [] }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ReactionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const UserSettingsFragmentDoc: DocumentNode<UserSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettings" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "notificationPreferences" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "unsubscribedFrom" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const EventPayloadFragmentDoc: DocumentNode<EventPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EventPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EventPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const ApiKeyPayloadFragmentDoc: DocumentNode<ApiKeyPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ApiKeyPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKey" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKey" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...ApiKeyFragmentDoc.definitions,
  ],
};
export const ArchivePayloadFragmentDoc: DocumentNode<ArchivePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ArchivePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ArchivePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const EmailUserAccountAuthChallengeResponseFragmentDoc: DocumentNode<
  EmailUserAccountAuthChallengeResponseFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "authType" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CreateOrJoinOrganizationResponseFragmentDoc: DocumentNode<
  CreateOrJoinOrganizationResponseFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
        ],
      },
    },
  ],
};
export const BillingEmailPayloadFragmentDoc: DocumentNode<BillingEmailPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BillingEmailPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "BillingEmailPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CommentPayloadFragmentDoc: DocumentNode<CommentPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CommentPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CommentPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ContactPayloadFragmentDoc: DocumentNode<ContactPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ContactPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ContactPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const CustomViewPayloadFragmentDoc: DocumentNode<CustomViewPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CustomViewPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CustomViewPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "customView" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CyclePayloadFragmentDoc: DocumentNode<CyclePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CyclePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CyclePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const DebugPayloadFragmentDoc: DocumentNode<DebugPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DebugPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DebugPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const EmailUnsubscribePayloadFragmentDoc: DocumentNode<EmailUnsubscribePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmailUnsubscribePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmailUnsubscribePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const EmojiPayloadFragmentDoc: DocumentNode<EmojiPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EmojiPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "EmojiPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "emoji" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const FavoritePayloadFragmentDoc: DocumentNode<FavoritePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FavoritePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FavoritePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "favorite" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const FeedbackPayloadFragmentDoc: DocumentNode<FeedbackPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FeedbackPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FeedbackPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const UploadFileHeaderFragmentDoc: DocumentNode<UploadFileHeaderFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadFileHeader" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadFileHeader" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "key" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "value" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UploadFileFragmentDoc: DocumentNode<UploadFileFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadFile" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadFile" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "filename" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "contentType" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "size" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "uploadUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "assetUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "metaData" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "headers" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UploadFileHeader" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UploadFileHeaderFragmentDoc.definitions,
  ],
};
export const UploadPayloadFragmentDoc: DocumentNode<UploadPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UploadPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UploadPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "uploadFile" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UploadFile" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...UploadFileFragmentDoc.definitions,
  ],
};
export const ImageUploadFromUrlPayloadFragmentDoc: DocumentNode<ImageUploadFromUrlPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ImageUploadFromUrlPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ImageUploadFromUrlPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "url" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IntegrationPayloadFragmentDoc: DocumentNode<IntegrationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IssueImportFragmentDoc: DocumentNode<IssueImportFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueImport" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueImport" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "organizationId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "creatorId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "service" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "status" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IssueImportPayloadFragmentDoc: DocumentNode<IssueImportPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueImportPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueImportPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "importJob" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueImport" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...IssueImportFragmentDoc.definitions,
  ],
};
export const IssueLabelPayloadFragmentDoc: DocumentNode<IssueLabelPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueLabelPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IssueRelationPayloadFragmentDoc: DocumentNode<IssueRelationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssueRelationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelation" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IssuePayloadFragmentDoc: DocumentNode<IssuePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IssuePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IssuePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const MilestonePayloadFragmentDoc: DocumentNode<MilestonePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "MilestonePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "MilestonePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const NotificationPayloadFragmentDoc: DocumentNode<NotificationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const NotificationSubscriptionPayloadFragmentDoc: DocumentNode<
  NotificationSubscriptionPayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NotificationSubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscription" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OauthClientFragmentDoc: DocumentNode<OauthClientFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthClient" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthClient" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developer" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "clientSecret" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "redirectUris" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OauthClientPayloadFragmentDoc: DocumentNode<OauthClientPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthClientPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthClientPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClient" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "OauthClient" }, directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...OauthClientFragmentDoc.definitions,
  ],
};
export const RotateSecretPayloadFragmentDoc: DocumentNode<RotateSecretPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "RotateSecretPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "RotateSecretPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OauthTokenRevokePayloadFragmentDoc: DocumentNode<OauthTokenRevokePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OauthTokenRevokePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OauthTokenRevokePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const OrganizationDomainFragmentDoc: DocumentNode<OrganizationDomainFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomain" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomain" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "verified" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "verificationEmail" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OrganizationDomainPayloadFragmentDoc: DocumentNode<OrganizationDomainPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomainPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomain" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomain" }, directives: [] },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...OrganizationDomainFragmentDoc.definitions,
  ],
};
export const OrganizationInvitePayloadFragmentDoc: DocumentNode<OrganizationInvitePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationInvitePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInvitePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvite" }, directives: [] },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...OrganizationInviteFragmentDoc.definitions,
  ],
};
export const OrganizationPayloadFragmentDoc: DocumentNode<OrganizationPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OrganizationDeletePayloadFragmentDoc: DocumentNode<OrganizationDeletePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDeletePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDeletePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const ProjectLinkPayloadFragmentDoc: DocumentNode<ProjectLinkPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectLinkPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLink" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ProjectPayloadFragmentDoc: DocumentNode<ProjectPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProjectPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ProjectPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ReactionPayloadFragmentDoc: DocumentNode<ReactionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReactionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ReactionPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "reaction" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const CreateCsvExportReportPayloadFragmentDoc: DocumentNode<CreateCsvExportReportPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CreateCsvExportReportPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "CreateCsvExportReportPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const SubscriptionSessionPayloadFragmentDoc: DocumentNode<SubscriptionSessionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubscriptionSessionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionSessionPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "session" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const SubscriptionPayloadFragmentDoc: DocumentNode<SubscriptionPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SubscriptionPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "canceledAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const TeamMembershipPayloadFragmentDoc: DocumentNode<TeamMembershipPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamMembershipPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembership" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const TeamPayloadFragmentDoc: DocumentNode<TeamPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TeamPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const TemplatePayloadFragmentDoc: DocumentNode<TemplatePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TemplatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "TemplatePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "template" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserPayloadFragmentDoc: DocumentNode<UserPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserAdminPayloadFragmentDoc: DocumentNode<UserAdminPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAdminPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAdminPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const UserSettingsPayloadFragmentDoc: DocumentNode<UserSettingsPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserSettingsFlagPayloadFragmentDoc: DocumentNode<UserSettingsFlagPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsFlagPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsFlagPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "flag" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "value" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserSettingsFlagsResetPayloadFragmentDoc: DocumentNode<UserSettingsFlagsResetPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSettingsFlagsResetPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsFlagsResetPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserSubscribeToNewsletterPayloadFragmentDoc: DocumentNode<
  UserSubscribeToNewsletterPayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const ViewPreferencesFragmentDoc: DocumentNode<ViewPreferencesFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ViewPreferences" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferences" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "viewType" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ViewPreferencesPayloadFragmentDoc: DocumentNode<ViewPreferencesPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ViewPreferencesPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferences" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferences" }, directives: [] },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
    ...ViewPreferencesFragmentDoc.definitions,
  ],
};
export const WebhookPayloadFragmentDoc: DocumentNode<WebhookPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WebhookPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WebhookPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "webhook" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const WorkflowStatePayloadFragmentDoc: DocumentNode<WorkflowStatePayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "WorkflowStatePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStatePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const SynchronizedPayloadFragmentDoc: DocumentNode<SynchronizedPayloadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SynchronizedPayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SynchronizedPayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "lastSyncId" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const DocumentStepFragmentDoc: DocumentNode<DocumentStepFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "DocumentStep" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "DocumentStep" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "step" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "version" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const SamlConfigurationFragmentDoc: DocumentNode<SamlConfigurationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SamlConfiguration" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SamlConfiguration" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "ssoSigningCert" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "ssoEndpoint" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "ssoBinding" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "ssoSignAlgo" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "allowedDomains" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const UserAccountFragmentDoc: DocumentNode<UserAccountFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserAccount" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "UserAccount" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "email" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "service" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const SlackPostSettingsFragmentDoc: DocumentNode<SlackPostSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SlackPostSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SlackPostSettings" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "channel" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "channelId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "configurationUrl" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const GoogleSheetsSettingsFragmentDoc: DocumentNode<GoogleSheetsSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GoogleSheetsSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "GoogleSheetsSettings" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "spreadsheetId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "spreadsheetUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "sheetId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedIssuesAt" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const SentrySettingsFragmentDoc: DocumentNode<SentrySettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "SentrySettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "SentrySettings" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "organizationSlug" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const IntegrationSettingsFragmentDoc: DocumentNode<IntegrationSettingsFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "IntegrationSettings" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "IntegrationSettings" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "slackPost" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SlackPostSettings" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "slackProjectPost" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SlackPostSettings" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "googleSheets" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "GoogleSheetsSettings" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "sentry" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SentrySettings" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...SlackPostSettingsFragmentDoc.definitions,
    ...GoogleSheetsSettingsFragmentDoc.definitions,
    ...SentrySettingsFragmentDoc.definitions,
  ],
};
export const PushSubscriptionFragmentDoc: DocumentNode<PushSubscriptionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscription" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscription" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const PushSubscriptionConnectionFragmentDoc: DocumentNode<PushSubscriptionConnectionFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "PushSubscriptionConnection" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionConnection" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscription" }, directives: [] },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "pageInfo" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "PageInfo" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...PushSubscriptionFragmentDoc.definitions,
    ...PageInfoFragmentDoc.definitions,
  ],
};
export const FileUploadFragmentDoc: DocumentNode<FileUploadFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FileUpload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "FileUpload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
          {
            kind: "Field",
            name: { kind: "Name", value: "creator" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "assetUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "contentType" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "filename" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "metaData" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "size" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const ApplicationFragmentDoc: DocumentNode<ApplicationFragment, unknown> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Application" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Application" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developer" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "developerUrl" }, arguments: [], directives: [] },
          { kind: "Field", name: { kind: "Name", value: "imageUrl" }, arguments: [], directives: [] },
        ],
      },
    },
  ],
};
export const OrganizationDomainSimplePayloadFragmentDoc: DocumentNode<
  OrganizationDomainSimplePayloadFragment,
  unknown
> = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OrganizationDomainSimplePayload" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainSimplePayload" } },
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "success" }, arguments: [], directives: [] }],
      },
    },
  ],
};
export const SyncBootstrapDocument: DocumentNode<SyncBootstrapQuery, SyncBootstrapQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "syncBootstrap" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "databaseVersion" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "syncBootstrap" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "databaseVersion" },
                value: { kind: "Variable", name: { kind: "Name", value: "databaseVersion" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sinceSyncId" },
                value: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SyncResponse" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...SyncResponseFragmentDoc.definitions,
  ],
};
export const SyncUpdatesDocument: DocumentNode<SyncUpdatesQuery, SyncUpdatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "syncUpdates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Float" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "syncUpdates" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "sinceSyncId" },
                value: { kind: "Variable", name: { kind: "Name", value: "sinceSyncId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "SyncResponse" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...SyncResponseFragmentDoc.definitions,
  ],
};
export const ArchivedModelSyncDocument: DocumentNode<ArchivedModelSyncQuery, ArchivedModelSyncQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "archivedModelSync" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "identifier" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archivedModelSync" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "identifier" },
                value: { kind: "Variable", name: { kind: "Name", value: "identifier" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelClass" },
                value: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArchiveResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ArchiveResponseFragmentDoc.definitions,
  ],
};
export const ArchivedModelsSyncDocument: DocumentNode<ArchivedModelsSyncQuery, ArchivedModelsSyncQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "archivedModelsSync" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "DateTime" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "archivedModelsSync" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "modelClass" },
                value: { kind: "Variable", name: { kind: "Name", value: "modelClass" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ArchiveResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ArchiveResponseFragmentDoc.definitions,
  ],
};
export const ApiKeysDocument: DocumentNode<ApiKeysQuery, ApiKeysQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "apiKeys" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeys" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ApiKeyConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ApiKeyConnectionFragmentDoc.definitions,
  ],
};
export const ApplicationWithAuthorizationDocument: DocumentNode<
  ApplicationWithAuthorizationQuery,
  ApplicationWithAuthorizationQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "applicationWithAuthorization" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "scope" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
            },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "applicationWithAuthorization" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "scope" },
                value: { kind: "Variable", name: { kind: "Name", value: "scope" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserAuthorizedApplication" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserAuthorizedApplicationFragmentDoc.definitions,
  ],
};
export const AuthorizedApplicationsDocument: DocumentNode<
  AuthorizedApplicationsQuery,
  AuthorizedApplicationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "authorizedApplications" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "authorizedApplications" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "clientId" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "developer" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "developerUrl" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "imageUrl" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "scope" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "appId" }, arguments: [], directives: [] },
              ],
            },
          },
        ],
      },
    },
  ],
};
export const AvailableUsersDocument: DocumentNode<AvailableUsersQuery, AvailableUsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "availableUsers" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "availableUsers" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const SsoUrlFromEmailDocument: DocumentNode<SsoUrlFromEmailQuery, SsoUrlFromEmailQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ssoUrlFromEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "isDesktop" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "email" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "ssoUrlFromEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "isDesktop" },
                value: { kind: "Variable", name: { kind: "Name", value: "isDesktop" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: { kind: "Variable", name: { kind: "Name", value: "email" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SsoUrlFromEmailResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...SsoUrlFromEmailResponseFragmentDoc.definitions,
  ],
};
export const BillingDetailsDocument: DocumentNode<BillingDetailsQuery, BillingDetailsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "billingDetails" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingDetails" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BillingDetailsPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...BillingDetailsPayloadFragmentDoc.definitions,
  ],
};
export const BillingDetails_PaymentMethodDocument: DocumentNode<
  BillingDetails_PaymentMethodQuery,
  BillingDetails_PaymentMethodQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "billingDetails_paymentMethod" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingDetails" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "paymentMethod" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Card" }, directives: [] }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CardFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentJoinDocument: DocumentNode<
  CollaborativeDocumentJoinQuery,
  CollaborativeDocumentJoinQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "collaborativeDocumentJoin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentJoin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "issueId" },
                value: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "Variable", name: { kind: "Name", value: "version" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CollaborationDocumentUpdatePayloadFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentJoin_StepsDocument: DocumentNode<
  CollaborativeDocumentJoin_StepsQuery,
  CollaborativeDocumentJoin_StepsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "collaborativeDocumentJoin_steps" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "version" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentJoin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "clientId" },
                value: { kind: "Variable", name: { kind: "Name", value: "clientId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "issueId" },
                value: { kind: "Variable", name: { kind: "Name", value: "issueId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "version" },
                value: { kind: "Variable", name: { kind: "Name", value: "version" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "steps" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "StepsResponse" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...StepsResponseFragmentDoc.definitions,
  ],
};
export const CommentsDocument: DocumentNode<CommentsQuery, CommentsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "comments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CommentConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...CommentConnectionFragmentDoc.definitions,
  ],
};
export const CommentDocument: DocumentNode<CommentQuery, CommentQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "comment" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comment" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Comment" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CommentFragmentDoc.definitions,
  ],
};
export const CustomViewsDocument: DocumentNode<CustomViewsQuery, CustomViewsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "customViews" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViews" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...CustomViewConnectionFragmentDoc.definitions,
  ],
};
export const CustomViewDocument: DocumentNode<CustomViewQuery, CustomViewQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "customView" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CustomView" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CustomViewFragmentDoc.definitions,
  ],
};
export const CyclesDocument: DocumentNode<CyclesQuery, CyclesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycles" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CycleConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...CycleConnectionFragmentDoc.definitions,
  ],
};
export const CycleDocument: DocumentNode<CycleQuery, CycleQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Cycle" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CycleFragmentDoc.definitions,
  ],
};
export const Cycle_IssuesDocument: DocumentNode<Cycle_IssuesQuery, Cycle_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Cycle_UncompletedIssuesUponCloseDocument: DocumentNode<
  Cycle_UncompletedIssuesUponCloseQuery,
  Cycle_UncompletedIssuesUponCloseQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "cycle_uncompletedIssuesUponClose" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycle" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "uncompletedIssuesUponClose" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const EmojisDocument: DocumentNode<EmojisQuery, EmojisQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "emojis" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojis" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "EmojiConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...EmojiConnectionFragmentDoc.definitions,
  ],
};
export const EmojiDocument: DocumentNode<EmojiQuery, EmojiQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "emoji" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emoji" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Emoji" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...EmojiFragmentDoc.definitions,
  ],
};
export const FavoritesDocument: DocumentNode<FavoritesQuery, FavoritesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "favorites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "FavoriteConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...FavoriteConnectionFragmentDoc.definitions,
  ],
};
export const FavoriteDocument: DocumentNode<FavoriteQuery, FavoriteQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "favorite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favorite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Favorite" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...FavoriteFragmentDoc.definitions,
  ],
};
export const FigmaEmbedInfoDocument: DocumentNode<FigmaEmbedInfoQuery, FigmaEmbedInfoQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "figmaEmbedInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbedInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "nodeId" },
                value: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "fileId" },
                value: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbedPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...FigmaEmbedPayloadFragmentDoc.definitions,
  ],
};
export const FigmaEmbedInfo_FigmaEmbedDocument: DocumentNode<
  FigmaEmbedInfo_FigmaEmbedQuery,
  FigmaEmbedInfo_FigmaEmbedQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "figmaEmbedInfo_figmaEmbed" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "figmaEmbedInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "nodeId" },
                value: { kind: "Variable", name: { kind: "Name", value: "nodeId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "fileId" },
                value: { kind: "Variable", name: { kind: "Name", value: "fileId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "figmaEmbed" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "FigmaEmbed" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...FigmaEmbedFragmentDoc.definitions,
  ],
};
export const IntegrationsDocument: DocumentNode<IntegrationsQuery, IntegrationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationConnectionFragmentDoc.definitions,
  ],
};
export const IntegrationDocument: DocumentNode<IntegrationQuery, IntegrationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integration" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integration" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Integration" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IntegrationFragmentDoc.definitions,
  ],
};
export const IntegrationResourcesDocument: DocumentNode<
  IntegrationResourcesQuery,
  IntegrationResourcesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResources" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResources" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "IntegrationResourceConnection" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationResourceConnectionFragmentDoc.definitions,
  ],
};
export const IntegrationResourceDocument: DocumentNode<IntegrationResourceQuery, IntegrationResourceQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationResource" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationResourceFragmentDoc.definitions,
  ],
};
export const IntegrationResource_DataDocument: DocumentNode<
  IntegrationResource_DataQuery,
  IntegrationResource_DataQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_data" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IntegrationResourceData" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationResourceDataFragmentDoc.definitions,
  ],
};
export const IntegrationResource_Data_GithubPullRequestDocument: DocumentNode<
  IntegrationResource_Data_GithubPullRequestQuery,
  IntegrationResource_Data_GithubPullRequestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_data_githubPullRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "githubPullRequest" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PullRequestPayload" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PullRequestPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResource_Data_GitlabMergeRequestDocument: DocumentNode<
  IntegrationResource_Data_GitlabMergeRequestQuery,
  IntegrationResource_Data_GitlabMergeRequestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_data_gitlabMergeRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "gitlabMergeRequest" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "PullRequestPayload" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PullRequestPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResource_Data_GithubCommitDocument: DocumentNode<
  IntegrationResource_Data_GithubCommitQuery,
  IntegrationResource_Data_GithubCommitQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_data_githubCommit" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "githubCommit" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "FragmentSpread", name: { kind: "Name", value: "CommitPayload" }, directives: [] },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CommitPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResource_Data_SentryIssueDocument: DocumentNode<
  IntegrationResource_Data_SentryIssueQuery,
  IntegrationResource_Data_SentryIssueQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_data_sentryIssue" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "sentryIssue" },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "SentryIssuePayload" },
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...SentryIssuePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResource_PullRequestDocument: DocumentNode<
  IntegrationResource_PullRequestQuery,
  IntegrationResource_PullRequestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "integrationResource_pullRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResource" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pullRequest" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "PullRequestPayload" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...PullRequestPayloadFragmentDoc.definitions,
  ],
};
export const InviteInfoDocument: DocumentNode<InviteInfoQuery, InviteInfoQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "inviteInfo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "InvitePagePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...InvitePagePayloadFragmentDoc.definitions,
  ],
};
export const InviteInfo_InviteDataDocument: DocumentNode<
  InviteInfo_InviteDataQuery,
  InviteInfo_InviteDataQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "inviteInfo_inviteData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "inviteInfo" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamHash" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "userHash" },
                value: { kind: "Variable", name: { kind: "Name", value: "userHash" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inviteData" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "InviteData" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...InviteDataFragmentDoc.definitions,
  ],
};
export const IssueLabelsDocument: DocumentNode<IssueLabelsQuery, IssueLabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabels" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const IssueLabelDocument: DocumentNode<IssueLabelQuery, IssueLabelQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
  ],
};
export const IssueLabel_IssuesDocument: DocumentNode<IssueLabel_IssuesQuery, IssueLabel_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueLabel_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const IssueRelationsDocument: DocumentNode<IssueRelationsQuery, IssueRelationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueRelations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const IssueRelationDocument: DocumentNode<IssueRelationQuery, IssueRelationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueRelation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelation" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueRelationFragmentDoc.definitions,
  ],
};
export const IssuesDocument: DocumentNode<IssuesQuery, IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issues" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const IssueDocument: DocumentNode<IssueQuery, IssueQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Issue" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueFragmentDoc.definitions,
  ],
};
export const Issue_SubscribersDocument: DocumentNode<Issue_SubscribersQuery, Issue_SubscribersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_subscribers" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "subscribers" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const Issue_ChildrenDocument: DocumentNode<Issue_ChildrenQuery, Issue_ChildrenQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_children" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "children" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Issue_CommentsDocument: DocumentNode<Issue_CommentsQuery, Issue_CommentsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_comments" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comments" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CommentConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CommentConnectionFragmentDoc.definitions,
  ],
};
export const Issue_HistoryDocument: DocumentNode<Issue_HistoryQuery, Issue_HistoryQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_history" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "history" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IssueHistoryConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueHistoryConnectionFragmentDoc.definitions,
  ],
};
export const Issue_LabelsDocument: DocumentNode<Issue_LabelsQuery, Issue_LabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_labels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "labels" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const Issue_IntegrationResourcesDocument: DocumentNode<
  Issue_IntegrationResourcesQuery,
  Issue_IntegrationResourcesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_integrationResources" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "integrationResources" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IntegrationResourceConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationResourceConnectionFragmentDoc.definitions,
  ],
};
export const Issue_RelationsDocument: DocumentNode<Issue_RelationsQuery, Issue_RelationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_relations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "relations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IssueRelationConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const Issue_InverseRelationsDocument: DocumentNode<
  Issue_InverseRelationsQuery,
  Issue_InverseRelationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issue_inverseRelations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issue" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "inverseRelations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IssueRelationConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationConnectionFragmentDoc.definitions,
  ],
};
export const IssueSearchDocument: DocumentNode<IssueSearchQuery, IssueSearchQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "issueSearch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "query" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueSearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "query" },
                value: { kind: "Variable", name: { kind: "Name", value: "query" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const MilestonesDocument: DocumentNode<MilestonesQuery, MilestonesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestones" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestones" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "MilestoneConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...MilestoneConnectionFragmentDoc.definitions,
  ],
};
export const MilestoneDocument: DocumentNode<MilestoneQuery, MilestoneQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestone" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Milestone" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...MilestoneFragmentDoc.definitions,
  ],
};
export const Milestone_ProjectsDocument: DocumentNode<Milestone_ProjectsQuery, Milestone_ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "milestone_projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestone" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const NotificationsDocument: DocumentNode<NotificationsQuery, NotificationsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notifications" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...NotificationConnectionFragmentDoc.definitions,
  ],
};
export const NotificationDocument: DocumentNode<NotificationQuery, NotificationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Notification" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...NotificationFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionsDocument: DocumentNode<
  NotificationSubscriptionsQuery,
  NotificationSubscriptionsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notificationSubscriptions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NotificationSubscriptionConnection" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionConnectionFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionDocument: DocumentNode<
  NotificationSubscriptionQuery,
  NotificationSubscriptionQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "notificationSubscription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscription" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationSubscription" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionFragmentDoc.definitions,
  ],
};
export const OrganizationInvitesDocument: DocumentNode<OrganizationInvitesQuery, OrganizationInvitesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvites" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvites" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "OrganizationInviteConnection" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationInviteConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationInviteDocument: DocumentNode<OrganizationInviteQuery, OrganizationInviteQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabel" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssueLabelFragmentDoc.definitions,
  ],
};
export const OrganizationInvite_IssuesDocument: DocumentNode<
  OrganizationInvite_IssuesQuery,
  OrganizationInvite_IssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationInvite_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationDocument: DocumentNode<OrganizationQuery, OrganizationQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Organization" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...OrganizationFragmentDoc.definitions,
  ],
};
export const Organization_UsersDocument: DocumentNode<Organization_UsersQuery, Organization_UsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "users" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const Organization_TeamsDocument: DocumentNode<Organization_TeamsQuery, Organization_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const Organization_MilestonesDocument: DocumentNode<
  Organization_MilestonesQuery,
  Organization_MilestonesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_milestones" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "milestones" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "MilestoneConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...MilestoneConnectionFragmentDoc.definitions,
  ],
};
export const Organization_IntegrationsDocument: DocumentNode<
  Organization_IntegrationsQuery,
  Organization_IntegrationsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organization_integrations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organization" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "integrations" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "IntegrationConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationConnectionFragmentDoc.definitions,
  ],
};
export const OrganizationExistsDocument: DocumentNode<OrganizationExistsQuery, OrganizationExistsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "organizationExists" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "urlKey" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationExists" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "urlKey" },
                value: { kind: "Variable", name: { kind: "Name", value: "urlKey" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationExistsPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationExistsPayloadFragmentDoc.definitions,
  ],
};
export const ProjectLinksDocument: DocumentNode<ProjectLinksQuery, ProjectLinksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projectLinks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLinkConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ProjectLinkConnectionFragmentDoc.definitions,
  ],
};
export const ProjectLinkDocument: DocumentNode<ProjectLinkQuery, ProjectLinkQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projectLink" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLink" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLink" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectLinkFragmentDoc.definitions,
  ],
};
export const ProjectsDocument: DocumentNode<ProjectsQuery, ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projects" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const ProjectDocument: DocumentNode<ProjectQuery, ProjectQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Project" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectFragmentDoc.definitions,
  ],
};
export const Project_TeamsDocument: DocumentNode<Project_TeamsQuery, Project_TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teams" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const Project_MembersDocument: DocumentNode<Project_MembersQuery, Project_MembersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_members" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "members" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const Project_IssuesDocument: DocumentNode<Project_IssuesQuery, Project_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Project_LinksDocument: DocumentNode<Project_LinksQuery, Project_LinksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "project_links" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "project" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "links" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ProjectLinkConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectLinkConnectionFragmentDoc.definitions,
  ],
};
export const PushSubscriptionTestDocument: DocumentNode<
  PushSubscriptionTestQuery,
  PushSubscriptionTestQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "pushSubscriptionTest" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionTest" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionsDocument: DocumentNode<ReactionsQuery, ReactionsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "reactions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactions" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ReactionConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ReactionConnectionFragmentDoc.definitions,
  ],
};
export const ReactionDocument: DocumentNode<ReactionQuery, ReactionQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "reaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reaction" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Reaction" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ReactionFragmentDoc.definitions,
  ],
};
export const SubscriptionDocument: DocumentNode<SubscriptionQuery, SubscriptionQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "subscription" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscription" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Subscription" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...SubscriptionFragmentDoc.definitions,
  ],
};
export const TeamMembershipsDocument: DocumentNode<TeamMembershipsQuery, TeamMembershipsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMemberships" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const TeamMembershipDocument: DocumentNode<TeamMembershipQuery, TeamMembershipQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teamMembership" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembership" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembership" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamMembershipFragmentDoc.definitions,
  ],
};
export const TeamsDocument: DocumentNode<TeamsQuery, TeamsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamConnection" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamConnectionFragmentDoc.definitions,
  ],
};
export const TeamDocument: DocumentNode<TeamQuery, TeamQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamFragmentDoc.definitions,
  ],
};
export const Team_IssuesDocument: DocumentNode<Team_IssuesQuery, Team_IssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Team_CyclesDocument: DocumentNode<Team_CyclesQuery, Team_CyclesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_cycles" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cycles" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "CycleConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...CycleConnectionFragmentDoc.definitions,
  ],
};
export const Team_MembershipsDocument: DocumentNode<Team_MembershipsQuery, Team_MembershipsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_memberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "memberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeamMembershipConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const Team_ProjectsDocument: DocumentNode<Team_ProjectsQuery, Team_ProjectsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_projects" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "projects" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "ProjectConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProjectConnectionFragmentDoc.definitions,
  ],
};
export const Team_StatesDocument: DocumentNode<Team_StatesQuery, Team_StatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_states" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "states" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "WorkflowStateConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...WorkflowStateConnectionFragmentDoc.definitions,
  ],
};
export const Team_TemplatesDocument: DocumentNode<Team_TemplatesQuery, Team_TemplatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_templates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "templates" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "TemplateConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TemplateConnectionFragmentDoc.definitions,
  ],
};
export const Team_LabelsDocument: DocumentNode<Team_LabelsQuery, Team_LabelsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_labels" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "labels" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelConnectionFragmentDoc.definitions,
  ],
};
export const Team_WebhooksDocument: DocumentNode<Team_WebhooksQuery, Team_WebhooksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "team_webhooks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "team" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "webhooks" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "WebhookConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...WebhookConnectionFragmentDoc.definitions,
  ],
};
export const TemplatesDocument: DocumentNode<TemplatesQuery, TemplatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "templates" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templates" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "createdAt" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "archivedAt" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "type" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "name" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "description" }, arguments: [], directives: [] },
                { kind: "Field", name: { kind: "Name", value: "templateData" }, arguments: [], directives: [] },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Team" }, directives: [] }],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creator" },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamFragmentDoc.definitions,
    ...UserFragmentDoc.definitions,
  ],
};
export const TemplateDocument: DocumentNode<TemplateQuery, TemplateQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "template" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "template" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Template" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TemplateFragmentDoc.definitions,
  ],
};
export const UsersDocument: DocumentNode<UsersQuery, UsersQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserConnection" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserConnectionFragmentDoc.definitions,
  ],
};
export const UserDocument: DocumentNode<UserQuery, UserQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const User_AssignedIssuesDocument: DocumentNode<User_AssignedIssuesQuery, User_AssignedIssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_assignedIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "assignedIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const User_CreatedIssuesDocument: DocumentNode<User_CreatedIssuesQuery, User_CreatedIssuesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_createdIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createdIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const User_TeamMembershipsDocument: DocumentNode<
  User_TeamMembershipsQuery,
  User_TeamMembershipsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "user_teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teamMemberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeamMembershipConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const ViewerDocument: DocumentNode<ViewerQuery, ViewerQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "User" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserFragmentDoc.definitions,
  ],
};
export const Viewer_AssignedIssuesDocument: DocumentNode<
  Viewer_AssignedIssuesQuery,
  Viewer_AssignedIssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_assignedIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "assignedIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Viewer_CreatedIssuesDocument: DocumentNode<
  Viewer_CreatedIssuesQuery,
  Viewer_CreatedIssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_createdIssues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "createdIssues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const Viewer_TeamMembershipsDocument: DocumentNode<
  Viewer_TeamMembershipsQuery,
  Viewer_TeamMembershipsQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "viewer_teamMemberships" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teamMemberships" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TeamMembershipConnection" },
                        directives: [],
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipConnectionFragmentDoc.definitions,
  ],
};
export const UserSettingsDocument: DocumentNode<UserSettingsQuery, UserSettingsQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "userSettings" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettings" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserSettings" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserSettingsFragmentDoc.definitions,
  ],
};
export const WebhooksDocument: DocumentNode<WebhooksQuery, WebhooksQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "webhooks" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhooks" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "WebhookConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...WebhookConnectionFragmentDoc.definitions,
  ],
};
export const WebhookDocument: DocumentNode<WebhookQuery, WebhookQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "webhook" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhook" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "Webhook" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WebhookFragmentDoc.definitions,
  ],
};
export const WorkflowStatesDocument: DocumentNode<WorkflowStatesQuery, WorkflowStatesQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowStates" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStates" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "before" },
                value: { kind: "Variable", name: { kind: "Name", value: "before" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: { kind: "Variable", name: { kind: "Name", value: "after" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "last" },
                value: { kind: "Variable", name: { kind: "Name", value: "last" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "includeArchived" },
                value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStateConnection" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...WorkflowStateConnectionFragmentDoc.definitions,
  ],
};
export const WorkflowStateDocument: DocumentNode<WorkflowStateQuery, WorkflowStateQueryVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowState" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowState" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WorkflowStateFragmentDoc.definitions,
  ],
};
export const WorkflowState_IssuesDocument: DocumentNode<
  WorkflowState_IssuesQuery,
  WorkflowState_IssuesQueryVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "workflowState_issues" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "before" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "after" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "PaginationOrderBy" } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowState" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "issues" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: { kind: "Variable", name: { kind: "Name", value: "before" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: { kind: "Variable", name: { kind: "Name", value: "after" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: { kind: "Variable", name: { kind: "Name", value: "first" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: { kind: "Variable", name: { kind: "Name", value: "last" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "includeArchived" },
                      value: { kind: "Variable", name: { kind: "Name", value: "includeArchived" } },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "Variable", name: { kind: "Name", value: "orderBy" } },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "FragmentSpread", name: { kind: "Name", value: "IssueConnection" }, directives: [] },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...IssueConnectionFragmentDoc.definitions,
  ],
};
export const EventCreateDocument: DocumentNode<EventCreateMutation, EventCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "eventCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EventCreateInput" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "eventCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EventPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...EventPayloadFragmentDoc.definitions,
  ],
};
export const ApiKeyCreateDocument: DocumentNode<ApiKeyCreateMutation, ApiKeyCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "apiKeyCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ApiKeyCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeyCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ApiKeyPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ApiKeyPayloadFragmentDoc.definitions,
  ],
};
export const ApiKeyDeleteDocument: DocumentNode<ApiKeyDeleteMutation, ApiKeyDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "apiKeyDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "apiKeyDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const EmailUserAccountAuthChallengeDocument: DocumentNode<
  EmailUserAccountAuthChallengeMutation,
  EmailUserAccountAuthChallengeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailUserAccountAuthChallenge" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "EmailUserAccountAuthChallengeInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailUserAccountAuthChallenge" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "EmailUserAccountAuthChallengeResponse" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...EmailUserAccountAuthChallengeResponseFragmentDoc.definitions,
  ],
};
export const EmailTokenUserAccountAuthDocument: DocumentNode<
  EmailTokenUserAccountAuthMutation,
  EmailTokenUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailTokenUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TokenUserAccountAuthInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailTokenUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const SamlTokenUserAccountAuthDocument: DocumentNode<
  SamlTokenUserAccountAuthMutation,
  SamlTokenUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "samlTokenUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TokenUserAccountAuthInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "samlTokenUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const GoogleUserAccountAuthDocument: DocumentNode<
  GoogleUserAccountAuthMutation,
  GoogleUserAccountAuthMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "googleUserAccountAuth" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "GoogleUserAccountAuthInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "googleUserAccountAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "AuthResolverResponse" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...AuthResolverResponseFragmentDoc.definitions,
  ],
};
export const CreateOrganizationFromOnboardingDocument: DocumentNode<
  CreateOrganizationFromOnboardingMutation,
  CreateOrganizationFromOnboardingMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createOrganizationFromOnboarding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "survey" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "OnboardingCustomerSurvey" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CreateOrganizationInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createOrganizationFromOnboarding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "survey" },
                value: { kind: "Variable", name: { kind: "Name", value: "survey" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const JoinOrganizationFromOnboardingDocument: DocumentNode<
  JoinOrganizationFromOnboardingMutation,
  JoinOrganizationFromOnboardingMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "joinOrganizationFromOnboarding" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "JoinOrganizationInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "joinOrganizationFromOnboarding" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const LeaveOrganizationDocument: DocumentNode<LeaveOrganizationMutation, LeaveOrganizationMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "leaveOrganization" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "organizationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "leaveOrganization" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "organizationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "organizationId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CreateOrJoinOrganizationResponse" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CreateOrJoinOrganizationResponseFragmentDoc.definitions,
  ],
};
export const BillingEmailUpdateDocument: DocumentNode<
  BillingEmailUpdateMutation,
  BillingEmailUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "billingEmailUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "BillingEmailUpdateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "billingEmailUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "BillingEmailPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...BillingEmailPayloadFragmentDoc.definitions,
  ],
};
export const CollaborativeDocumentUpdateDocument: DocumentNode<
  CollaborativeDocumentUpdateMutation,
  CollaborativeDocumentUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "collaborativeDocumentUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CollaborationDocumentUpdateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collaborativeDocumentUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CollaborationDocumentUpdatePayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CollaborationDocumentUpdatePayloadFragmentDoc.definitions,
  ],
};
export const CommentCreateDocument: DocumentNode<CommentCreateMutation, CommentCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CommentCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CommentPayloadFragmentDoc.definitions,
  ],
};
export const CommentUpdateDocument: DocumentNode<CommentUpdateMutation, CommentUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CommentUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CommentPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CommentPayloadFragmentDoc.definitions,
  ],
};
export const CommentDeleteDocument: DocumentNode<CommentDeleteMutation, CommentDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "commentDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "commentDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const ContactCreateDocument: DocumentNode<ContactCreateMutation, ContactCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "contactCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ContactCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "contactCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ContactPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ContactPayloadFragmentDoc.definitions,
  ],
};
export const CustomViewCreateDocument: DocumentNode<CustomViewCreateMutation, CustomViewCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CustomViewCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...CustomViewPayloadFragmentDoc.definitions,
  ],
};
export const CustomViewUpdateDocument: DocumentNode<CustomViewUpdateMutation, CustomViewUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "CustomViewUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "CustomViewPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...CustomViewPayloadFragmentDoc.definitions,
  ],
};
export const CustomViewDeleteDocument: DocumentNode<CustomViewDeleteMutation, CustomViewDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "customViewDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "customViewDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const CycleCreateDocument: DocumentNode<CycleCreateMutation, CycleCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CycleCreateInput" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CyclePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CyclePayloadFragmentDoc.definitions,
  ],
};
export const CycleUpdateDocument: DocumentNode<CycleUpdateMutation, CycleUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "CycleUpdateInput" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "CyclePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...CyclePayloadFragmentDoc.definitions,
  ],
};
export const CycleArchiveDocument: DocumentNode<CycleArchiveMutation, CycleArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "cycleArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cycleArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const DebugFailWithInternalErrorDocument: DocumentNode<
  DebugFailWithInternalErrorMutation,
  DebugFailWithInternalErrorMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugFailWithInternalError" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugFailWithInternalError" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const DebugFailWithWarningDocument: DocumentNode<
  DebugFailWithWarningMutation,
  DebugFailWithWarningMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugFailWithWarning" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugFailWithWarning" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const DebugCreateSamlOrgDocument: DocumentNode<
  DebugCreateSamlOrgMutation,
  DebugCreateSamlOrgMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "debugCreateSAMLOrg" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "debugCreateSAMLOrg" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "DebugPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...DebugPayloadFragmentDoc.definitions,
  ],
};
export const EmailUnsubscribeDocument: DocumentNode<EmailUnsubscribeMutation, EmailUnsubscribeMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emailUnsubscribe" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "EmailUnsubscribeInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emailUnsubscribe" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "EmailUnsubscribePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...EmailUnsubscribePayloadFragmentDoc.definitions,
  ],
};
export const EmojiCreateDocument: DocumentNode<EmojiCreateMutation, EmojiCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emojiCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "EmojiCreateInput" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojiCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EmojiPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...EmojiPayloadFragmentDoc.definitions,
  ],
};
export const EmojiDeleteDocument: DocumentNode<EmojiDeleteMutation, EmojiDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "emojiDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "emojiDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const FavoriteCreateDocument: DocumentNode<FavoriteCreateMutation, FavoriteCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FavoriteCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "FavoritePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...FavoritePayloadFragmentDoc.definitions,
  ],
};
export const FavoriteUpdateDocument: DocumentNode<FavoriteUpdateMutation, FavoriteUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FavoriteUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "FavoritePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...FavoritePayloadFragmentDoc.definitions,
  ],
};
export const FavoriteDeleteDocument: DocumentNode<FavoriteDeleteMutation, FavoriteDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "favoriteDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "favoriteDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const FeedbackCreateDocument: DocumentNode<FeedbackCreateMutation, FeedbackCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "feedbackCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "FeedbackCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "feedbackCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "FeedbackPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...FeedbackPayloadFragmentDoc.definitions,
  ],
};
export const FileUploadDocument: DocumentNode<FileUploadMutation, FileUploadMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "fileUpload" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "metaData" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "JSON" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "size" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Int" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "contentType" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "filename" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "fileUpload" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "metaData" },
                value: { kind: "Variable", name: { kind: "Name", value: "metaData" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "size" },
                value: { kind: "Variable", name: { kind: "Name", value: "size" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "contentType" },
                value: { kind: "Variable", name: { kind: "Name", value: "contentType" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filename" },
                value: { kind: "Variable", name: { kind: "Name", value: "filename" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UploadPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UploadPayloadFragmentDoc.definitions,
  ],
};
export const ImageUploadFromUrlDocument: DocumentNode<
  ImageUploadFromUrlMutation,
  ImageUploadFromUrlMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "imageUploadFromUrl" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "url" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "imageUploadFromUrl" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "url" },
                value: { kind: "Variable", name: { kind: "Name", value: "url" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ImageUploadFromUrlPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ImageUploadFromUrlPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGithubConnectDocument: DocumentNode<
  IntegrationGithubConnectMutation,
  IntegrationGithubConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGithubConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGithubConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "installationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGitlabConnectDocument: DocumentNode<
  IntegrationGitlabConnectMutation,
  IntegrationGitlabConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGitlabConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "gitlabUrl" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "accessToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGitlabConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gitlabUrl" },
                value: { kind: "Variable", name: { kind: "Name", value: "gitlabUrl" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "accessToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "accessToken" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackDocument: DocumentNode<IntegrationSlackMutation, IntegrationSlackMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlack" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlack" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "shouldUseV2Auth" },
                value: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackPersonalDocument: DocumentNode<
  IntegrationSlackPersonalMutation,
  IntegrationSlackPersonalMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackPersonal" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackPersonal" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackPostDocument: DocumentNode<
  IntegrationSlackPostMutation,
  IntegrationSlackPostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "shouldUseV2Auth" },
                value: { kind: "Variable", name: { kind: "Name", value: "shouldUseV2Auth" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "teamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackProjectPostDocument: DocumentNode<
  IntegrationSlackProjectPostMutation,
  IntegrationSlackProjectPostMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackProjectPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackProjectPost" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "projectId" },
                value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSlackImportEmojisDocument: DocumentNode<
  IntegrationSlackImportEmojisMutation,
  IntegrationSlackImportEmojisMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSlackImportEmojis" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSlackImportEmojis" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationFigmaDocument: DocumentNode<IntegrationFigmaMutation, IntegrationFigmaMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationFigma" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationFigma" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "redirectUri" },
                value: { kind: "Variable", name: { kind: "Name", value: "redirectUri" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationGoogleSheetsDocument: DocumentNode<
  IntegrationGoogleSheetsMutation,
  IntegrationGoogleSheetsMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationGoogleSheets" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationGoogleSheets" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const RefreshGoogleSheetsDataDocument: DocumentNode<
  RefreshGoogleSheetsDataMutation,
  RefreshGoogleSheetsDataMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "refreshGoogleSheetsData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "refreshGoogleSheetsData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationSentryConnectDocument: DocumentNode<
  IntegrationSentryConnectMutation,
  IntegrationSentryConnectMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationSentryConnect" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "organizationSlug" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationSentryConnect" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "organizationSlug" },
                value: { kind: "Variable", name: { kind: "Name", value: "organizationSlug" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "code" },
                value: { kind: "Variable", name: { kind: "Name", value: "code" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "installationId" },
                value: { kind: "Variable", name: { kind: "Name", value: "installationId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IntegrationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IntegrationPayloadFragmentDoc.definitions,
  ],
};
export const IntegrationDeleteDocument: DocumentNode<IntegrationDeleteMutation, IntegrationDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IntegrationResourceArchiveDocument: DocumentNode<
  IntegrationResourceArchiveMutation,
  IntegrationResourceArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "integrationResourceArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "integrationResourceArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueImportCreateDocument: DocumentNode<IssueImportCreateMutation, IssueImportCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueImportCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ImportCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueImportCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueImportPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueImportPayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelCreateDocument: DocumentNode<IssueLabelCreateMutation, IssueLabelCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelPayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelUpdateDocument: DocumentNode<IssueLabelUpdateMutation, IssueLabelUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueLabelUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueLabelPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueLabelPayloadFragmentDoc.definitions,
  ],
};
export const IssueLabelArchiveDocument: DocumentNode<IssueLabelArchiveMutation, IssueLabelArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueLabelArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueLabelArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationCreateDocument: DocumentNode<
  IssueRelationCreateMutation,
  IssueRelationCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationPayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationUpdateDocument: DocumentNode<
  IssueRelationUpdateMutation,
  IssueRelationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "IssueRelationUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "IssueRelationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...IssueRelationPayloadFragmentDoc.definitions,
  ],
};
export const IssueRelationDeleteDocument: DocumentNode<
  IssueRelationDeleteMutation,
  IssueRelationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueRelationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueRelationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueCreateDocument: DocumentNode<IssueCreateMutation, IssueCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "IssueCreateInput" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssuePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssuePayloadFragmentDoc.definitions,
  ],
};
export const IssueUpdateDocument: DocumentNode<IssueUpdateMutation, IssueUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "IssueUpdateInput" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "IssuePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...IssuePayloadFragmentDoc.definitions,
  ],
};
export const IssueArchiveDocument: DocumentNode<IssueArchiveMutation, IssueArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const IssueUnarchiveDocument: DocumentNode<IssueUnarchiveMutation, IssueUnarchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "issueUnarchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "issueUnarchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const MilestoneCreateDocument: DocumentNode<MilestoneCreateMutation, MilestoneCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "MilestoneCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "MilestonePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...MilestonePayloadFragmentDoc.definitions,
  ],
};
export const MilestoneUpdateDocument: DocumentNode<MilestoneUpdateMutation, MilestoneUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "MilestoneUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "MilestonePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...MilestonePayloadFragmentDoc.definitions,
  ],
};
export const MilestoneDeleteDocument: DocumentNode<MilestoneDeleteMutation, MilestoneDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "milestoneDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "milestoneDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationCreateDocument: DocumentNode<
  NotificationCreateMutation,
  NotificationCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...NotificationPayloadFragmentDoc.definitions,
  ],
};
export const NotificationUpdateDocument: DocumentNode<
  NotificationUpdateMutation,
  NotificationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "NotificationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...NotificationPayloadFragmentDoc.definitions,
  ],
};
export const NotificationDeleteDocument: DocumentNode<
  NotificationDeleteMutation,
  NotificationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationArchiveDocument: DocumentNode<
  NotificationArchiveMutation,
  NotificationArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationUnarchiveDocument: DocumentNode<
  NotificationUnarchiveMutation,
  NotificationUnarchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationUnarchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationUnarchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionCreateDocument: DocumentNode<
  NotificationSubscriptionCreateMutation,
  NotificationSubscriptionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationSubscriptionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "NotificationSubscriptionCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "NotificationSubscriptionPayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...NotificationSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const NotificationSubscriptionDeleteDocument: DocumentNode<
  NotificationSubscriptionDeleteMutation,
  NotificationSubscriptionDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "notificationSubscriptionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notificationSubscriptionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OauthClientCreateDocument: DocumentNode<OauthClientCreateMutation, OauthClientCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OauthClientCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OauthClientPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OauthClientPayloadFragmentDoc.definitions,
  ],
};
export const OauthClientUpdateDocument: DocumentNode<OauthClientUpdateMutation, OauthClientUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OauthClientUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OauthClientPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OauthClientPayloadFragmentDoc.definitions,
  ],
};
export const OauthClientArchiveDocument: DocumentNode<
  OauthClientArchiveMutation,
  OauthClientArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OauthClientRotateSecretDocument: DocumentNode<
  OauthClientRotateSecretMutation,
  OauthClientRotateSecretMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthClientRotateSecret" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthClientRotateSecret" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "RotateSecretPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...RotateSecretPayloadFragmentDoc.definitions,
  ],
};
export const OauthTokenRevokeDocument: DocumentNode<OauthTokenRevokeMutation, OauthTokenRevokeMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "oauthTokenRevoke" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "scope" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
            },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "appId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauthTokenRevoke" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "scope" },
                value: { kind: "Variable", name: { kind: "Name", value: "scope" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "appId" },
                value: { kind: "Variable", name: { kind: "Name", value: "appId" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OauthTokenRevokePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OauthTokenRevokePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainVerifyDocument: DocumentNode<
  OrganizationDomainVerifyMutation,
  OrganizationDomainVerifyMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainVerify" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainVerificationInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainVerify" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomainPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationDomainPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainCreateDocument: DocumentNode<
  OrganizationDomainCreateMutation,
  OrganizationDomainCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationDomainCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDomainPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationDomainPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDomainDeleteDocument: DocumentNode<
  OrganizationDomainDeleteMutation,
  OrganizationDomainDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDomainDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDomainDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationInviteCreateDocument: DocumentNode<
  OrganizationInviteCreateMutation,
  OrganizationInviteCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationInviteCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "OrganizationInviteCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInviteCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationInvitePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationInvitePayloadFragmentDoc.definitions,
  ],
};
export const ResentOrganizationInviteDocument: DocumentNode<
  ResentOrganizationInviteMutation,
  ResentOrganizationInviteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "resentOrganizationInvite" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "resentOrganizationInvite" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationInviteDeleteDocument: DocumentNode<
  OrganizationInviteDeleteMutation,
  OrganizationInviteDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationInviteDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationInviteDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationUpdateDocument: DocumentNode<
  OrganizationUpdateMutation,
  OrganizationUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UpdateOrganizationInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationPayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDeleteChallengeDocument: DocumentNode<
  OrganizationDeleteChallengeMutation,
  OrganizationDeleteChallengeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDeleteChallenge" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDeleteChallenge" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDeletePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationDeletePayloadFragmentDoc.definitions,
  ],
};
export const OrganizationDeleteDocument: DocumentNode<
  OrganizationDeleteMutation,
  OrganizationDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "organizationDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "DeleteOrganizationInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organizationDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "OrganizationDeletePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...OrganizationDeletePayloadFragmentDoc.definitions,
  ],
};
export const ProjectLinkCreateDocument: DocumentNode<ProjectLinkCreateMutation, ProjectLinkCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectLinkCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectLinkCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinkCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ProjectLinkPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ProjectLinkPayloadFragmentDoc.definitions,
  ],
};
export const ProjectLinkDeleteDocument: DocumentNode<ProjectLinkDeleteMutation, ProjectLinkDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectLinkDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectLinkDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const ProjectCreateDocument: DocumentNode<ProjectCreateMutation, ProjectCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectPayloadFragmentDoc.definitions,
  ],
};
export const ProjectUpdateDocument: DocumentNode<ProjectUpdateMutation, ProjectUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ProjectUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ProjectPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ProjectPayloadFragmentDoc.definitions,
  ],
};
export const ProjectArchiveDocument: DocumentNode<ProjectArchiveMutation, ProjectArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "projectArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projectArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const PushSubscriptionCreateDocument: DocumentNode<
  PushSubscriptionCreateMutation,
  PushSubscriptionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "pushSubscriptionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "PushSubscriptionCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const PushSubscriptionDeleteDocument: DocumentNode<
  PushSubscriptionDeleteMutation,
  PushSubscriptionDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "pushSubscriptionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pushSubscriptionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "PushSubscriptionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...PushSubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionCreateDocument: DocumentNode<ReactionCreateMutation, ReactionCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "reactionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ReactionCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ReactionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ReactionPayloadFragmentDoc.definitions,
  ],
};
export const ReactionDeleteDocument: DocumentNode<ReactionDeleteMutation, ReactionDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "reactionDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "reactionDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const CreateCsvExportReportDocument: DocumentNode<
  CreateCsvExportReportMutation,
  CreateCsvExportReportMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createCsvExportReport" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCsvExportReport" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CreateCsvExportReportPayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...CreateCsvExportReportPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionSessionCreateDocument: DocumentNode<
  SubscriptionSessionCreateMutation,
  SubscriptionSessionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionSessionCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "plan" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionSessionCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "plan" },
                value: { kind: "Variable", name: { kind: "Name", value: "plan" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionSessionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...SubscriptionSessionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpdateSessionCreateDocument: DocumentNode<
  SubscriptionUpdateSessionCreateMutation,
  SubscriptionUpdateSessionCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpdateSessionCreate" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpdateSessionCreate" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionSessionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...SubscriptionSessionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpdateDocument: DocumentNode<
  SubscriptionUpdateMutation,
  SubscriptionUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "SubscriptionUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...SubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionUpgradeDocument: DocumentNode<
  SubscriptionUpgradeMutation,
  SubscriptionUpgradeMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionUpgrade" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionUpgrade" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "type" },
                value: { kind: "Variable", name: { kind: "Name", value: "type" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "SubscriptionPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...SubscriptionPayloadFragmentDoc.definitions,
  ],
};
export const SubscriptionArchiveDocument: DocumentNode<
  SubscriptionArchiveMutation,
  SubscriptionArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "subscriptionArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "subscriptionArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamMembershipCreateDocument: DocumentNode<
  TeamMembershipCreateMutation,
  TeamMembershipCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamMembershipCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TeamMembershipCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembershipCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "TeamMembershipPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...TeamMembershipPayloadFragmentDoc.definitions,
  ],
};
export const TeamMembershipDeleteDocument: DocumentNode<
  TeamMembershipDeleteMutation,
  TeamMembershipDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamMembershipDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamMembershipDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamCreateDocument: DocumentNode<TeamCreateMutation, TeamCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "copySettingsFromTeamId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "TeamCreateInput" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "copySettingsFromTeamId" },
                value: { kind: "Variable", name: { kind: "Name", value: "copySettingsFromTeamId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamPayloadFragmentDoc.definitions,
  ],
};
export const TeamUpdateDocument: DocumentNode<TeamUpdateMutation, TeamUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "TeamUpdateInput" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...TeamPayloadFragmentDoc.definitions,
  ],
};
export const TeamArchiveDocument: DocumentNode<TeamArchiveMutation, TeamArchiveMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TeamDeleteDocument: DocumentNode<TeamDeleteMutation, TeamDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "teamDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teamDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const TemplateCreateDocument: DocumentNode<TemplateCreateMutation, TemplateCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TemplateCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "TemplatePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...TemplatePayloadFragmentDoc.definitions,
  ],
};
export const TemplateUpdateDocument: DocumentNode<TemplateUpdateMutation, TemplateUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "TemplateUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "TemplatePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...TemplatePayloadFragmentDoc.definitions,
  ],
};
export const TemplateDeleteDocument: DocumentNode<TemplateDeleteMutation, TemplateDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "templateDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "templateDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const UserUpdateDocument: DocumentNode<UserUpdateMutation, UserUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UpdateUserInput" } } },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "UserPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...UserPayloadFragmentDoc.definitions,
  ],
};
export const UserPromoteAdminDocument: DocumentNode<UserPromoteAdminMutation, UserPromoteAdminMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userPromoteAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userPromoteAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserDemoteAdminDocument: DocumentNode<UserDemoteAdminMutation, UserDemoteAdminMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userDemoteAdmin" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userDemoteAdmin" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserSuspendDocument: DocumentNode<UserSuspendMutation, UserSuspendMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSuspend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSuspend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserUnsuspendDocument: DocumentNode<UserUnsuspendMutation, UserUnsuspendMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userUnsuspend" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userUnsuspend" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserAdminPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserAdminPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsUpdateDocument: DocumentNode<
  UserSettingsUpdateMutation,
  UserSettingsUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserSettingsUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserSettingsPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsFlagIncrementDocument: DocumentNode<
  UserSettingsFlagIncrementMutation,
  UserSettingsFlagIncrementMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsFlagIncrement" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "flag" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsFlagIncrement" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "flag" },
                value: { kind: "Variable", name: { kind: "Name", value: "flag" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsFlagPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagPayloadFragmentDoc.definitions,
  ],
};
export const UserSettingsFlagsResetDocument: DocumentNode<
  UserSettingsFlagsResetMutation,
  UserSettingsFlagsResetMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSettingsFlagsReset" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSettingsFlagsReset" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserSettingsFlagsResetPayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagsResetPayloadFragmentDoc.definitions,
  ],
};
export const UserFlagUpdateDocument: DocumentNode<UserFlagUpdateMutation, UserFlagUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userFlagUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "operation" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserFlagUpdateOperation" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "flag" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "UserFlagType" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userFlagUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "operation" },
                value: { kind: "Variable", name: { kind: "Name", value: "operation" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "flag" },
                value: { kind: "Variable", name: { kind: "Name", value: "flag" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "UserSettingsFlagPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...UserSettingsFlagPayloadFragmentDoc.definitions,
  ],
};
export const UserSubscribeToNewsletterDocument: DocumentNode<
  UserSubscribeToNewsletterMutation,
  UserSubscribeToNewsletterMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "userSubscribeToNewsletter" },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "userSubscribeToNewsletter" },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserSubscribeToNewsletterPayload" },
                  directives: [],
                },
              ],
            },
          },
        ],
      },
    },
    ...UserSubscribeToNewsletterPayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesCreateDocument: DocumentNode<
  ViewPreferencesCreateMutation,
  ViewPreferencesCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferencesPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ViewPreferencesPayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesUpdateDocument: DocumentNode<
  ViewPreferencesUpdateMutation,
  ViewPreferencesUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ViewPreferencesUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "ViewPreferencesPayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...ViewPreferencesPayloadFragmentDoc.definitions,
  ],
};
export const ViewPreferencesDeleteDocument: DocumentNode<
  ViewPreferencesDeleteMutation,
  ViewPreferencesDeleteMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "viewPreferencesDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewPreferencesDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const WebhookCreateDocument: DocumentNode<WebhookCreateMutation, WebhookCreateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WebhookCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WebhookPayloadFragmentDoc.definitions,
  ],
};
export const WebhookUpdateDocument: DocumentNode<WebhookUpdateMutation, WebhookUpdateMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WebhookUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "WebhookPayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...WebhookPayloadFragmentDoc.definitions,
  ],
};
export const WebhookDeleteDocument: DocumentNode<WebhookDeleteMutation, WebhookDeleteMutationVariables> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "webhookDelete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "webhookDelete" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateCreateDocument: DocumentNode<
  WorkflowStateCreateMutation,
  WorkflowStateCreateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateCreate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateCreateInput" } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateCreate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStatePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...WorkflowStatePayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateUpdateDocument: DocumentNode<
  WorkflowStateUpdateMutation,
  WorkflowStateUpdateMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateUpdate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "WorkflowStateUpdateInput" } },
          },
          directives: [],
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateUpdate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: { kind: "Variable", name: { kind: "Name", value: "input" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "FragmentSpread", name: { kind: "Name", value: "WorkflowStatePayload" }, directives: [] },
              ],
            },
          },
        ],
      },
    },
    ...WorkflowStatePayloadFragmentDoc.definitions,
  ],
};
export const WorkflowStateArchiveDocument: DocumentNode<
  WorkflowStateArchiveMutation,
  WorkflowStateArchiveMutationVariables
> = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "workflowStateArchive" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "workflowStateArchive" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "ArchivePayload" }, directives: [] }],
            },
          },
        ],
      },
    },
    ...ArchivePayloadFragmentDoc.definitions,
  ],
};
