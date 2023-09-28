import http from "./http";

export function login(form) {
  return http.post("/user/login", form);
}
