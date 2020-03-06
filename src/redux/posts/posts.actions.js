import * as postTypes from "./posts.types";

export const addNewPost = newPost => {
  const post = {
    id: Math.floor(Math.random() * 1000),
    post: newPost
  };
  return {
    type: postTypes.ADD_NEW_POST,
    payload: post
  };
};
