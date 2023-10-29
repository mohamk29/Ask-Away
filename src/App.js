import React, { useState } from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import MessageDisplay from "./components/MessageDisplay";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (text) => {
    setLoading(true); // Set loading to true at the beginning

    // Update state with user message
    const newUserMessage = { text, sender: "user" };
    setMessages((messages) => [...messages, newUserMessage]);

    // Send the message to the backend
    try {
      const response = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Update state with AI's message
      const aiMessage = { text: data.message, sender: "ai" };
      setMessages((messages) => [...messages, aiMessage]);

      setLoading(false); // Set loading to false at the end
    } catch (error) {
      console.error("There was an error:", error);
      const errorMessage = {
        text: "Error communicating with server",
        sender: "system",
      };
      setMessages((messages) => [...messages, errorMessage]);
    }
  };

  return (
    <div className="App">
      <Header />
      <MessageDisplay messages={messages} />
      {loading && <p>Typing...</p>}
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
