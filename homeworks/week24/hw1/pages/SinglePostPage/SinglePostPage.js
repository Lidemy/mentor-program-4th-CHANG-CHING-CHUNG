import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useParams, useHistory } from "react-router-dom";
import { removePost } from "../../WebApi";
import { getPost, setPost } from "../../redux/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostTitle = styled.div`
  font-size: 30px;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: bold;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostBody = styled.div`
  white-space: pre-line;
  line-height: 2;
  text-align: left;
`;

SinglePostPage.propTypes = {
  post: PropTypes.object,
};

const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const PostBodyWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

export default function SinglePostPage() {
  const history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.posts.isLoadingPost);
  const post = useSelector((store) => store.posts.post);
  const postUserId = post ? post.userId : null;
  const userId = useSelector((store) => store.user.id);
  useEffect(() => {
    dispatch(getPost(id));

    return () => {
      dispatch(setPost(null));
    };
  }, [id, dispatch]);

  const handleRemovePost = () => {
    removePost(id).then(() => {
      history.push("/");
    });
  };
  const handleEditPost = () => {
    history.push(`/posts/${id}/edit`);
  };

  return (
    <Root>
      {!isLoading && post && post.id ? (
        <PostContainer>
          {postUserId === userId && (
            <>
              <button onClick={handleRemovePost}>刪除</button>
              <button onClick={handleEditPost}>編輯</button>
            </>
          )}
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
          </PostHeader>
          <PostBodyWrapper>
            <PostBody>{post.body}</PostBody>
          </PostBodyWrapper>
        </PostContainer>
      ) : null}
    </Root>
  );
}
