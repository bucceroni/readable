import api from "./HomeApi";
import * as types from "./types";

export function getCategories() {
  return async dispatch => {
    dispatch({
      type: types.GET_CATEGORIES,
      payload: await api.getCategories()
    });
  };
}

export function getPosts() {
  return async dispatch => {
    dispatch({
      type: types.GET_POSTS,
      payload: await api.getPosts()
    });
  };
}

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
