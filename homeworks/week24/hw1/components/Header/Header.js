import React from "react";
import styled from "styled-components";
import { setAuthToken } from "../../utils";
import { useHistory, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userReducer";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  box-sizing: border-box;
  background-color: #fff;
`;

const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  ${(props) =>
    props.$active &&
    `
    background: rgba(0,0,0,0.1);
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`;

export default function Header() {
  const location = useLocation();
  const userId = useSelector((store) => store.user.id);
  const isLoadingUser = useSelector((store) => store.user.isLoadingUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    setAuthToken("");
    dispatch(
      setUser({
        id: null,
        nickname: null,
        password: null,
        username: null,
      })
    );
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>部落格</Brand>
        <NavbarList>
          <Nav to="/" $active={location.pathname === "/"}>
            首頁
          </Nav>
          <Nav to="/about" $active={location.pathname === "/about"}>
            關於部落格
          </Nav>
          <Nav to="/postsList" $active={location.pathname === "/postsList"}>
            文章列表
          </Nav>
          {userId && (
            <Nav $active={location.pathname === "/new-post"} to="/new-post">
              發布文章
            </Nav>
          )}
        </NavbarList>
      </LeftContainer>
      {isLoadingUser ? null : (
        <NavbarList>
          {!userId && (
            <Nav $active={location.pathname === "/login"} to="/login">
              登入
            </Nav>
          )}
          {!userId && (
            <Nav $active={location.pathname === "/register"} to="/register">
              註冊
            </Nav>
          )}
          {userId && <Nav onClick={handleLogout}>登出</Nav>}
        </NavbarList>
      )}
    </HeaderContainer>
  );
}
