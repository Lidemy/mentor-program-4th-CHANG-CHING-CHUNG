import { getAuthToken } from "./utils";
const BASE_URL = "https://student-json-api.lidemy.me";
export const LINK_URL =
  "https://student-json-api.lidemy.me/posts?_page=1&_limit=5&_sort=createdAt&_order=desc";

export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then((res) =>
    res.json()
  );
};

export const getPostsByLimit = async (URL) => {
  const res = await fetch(URL);
  const { headers } = res;
  const posts = await res.json();

  let links = headers
    .get("link")
    .replace(/\</gi, "")
    .replace(/\>/gi, "")
    .split(",");

  links = links.map((link) => {
    const newLink = link.replace(/http/, "https").replace(/ /, "").split(";");
    return newLink;
  });

  return {
    links,
    posts,
  };
};

export const getTotalCountOfPosts = () => {
  return fetch(
    `${BASE_URL}/posts?_page=1&_limit=5&_sort=createdAt&_order=desc`
  ).then((res) => res.headers.get("x-total-count"));
};

export const getPost = (id) => {
  return fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const addPost = (title, body) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

export const registerUser = (nickname, username, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};
