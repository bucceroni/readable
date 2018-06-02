import * as types from "../actions/types";

const initialState = {
    categories: [],
    posts: []
};

export default function reduce(state = initialState, action) {
    const { type, payload } = action

  switch (type) {
    case `${types.GET_CATEGORIES}`:
      return {
        ...state,
        categories: payload
      };
      case `${types.GET_POSTS}`:
      return {
        ...state,
        posts: payload
      };
    default:
      return state;
  }
}
