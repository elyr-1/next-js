import axios from "axios";

export const baseURL = "http://localhost:9001/api";

const http = axios.create({
  baseURL: baseURL,
});

http.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.statusCodeValue >= 400 &&
    error.response.statusCodeValue < 500;

  if (!expectedError) {
    console.error(error);
    alert("An unexpected error occurred");
  }
  return Promise.reject(error);
});

export default http;
