import * as types from "../actions/types";

const initialState = {
  timestamp: Date.now(),
  listCategories: [],
  openSnackbar: false
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CATEGORIES}`:
    return {
      ...state,
      listCategories: payload
    };
    case `${types.POST_ADD}`:
      return {
        ...state,
        openSnackbar: true
      };
    case `${types.CLOSE_SNACKBAR}`:
      return {
        ...state,
        openSnackbar: false
      };
    default:
      return state;
  }
}
