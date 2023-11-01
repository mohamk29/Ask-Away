import React, { useRef, useEffect } from "react";
import styles from "./MessageDisplay.module.css";
import TypingIndicator from "./TypingIndicator";

const MessageDisplay = ({ messages, loading }) => {
  const messageBoxRef = useRef(null);

  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className={styles.messageDisplay} ref={messageBoxRef}>
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
    </div>
  );
};

export default MessageDisplay;
