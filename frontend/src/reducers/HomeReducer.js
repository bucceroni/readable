import * as types from "../actions/types";

const initialState = {
    posts: [],
    postsReact:[],
    postRedux:[],
    postUdacity:[]

};

export default function reduce(state = initialState, action) {
    const { type, payload } = action

  switch (type) {
      case `${types.GET_POSTS}`:
      return {
        ...state,
        posts: payload
      };
      case `${types.GET_POSTS_CATEGORY_REDUX}`:
      return {
        ...state,
        postsRedux: payload
      };
      case `${types.GET_POSTS_CATEGORY_REACT}`:
      return {
        ...state,
        postsReact: payload
      };
      case `${types.GET_POSTS_CATEGORY_UDACITY}`:
      return {
        ...state,
        postsUdacity: payload
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
    default:
      return state;
  }
}
