import axios from "axios";

export function useApi() {
  const api = axios.create({ baseURL: "http://localhost:3000" });

  const setToken = (token) => window.localStorage.setItem("accessToken", token);

  const getToken = () => window.localStorage.getItem("accessToken");

  const removeToken = () => window.localStorage.removeItem("accessToken");

  return { api, setToken, getToken, removeToken };
}
