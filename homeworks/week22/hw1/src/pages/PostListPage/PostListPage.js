import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { getPostsByLimit, getTotalCountOfPosts, LINK_URL } from "../../WebApi";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PaginationBtn = styled.button`
  margin-top: 2rem;
`;

const Header = styled.h1``;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [link, setLink] = useState(LINK_URL);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getPostsByLimit(link).then((posts) => {
      setLinks(posts.links);
      setPosts(posts.posts);
    });
  }, [link]);

  useEffect(() => {
    getTotalCountOfPosts().then((count) => setTotalCount(count));
  }, [totalCount]);
  let PaginationBtns;
  if (links.length === 4) {
    PaginationBtns = (
      <div>
        <PaginationBtn onClick={() => setLink(links[0][0])}>
          第一頁
        </PaginationBtn>
        <PaginationBtn onClick={() => setLink(links[1][0])}>
          上一頁
        </PaginationBtn>
        <PaginationBtn onClick={() => setLink(links[2][0])}>
          下一頁
        </PaginationBtn>
        <PaginationBtn onClick={() => setLink(links[3][0])}>
          最後一頁
        </PaginationBtn>
      </div>
    );
  } else {
    PaginationBtns = (
      <div>
        <PaginationBtn onClick={() => setLink(links[0][0])}>
          第一頁
        </PaginationBtn>
        <PaginationBtn onClick={() => setLink(links[1][0])}>
          下一頁
        </PaginationBtn>
        <PaginationBtn onClick={() => setLink(links[2][0])}>
          最後一頁
        </PaginationBtn>
      </div>
    );
  }
  return (
    <Root>
      <Header>總共有: {totalCount} 筆文章。</Header>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {PaginationBtns}
    </Root>
  );
}
