import React, { useRef, useEffect } from "react";
import styles from "./MessageDisplay.module.css";

const MessageDisplay = ({ messages }) => {
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
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default MessageDisplay;
