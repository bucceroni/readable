import * as types from "../actions/types";

const initialState = {
  details: {},
  commentsPost: [],
  openSnackbarAddComments: false,
  openSnackbarEditComment: false,
  openSnackbarDeletedComments: false,
  openSnackbarEditPost: false
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${types.GET_DETAILS_POST}`:
      return {
        ...state,
        details: payload
      };
    case `${types.GET_DETAILS_COMMENTS_POST}`:
      return {
        ...state,
        commentsPost: payload
      };
    case `${types.INCREMENT_VOTE_SCORE_COMMENTS}`:
      return {
        ...state,
        commentsPost: payload
      };
    case `${types.DECREMENT_VOTE_SCORE_COMMENTS}`:
      return {
        ...state,
        commentsPost: payload
      };
    case `${types.DELETE_COMMENTS}`:
      return {
        ...state,
        commentsPost: payload,
        openSnackbarDeletedComments: true
      };
    case `${types.CLOSE_SNACKBAR_DELETE_COMMENTS}`:
      return {
        ...state,
        openSnackbarDeletedComments: false
      };
    case `${types.POST_ADD_COMMENTS}`:
      return {
        ...state,
        commentsPost: payload,
        openSnackbarAddComments: true
      };
      case `${types.CLOSE_SNACKBAR_ADD_COMMENTS}`:
      return {
        ...state,
        openSnackbarAddComments: false
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
      case `${types.PUT_EDIT_COMMENT}`:
      return {
        ...state,
        ...payload,
        openSnackbarEditComment: true
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
        openSnackbarEditPost: false,
      };
      case `${types.CLOSE_SNACKBAR_EDIT_COMMENT}`:
      return {
        ...state,
        openSnackbarEditComment: false
      };
      default:
      return state;
  }
}
