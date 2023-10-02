import { io } from "socket.io-client";
import { configValues } from "./utils/config";

const { BACKEND_URL } = configValues;
export const socket = io(BACKEND_URL);
