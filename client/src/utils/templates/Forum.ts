export interface IForumCreateRequest {
  title: string;
  description: string;
  forumType: "CHAT" | "DOCUMENT";
}

export interface IForumDeleteRequest {
  id: string;
}

export interface IForumUpdateRequest {
  id: string;
  title: string;
  description: string;
}

export type ForumCreateResponse = {
  id: string;
  title: string;
  description: string;
  created: string;
  stars: number;
  reviews: number;
  userEmail: string;
  type: ForumType;
};

export type ForumUpdateResponse = {
  id: string;
  title: string;
  description: string;
  created: string;
  modified: string;
  stars: number;
  reviews: number;
  userEmail: string;
  type: ForumType;
};
export type ForumFindResponse = ForumUpdateResponse;

export enum ForumType {
  CHAT = "CHAT",
  DOCUMENT = "DOCUMENT",
}

export interface IForumReviewCreate {
  forumId: string;
  review: string;
}

export type ForumReviewCreateResponse = {
  id: string;
  forumId: string;
  review: string;
  userEmail: string;
  created: string;
};

export type ForumReviewUpdateResponse = {
  id: string;
  forumId: string;
  review: string;
  userEmail: string;
  created: string;
  modified: string;
};

export type ForumReviewFindResponse = ForumReviewUpdateResponse;

export type ForumDeleteResponse = {
  success: boolean;
};

export interface IStarred{
    starred:boolean;
    id: string|null;
}

export interface IForumStarCreate{
    forumId:string;
}

export type ForumStarCreateResponse={
    id:string,
    forumId:string,
    userEmail:string,
    created:string
}

export interface IForumStarDelete{
    id:string;
}

export interface IForumDocumentCreate{
  forumId:string;
  url:string;
}

export type ForumDocumentCreateResponse={
  userEmail:string;
  url:string;
  id:string;
  forumId:string;
  created:string;
}