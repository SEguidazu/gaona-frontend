import { CreateUser } from "./types";
import { query } from "./strapi";

const STRAPI_TOKEN: string = process.env.STRAPI_TOKEN ?? "";

export function createUser(data: CreateUser) {
  return query("/users", {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
}
