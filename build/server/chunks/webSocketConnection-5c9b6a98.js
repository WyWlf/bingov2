import ioClient from 'socket.io-client';

const ENDPOINT = {}.VITE_UNSECURE_SECRET;
const socket = ioClient(ENDPOINT);
const io = socket;

export { io as i };
//# sourceMappingURL=webSocketConnection-5c9b6a98.js.map
