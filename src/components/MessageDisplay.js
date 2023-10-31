import React, { useRef, useEffect } from "react";
import styles from "./MessageDisplay.module.css";
import TypingIndicator from "./TypingIndicator";

const MessageDisplay = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
