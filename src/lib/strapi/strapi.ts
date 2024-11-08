const STRAPI_API: string = process.env.STRAPI_API ?? "";
const STRAPI_HOST: string = process.env.STRAPI_HOST ?? "";
const STRAPI_PORT: string = process.env.STRAPI_PORT ?? "";

export function query(url: string, options?: RequestInit) {
  return fetch(`${STRAPI_API}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }).then((res) => res.json());
}

export function getStrapiUrl() {
  return `http://${STRAPI_HOST}:${STRAPI_PORT}`;
}
