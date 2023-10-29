import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import MessageDisplay from "./components/MessageDisplay";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (text) => {
    // Update state with user message
    const newUserMessage = { text, sender: "user" };
    setMessages((messages) => [...messages, newUserMessage]);

    // Placeholder for sending message to AI
    // This is where we will call the function to interact with the AI
    // We'll implement this next
  };

  return (
    <div className="App">
      <MessageDisplay messages={messages} />
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
