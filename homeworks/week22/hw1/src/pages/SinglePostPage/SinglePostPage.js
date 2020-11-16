import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { getPost } from "../../WebApi";

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
  font-size: 24px;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostBody = styled.div``;

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
  let { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost(id).then((post) => setPost(post));
  }, [id]);

  return (
    <Root>
      {post.id ? (
        <PostContainer>
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
