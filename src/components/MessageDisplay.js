import React, { useRef, useEffect } from "react";
import styles from "./MessageDisplay.module.css";
import TypingIndicator from "./TypingIndicator";

const MessageDisplay = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messageBox = messagesEndRef.current?.parentNode;
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.messageDisplay}>
      {messages.map((msg, index) => (
        <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
          {msg.text}
        </div>
      ))}
      {loading && (
        <div className={`${styles.message} ${styles.ai}`}>
          <TypingIndicator />
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageDisplay;
