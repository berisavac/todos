import { combineReducers } from "redux";

//Reducers
import postsReducer from "./posts/posts.reducer";

export default combineReducers({
  posts: postsReducer
});
