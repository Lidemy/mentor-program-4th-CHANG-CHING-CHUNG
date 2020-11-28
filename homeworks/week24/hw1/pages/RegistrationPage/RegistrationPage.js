import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerNewUser,
  setIsLoadingUser,
  setErrorMessage,
} from "../../redux/reducers/userReducer";

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 5rem;
`;

export default function RegistrationPage() {
  console.log(useContext(AuthContext));
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const userId = useSelector((store) => store.user.id);
  const errorMessage = useSelector((store) => store.user.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      history.push("/");
    }
    return () => {
      dispatch(setErrorMessage(null));
    };
  }, [userId, history, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setIsLoadingUser(true));
    dispatch(registerNewUser(nickname, username, password));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        nickname:{" "}
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
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
