import React, { useState } from "react";

import { connect } from "react-redux";

import { addNewPost } from "../../redux/posts/posts.actions";

const InputPost = ({ addNewPost }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHadnler = event => {
    event.preventDefault();
    
    addNewPost(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={inputHadnler}>
        <input
          type="text"
          placeholder="todoes"
          onChange={event => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button>&#43;</button>
      </form>
    </div>
  );
};

export default connect(null, { addNewPost })(InputPost);
