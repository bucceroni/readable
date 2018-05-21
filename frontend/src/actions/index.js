const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

export function addPost({ post }) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePost({ id }) {
  return {
    type: REMOVE_POST,
    id
  };
}