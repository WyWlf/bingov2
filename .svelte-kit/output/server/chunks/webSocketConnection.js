import ioClient from "socket.io-client";
const ENDPOINT = {}.VITE_UNSECURE_SECRET;
const socket = ioClient(ENDPOINT);
const io = socket;
export {
  io as i
};
