import { Server, Socket } from "socket.io";
import http from "http";

export default (http: http.Server) => {
  const io = new Server(http, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: Socket) => {});

  return io;
};
