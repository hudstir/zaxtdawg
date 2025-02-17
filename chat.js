node server.js

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

let sharedText = "";

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.emit("textUpdate", sharedText);

    socket.on("textUpdate", (data) => {
        sharedText = data;
        socket.broadcast.emit("textUpdate", data);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on http://www.zaxt.org/chat");
});
