import React, { useState } from "react";
import styled from "styled-components";
import { addPost } from "../../WebApi";
import { useHistory } from "react-router-dom";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, body).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
      }
      setTitle("");
      setBody("");
      history.push("/");
    });
  };
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
