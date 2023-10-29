import React from "react";
import styles from "./MessageDisplay.module.css";

const MessageDisplay = ({ messages }) => {
  return (
    <div className={styles.messageDisplay}>
      {messages.map((msg, index) => (
        <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageDisplay;