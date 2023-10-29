import React, { useState } from "react";
import styles from "./ChatBox.module.css";

const ChatBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className={styles.inputField}
      />
      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
  );
};

export default ChatBox;
