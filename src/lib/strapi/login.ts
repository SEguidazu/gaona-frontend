import { Login } from "./types";
import { query } from "./strapi";

export function login(data: Login) {
  return query("/auth/local", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
}
