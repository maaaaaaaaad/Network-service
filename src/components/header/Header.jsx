import React from "react";
import styles from "./Header.module.css";

const DOLCE = "/images/puppy_01.png";
const Header = ({ onLogout }) => (
  <>
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.dolce_02} src={DOLCE} alt="dolce" />
      <h1 className={styles.title}>Pet Card Maker</h1>
    </header>
  </>
);

export default Header;
