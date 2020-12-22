import { createSlice } from "@reduxjs/toolkit";
import { login, getMe, registerUser } from "../../WebApi";
import { setAuthToken } from "../../utils";

export const userReducer = createSlice({
  name: "user",
  initialState: {
    id: null,
    nickname: null,
    password: null,
    username: null,
    isLoadingUser: true,
    errorMessage: null,
  },
  reducers: {
    setIsLoadingUser: (state, action) => {
      state.isLoadingUser = action.payload;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.nickname = action.payload.nickname;
      state.password = action.payload.password;
      state.username = action.payload.username;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setIsLoadingUser,
  setUser,
  setErrorMessage,
} = userReducer.actions;

export const loginUser = (username, password) => (dispatch) => {
  dispatch(setIsLoadingUser(true));
  login(username, password).then((res) => {
    if (res && res.ok === 1) {
      setAuthToken(res.token);
      return;
    }
    setAuthToken(null);
    dispatch(setErrorMessage(res.message));
  });
};

export const getUserInfo = () => (dispatch) => {
  setTimeout(() => {
    getMe().then((res) => {
      if (res && res.ok === 1) {
        dispatch(setUser(res.data));
        dispatch(setIsLoadingUser(false));
        return;
      }
      dispatch(setIsLoadingUser(false));
    });
  }, 500);
};

export const registerNewUser = (nickname, username, password) => (dispatch) => {
  registerUser(nickname, username, password).then((res) => {
    if (!res.ok) {
      dispatch(setErrorMessage(res.message));
    }
    setAuthToken(res.token);
    getMe().then((res) => {
      if (res.ok) {
        dispatch(setIsLoadingUser(false));
        dispatch(setUser(res.data));
        return;
      }
      dispatch(setIsLoadingUser(false));
    });
  });
};

export default userReducer.reducer;
