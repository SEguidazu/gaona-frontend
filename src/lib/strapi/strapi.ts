const STRAPI_API: string = process.env.STRAPI_API ?? "";

export function query(url: string, options?: RequestInit) {
  return fetch(`${STRAPI_API}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }).then((res) => res.json());
}
