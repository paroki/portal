const url = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
export const API_PATH = process.env.NEXT_PUBLIC_API_PATH ?? "/api";
export const API_URL = `${url}${API_PATH}`;
