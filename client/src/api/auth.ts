import { configValues } from "../utils/config";

const { BACKEND_URL } = configValues;

export const logIn = (username: string) => {
  const { CLIENT_URL: clientUrl } = process.env
  return fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": clientUrl!,
    },
    body: JSON.stringify({
      username,
    }),
  }).then((response) => response.json());
};
