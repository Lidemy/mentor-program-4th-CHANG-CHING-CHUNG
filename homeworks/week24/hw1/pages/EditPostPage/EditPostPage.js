import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import {
  getPost,
  updateOldPost,
  setUpdateOldPostResponse,
  setPost,
} from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 5rem;
`;

export default function EditPostPAGE() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.posts.isLoadingPost);
  const post = useSelector((store) => store.posts.post);
  const postUserId = post ? post.userId : null;
  const userId = useSelector((store) => store.user.id);
  const updateOldPostResponse = useSelector(
    (store) => store.posts.updateOldPostResponse
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOldPost(title, body, id));
  };

  useEffect(() => {
    if (post && postUserId !== userId) {
      history.push("/");
    }
  }, [postUserId, userId, history, post]);

  useEffect(() => {
    dispatch(getPost(id));

    return () => {
      dispatch(setPost(null));
    };
  }, [id, history, dispatch]);
  useEffect(() => {
    if (post && post.id) {
      setTitle(post.title);
      setBody(post.body);
      return;
    }
  }, [post]);
  useEffect(() => {
    if (updateOldPostResponse) {
      history.push(`/posts/${id}`);
    }
    return () => {
      dispatch(setUpdateOldPostResponse(false));
    };
  }, [updateOldPostResponse, history, id, dispatch]);
  return (
    <Form onSubmit={handleSubmit}>
      {postUserId === userId && !isLoading && post && post.id ? (
        <>
          <div>
            title:
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            body:
            <textarea
              cols="60"
              rows="30"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button>更新</button>
        </>
      ) : null}
    </Form>
  );
}
