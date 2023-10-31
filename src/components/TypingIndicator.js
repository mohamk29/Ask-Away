import styles from "./TypingIndicator.module.css";

const TypingIndicator = () => {
  return (
    <div className={styles.typingBubble}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default TypingIndicator;
