import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";

import "./core/db";
import createRoutes from "./core/routes";
import { MessageModel } from "./models";

const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "*",
  },
});
dotenv.config();

// TODO: Pass IO for valid sockets functioning after server has been started
createRoutes(app);

io.on("connection", (socket: Socket) => {
  console.log("Connected!");

  socket.emit("111", "ASDASDASD");
});

http.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
