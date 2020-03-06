import * as postsType from "./posts.types";

const INITIAL_STATE = {
  posts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postsType.ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};
