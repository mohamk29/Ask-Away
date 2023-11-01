import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition <= 0) {
        setShowHeader(true);
      } else if (currentScrollPosition < lastScrollPosition) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <header className={`${styles.header} ${showHeader ? "" : styles.hide}`}>
      <span className={styles.ask}>Ask</span>
      <span className={styles.away}>Away</span>
    </header>
  );
};

export default Header;
