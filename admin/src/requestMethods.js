import axios from "axios";

//const BASE_URL = "http://localhost:8000/api/";
const BASE_URL = process.env.REACT_APP_API_URL;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});