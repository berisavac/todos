import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectPost } from "../../redux/posts/post.selectors";

import Post from "../Post/Post.component";

const Posts = ({ posts }) => (
  <div>
      {console.log(posts, 'ovo je post')}
    {posts.map(({ post, id }) => {
      return post !== "" ? <Post key={id} post={post} /> : null;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  posts: selectPost
});

export default connect(mapStateToProps)(Posts);
