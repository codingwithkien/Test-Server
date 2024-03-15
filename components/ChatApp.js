import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import io from "socket.io-client";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(
      "https://southamerica-west1-smartserver-417316.cloudfunctions.net/Server"
    );

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    newSocket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      socket.emit("message", inputText);
      setInputText("");
    }
  };

  return (
    <SafeAreaView>
      <Text>Chat Messages:</Text>
      {messages.map((message, index) => (
        <Text key={index}>{message}</Text>
      ))}
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 10,
        }}
        onChangeText={setInputText}
        value={inputText}
      />
      <TouchableOpacity
        style={{ color: "#000" }}
        title="Send"
        onPress={sendMessage}
      >
        <Text style={{ color: "#000" }}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatApp;
