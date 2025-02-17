node server.js

const io = new Server(server, {
    cors: {
        origin: "http://www.zaxt.org",
        methods: ["GET", "POST"]
    }
});
