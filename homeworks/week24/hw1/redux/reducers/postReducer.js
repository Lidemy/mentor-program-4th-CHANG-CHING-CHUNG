import { createSlice } from "@reduxjs/toolkit";
import {
  getPost as getPostAPI,
  addPost,
  updatePost,
  getPosts as getPostsWebAPI,
  getPostsByLimit as getPostsByLimitWebAPI,
  getTotalCountOfPosts as getTotalCountOfPostsWebAPI,
} from "../../WebApi";

export const postReducer = createSlice({
  name: "posts",
  initialState: {
    isLoadingPost: false,
    post: null,
    posts: null,
    postsList: null,
    links: null,
    postsCount: null,
    newPostResponse: null,
    updateOldPostResponse: false,
  },
  reducers: {
    setIsLoadingPost: (state, action) => {
      state.isLoadingPost = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setNewPostResponse: (state, action) => {
      state.newPostResponse = action.payload;
    },
    setUpdateOldPostResponse: (state, action) => {
      state.updateOldPostResponse = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostsList: (state, action) => {
      state.postsList = action.payload;
    },
    setLinks: (state, action) => {
      state.links = action.payload;
    },
    setPostsCount: (state, action) => {
      state.postsCount = action.payload;
    },
  },
});

export const {
  setIsLoadingPost,
  setPost,
  setPosts,
  setPostsList,
  setLinks,
  setPostsCount,
  setNewPostResponse,
  setUpdateOldPostResponse,
} = postReducer.actions;

export const getPostsByLimit = (link) => (dispatch) => {
  getPostsByLimitWebAPI(link).then((posts) => {
    dispatch(setLinks(posts.links));
    dispatch(setPostsList(posts.posts));
  });
};

export const getTotalCountOfPosts = () => (dispatch) => {
  getTotalCountOfPostsWebAPI().then((count) => dispatch(setPostsCount(count)));
};

export const getPost = (id) => (dispatch) => {
  dispatch(setIsLoadingPost(true));
  getPostAPI(id)
    .then((res) => {
      dispatch(setPost(res));
      dispatch(setIsLoadingPost(false));
    })
    .catch((err) => console.log(err));
};

export const getPosts = () => (dispatch) => {
  getPostsWebAPI().then((posts) => dispatch(setPosts(posts)));
};

export const newPost = (title, body) => (dispatch) => {
  addPost(title, body).then((data) => {
    dispatch(setNewPostResponse(data));
  });
};

export const updateOldPost = (title, body, id) => (dispatch) => {
  updatePost(title, body, id)
    .then((res) => {
      if (res && res.id) {
        dispatch(setUpdateOldPostResponse(true));
        return;
      }
    })
    .catch((err) => console.log(err));
};

export default postReducer.reducer;
