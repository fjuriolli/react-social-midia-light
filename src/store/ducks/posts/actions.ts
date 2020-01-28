import { action } from "typesafe-actions";
import { Post, PostsTypes } from "./types";

export const postRequest = () => action(PostsTypes.POST_REQUEST);

export const postFailure = () => action(PostsTypes.POST_FAILURE);

export const postSuccess = (data: Post[]) =>
  action(PostsTypes.POST_SUCCESS, data);
