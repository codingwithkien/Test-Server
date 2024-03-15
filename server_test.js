const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server);
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

io.on("connection", (socket) => {
    console.log("A user connected");
  
    socket.on("message", (message) => {
      console.log("Message:", message);
      if (message === "0") {
        socket.emit("message", "Hello");
        digitalWrite(lightPin, LOW);
      } else if (message === "1") {
        socket.emit("message", "Kiên");
        digitalWrite(lightPin, HIGH);
      } else {
        // Handle other messages as needed
      }
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
  

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
