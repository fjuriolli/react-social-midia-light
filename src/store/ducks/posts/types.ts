/**
 * Action types
 */
export enum PostsTypes {
  POST_REQUEST = "@posts/POST_REQUEST",
  POST_SUCCESS = "@posts/POST/SUCCESS",
  POST_FAILURE = "@posts/POST_FAILURE"
}

/**
 * Data types - data format inside reducer
 */
export interface Post {
  id: number;
  name: string;
}

/**
 * State types - reducer format state
 */
export interface PostsState {
  readonly data: Post[];
  readonly loading: boolean;
  readonly error: boolean;
}
