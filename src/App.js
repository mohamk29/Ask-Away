import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import MessageDisplay from "./components/MessageDisplay";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
    // We'll later add code here to send the message to the AI and receive a response
  };

  return (
    <div className="App">
      <MessageDisplay messages={messages} />
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
