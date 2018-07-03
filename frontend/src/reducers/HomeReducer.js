import * as types from "../actions/types";

const initialState = {
    posts: [],
    openSnackbarDeleted: false,
    openSnackbarEditPost: false
};

export default function reduce(state = initialState, action) {
    const { type, payload } = action

  switch (type) {
      case `${types.GET_POSTS}`:
      return {
        ...state,
        posts: payload
      };
      case `${types.INCREMENT_VOTE_SCORE}`:
      return {
        ...state,
        posts: payload
      };
      case `${types.DECREMENT_VOTE_SCORE}`:
      return {
        ...state,
        posts: payload
      };
      case `${types.DELETE_POST}`:
      return {
        ...state,
        ...payload,
        openSnackbarDeleted: true
      };
    case `${types.CLOSE_SNACKBAR}`:
      return {
        ...state,
        openSnackbarDeleted: false
      };
      case `${types.PUT_EDIT_POST}`:
      return {
        ...state,
        ...payload,
        openSnackbarEditPost: true
      };
    case `${types.CLOSE_SNACKBAR_EDIT_POST}`:
      return {
        ...state,
        openSnackbarEditPost: false
      };
    default:
      return state;
  }
}
