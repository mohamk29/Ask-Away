import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.ask}>Ask</span>
      <span className={styles.away}>Away</span>
    </header>
  );
};

export default Header;
