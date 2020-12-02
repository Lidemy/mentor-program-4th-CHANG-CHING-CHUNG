import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  loginUser,
  getUserInfo,
  setErrorMessage,
} from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 5rem;
`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoadingUser = useSelector((store) => store.user.isLoadingUser);
  const userId = useSelector((store) => store.user.id);
  const errorMessage = useSelector((store) => store.user.errorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  useEffect(() => {
    if (isLoadingUser) {
      dispatch(getUserInfo());
      return;
    }
    if (userId) {
      history.push("/");
    }

    return () => {
      dispatch(setErrorMessage(null));
    };
  }, [isLoadingUser, dispatch, history, userId]);
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        username:{" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        password:{" "}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button>登入</button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
}
