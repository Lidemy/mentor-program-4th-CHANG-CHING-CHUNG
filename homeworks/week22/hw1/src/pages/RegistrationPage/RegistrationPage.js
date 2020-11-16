import React, { useState, useContext } from "react";
import styled from "styled-components";
import { registerUser, getMe } from "../../WebApi";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import { useHistory } from "react-router-dom";

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 5rem;
`;

export default function RegistrationPage() {
  const { setUser, setIsLoading } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(nickname, username, password).then((res) => {
      if (!res.ok) {
        setErrorMessage(res.message);
      }
      setAuthToken(res.token);
      getMe().then((res) => {
        if (res.ok) {
          setIsLoading(false);
          setUser(res.data);
          history.push("/");
        }
      });
    });
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
