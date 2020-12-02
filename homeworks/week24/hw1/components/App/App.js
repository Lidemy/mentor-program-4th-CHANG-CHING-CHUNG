import React, { useEffect } from "react";
import styled from "styled-components";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import Header from "../Header/";
import SinglePostPage from "../../pages/SinglePostPage";
import {
  getUserInfo,
  setIsLoadingUser,
} from "../../redux/reducers/userReducer";
import { getAuthToken } from "../../utils";
import { useDispatch } from "react-redux";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AddPostPage from "../../pages/AddPostPage/AddPostPage";
import AboutPage from "../../pages/AboutPage";
import PostListPage from "../../pages/PostListPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import EditPostPage from "../../pages/EditPostPage";

const Root = styled.div`
  padding-top: 64px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getAuthToken()) {
      dispatch(getUserInfo());
    } else {
      dispatch(setIsLoadingUser(false));
    }
  }, [dispatch]);
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegistrationPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/postsList">
            <PostListPage />
          </Route>
          <Route path="/new-post">
            <AddPostPage />
          </Route>
          <Route path="/posts/:id/edit" children={<EditPostPage />} />
          <Route path="/posts/:id" children={<SinglePostPage />} />
        </Switch>
      </Router>
    </Root>
  );
}

export default App;
