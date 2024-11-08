import { query } from "./strapi";

const STRAPI_TOKEN: string = process.env.STRAPI_TOKEN ?? "";

export function getMainMenu() {
  return query("/main-menu?populate[0]=MainMenu&populate[1]=logo", {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    method: "GET",
  });
}
