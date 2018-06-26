import api from "./api";
import * as types from "./types";

//HOME
export function getPosts() {
  return async dispatch => {
    dispatch({
      type: types.GET_POSTS,
      payload: await api.getPosts()
    });
  };
}

export function getPostsCategoryReact(category) {
  return async dispatch => {
    dispatch({
      type: types.GET_POSTS_CATEGORY_REACT,
      payload: await api.getPostsCategory(category)
    });
  };
}

export function getPostsCategoryRedux(category) {
  return async dispatch => {
    dispatch({
      type: types.GET_POSTS_CATEGORY_REDUX,
      payload: await api.getPostsCategory(category)
    });
  };
}

export function getPostsCategoryUdacity(category) {
  return async dispatch => {
    dispatch({
      type: types.GET_POSTS_CATEGORY_UDACITY,
      payload: await api.getPostsCategory(category)
    });
  };
}

//POST
export function incrementVoteScore(id) {
  const vote = "upVote";
  return async (dispatch, getState) => {
    const post = await api.postVoteScore(id, vote);
    const posts = getState().home.posts.map(item => {
      if (item.id === post.id) {
        item.voteScore = post.voteScore;
      }
      return item;
    });
    dispatch({
      type: types.INCREMENT_VOTE_SCORE,
      payload: posts
    });
  };
}

export function decrementVoteScore(id) {
  const vote = "downVote";
  return async (dispatch, getState) => {
    const post = await api.postVoteScore(id, vote);
    const posts = getState().home.posts.map(item => {
      if (item.id === post.id) {
        item.voteScore = post.voteScore;
      }
      return item;
    });
    dispatch({
      type: types.DECREMENT_VOTE_SCORE,
      payload: posts
    });
  };
}

export function deletePost(id) {
  return async (dispatch, getState) => {
    const post = await api.deletePost(id)
    const posts = getState().home.posts.map(item => {
      if (item.id === post.id) {
        item.deleted = post.deleted;
      }
      return item;
    });
    dispatch({
      type: types.DELETE_POST,
      payload: posts
    });
  };
}

//NEWPOST
export function getCategories() {
  return async dispatch => {
    dispatch({
      type: types.GET_CATEGORIES,
      payload: await api.getCategories()
    });
  };
}

export function postAddPost(id, timestamp, title, body, author, category) {
  return async dispatch => {
    dispatch({
      type: types.POST_ADD,
      payload: await api.postAddPost(id, timestamp, title, body, author, category)
    });
  };
}

export function closeSnackbar() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR
    });
  };
}

