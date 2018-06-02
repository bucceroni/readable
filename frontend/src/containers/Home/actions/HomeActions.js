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
