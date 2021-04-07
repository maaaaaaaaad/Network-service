import React from "react";
import styles from "./Card.module.css";

const BASIC = "/images/puppy_01.png";
const Card = ({ cards }) => {
  const { name, breed, host, email, theme, message, fileName, fileURL } = cards;
  const url = fileURL || BASIC;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile photo" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.breed}>{breed}</p>
        <p className={styles.host}>{host}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "Dark":
      return styles.Dark;
    case "White":
      return styles.White;
    case "Colorful":
      return styles.Colorful;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default Card;
