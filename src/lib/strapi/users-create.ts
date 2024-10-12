import { CreateUser } from "./types";
import { query } from "./strapi";

export function createUser(data: CreateUser) {
  return query("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
