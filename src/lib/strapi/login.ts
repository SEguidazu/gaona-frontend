import { Login } from "./types";
import { query } from "./strapi";

const STRAPI_TOKEN: string = process.env.STRAPI_TOKEN ?? "";

export function login(data: Login) {
  return query("/auth/local", {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
}
