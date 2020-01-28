import { Reducer } from "redux";
import { PostsState, PostsTypes } from "./types";
import produce from "immer";

const INITIAL_STATE: PostsState = {
  data: [],
  error: false,
  loading: false
};

const reducer: Reducer<PostsState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PostsTypes.POST_REQUEST: {
        draft.loading = true;
      }

      case PostsTypes.POST_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload.data;
      }

      case PostsTypes.POST_FAILURE: {
        draft.loading = false;
        draft.error = false;
        draft.data = [];
      }

      default:
        return state;
    }
  });
};

export default reducer;
