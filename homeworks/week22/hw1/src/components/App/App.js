import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import Header from "../Header/";
import SinglePostPage from "../../pages/SinglePostPage";
import { AuthContext } from "../../contexts";
import { getMe } from "../../WebApi";
import { getAuthToken } from "../../utils";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AddPostPage from "../../pages/AddPostPage/AddPostPage";
import AboutPage from "../../pages/AboutPage";
import PostListPage from "../../pages/PostListPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";

const Root = styled.div`
  padding-top: 64px;
`;

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (getAuthToken()) {
      getMe().then((res) => {
        if (res.ok) {
          setIsLoading(false);
          setUser(res.data);
        }
      });
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
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
            <Route path="/posts/:id" children={<SinglePostPage />} />
          </Switch>
        </Router>
      </Root>
    </AuthContext.Provider>
  );
}

export default App;
