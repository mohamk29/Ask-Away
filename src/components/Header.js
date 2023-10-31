import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.ask}>Chat</span>
      <span className={styles.away}>AI</span>
    </header>
  );
};

export default Header;
