import { configValues } from "../utils/config";

const { BACKEND_URL } = configValues;

export const getAllMessages = () => {
  return fetch(`${BACKEND_URL}/room/messages`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
