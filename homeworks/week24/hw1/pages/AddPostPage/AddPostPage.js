import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { newPost, setNewPostResponse } from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 5rem;
`;

export default function AddPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const newPostResponse = useSelector((store) => store.posts.newPostResponse);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newPost(title, body));
  };

  useEffect(() => {
    if (newPostResponse && newPostResponse.ok === 0) {
      setErrorMessage(newPostResponse.message);
    }
    setTitle("");
    setBody("");
    if (newPostResponse && newPostResponse.id) {
      history.push("/posts/" + newPostResponse.id);
    }
    return () => {
      dispatch(setNewPostResponse(null));
    };
  }, [newPostResponse, history, dispatch]);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        body:
        <textarea
          cols="50"
          rows="20"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button>發布</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
}
