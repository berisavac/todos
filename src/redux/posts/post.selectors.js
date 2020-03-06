import { createSelector } from "reselect";

const selectPosts = state => state.posts;

export const selectPost = createSelector(
  [selectPosts],

  posts => {
      console.log(posts.posts);
    return posts.posts
  }
);
