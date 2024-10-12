export function query(url: string, options?: RequestInit) {
  const STRAPI_API = process.env.STRAPI_API;
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

  return fetch(`${STRAPI_API}${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...options,
  }).then((res) => res.json());
}
