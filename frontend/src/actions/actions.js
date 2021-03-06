import api from "./api";
import * as types from "./types";

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

export function deletePost(id) {
  return async (dispatch, getState) => {
    const post = await api.deletePost(id);
    const posts = getState().home.posts.filter(
      item => item.id !== post.id
    );
    const details = {}
    dispatch({
      type: types.DELETE_POST,
      payload: {posts, details}
    });
  };
}

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
      payload: await api.postAddPost(
        id,
        timestamp,
        title,
        body,
        author,
        category
      )
    });
  };
}

export function closeSnackbar() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR,
    });
  };
}

export function putEditPost(id, title, body) {
  return async (dispatch, getState) => {
    const post = await api.putEditPost(id, title, body);
    const posts = getState().home.posts.map( item => {
       if(item.id === post.id){
         item.title = post.title
         item.body = post.body
       }
       return item
     });
    dispatch({
      type: types.PUT_EDIT_POST,
      payload: {posts}
    });
  };
}

export function closeSnackbarEditPost() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_EDIT_POST
    });
  };
}

export function getDetailsPost(id) {
  return async dispatch => {
    dispatch({
      type: types.GET_DETAILS_POST,
      payload: await api.getDetailsPost(id)
    });
  };
}

export function getCommentsPost(id) {
  return async dispatch => {
    dispatch({
      type: types.GET_DETAILS_COMMENTS_POST,
      payload: await api.getCommentsPost(id)
    });
  };
}

export function incrementVoteScoreComments(id) {
  const vote = "upVote";
  return async (dispatch, getState) => {
    const comment = await api.postVoteScoreComments(id, vote);
    const comments = getState().detailsPost.commentsPost.map(item => {
      if (item.id === comment.id) {
        item.voteScore = comment.voteScore;
      }
      return item;
    });
    dispatch({
      type: types.INCREMENT_VOTE_SCORE_COMMENTS,
      payload: comments
    });
  };
}

export function decrementVoteScoreComments(id) {
  const vote = "downVote";
  return async (dispatch, getState) => {
    const comment = await api.postVoteScoreComments(id, vote);
    const comments = getState().detailsPost.commentsPost.map(item => {
      if (item.id === comment.id) {
        item.voteScore = comment.voteScore;
      }
      return item;
    });

    dispatch({
      type: types.DECREMENT_VOTE_SCORE_COMMENTS,
      payload: comments
    });
  };
}

export function postAddComments(id, timestamp, body, author, parentId) {
  return async (dispatch, getState) => {
    const comments = await api.postAddComments(
      id,
      timestamp,
      body,
      author,
      parentId
    );

    dispatch({
      type: types.POST_ADD_COMMENTS,
      payload: [...getState().detailsPost.commentsPost, comments]
    });
  };
}

export function closeSnackbarAddComments() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_ADD_COMMENTS
    });
  };
}

export function deleteComments(id) {
  return async (dispatch, getState) => {
    const comment = await api.deleteComments(id);
    const comments = getState().detailsPost.commentsPost.filter(
      item => item.id !== comment.id
    );
    dispatch({
      type: types.DELETE_COMMENTS,
      payload: comments
    });
  };
}

export function closeSnackbarDeletedComments() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_DELETE_COMMENTS
    });
  };
}

export function getDetailsComment(id) {
  return async dispatch => {
    dispatch({
      type: types.GET_DETAILS_COMMENT,
      payload: await api.getDetailsComment(id)
    });
  };
}

export function putEditComment(id, timestamp, body) {
  return async (dispatch, getState) => {
    const comment = await api.putEditComment(id, timestamp, body);
    const comments = getState().detailsPost.commentsPost.map(item => {
      if(item.id === comment.id){
        item.timestamp = comment.timestamp
        item.body = comment.body
      }
      return item
    });
    dispatch({
      type: types.PUT_EDIT_COMMENT,
      payload: comments
    });
  };
}

export function closeSnackbarEditComment() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_SNACKBAR_EDIT_COMMENT
    });
  };
}