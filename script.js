// app.js
const socket = new WebSocket("ws://localhost:3000");

socket.addEventListener("open", (event) => {
  console.log("WebSocket connection opened:", event);
});

socket.addEventListener("message", (event) => {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML += `<p>${event.data}</p>`;
});

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;

  if (message) {
    socket.send(message);
    messageInput.value = "";
  }
}
