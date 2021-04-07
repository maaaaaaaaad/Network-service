import React from "react";
import Card from "../card/Card";
import styles from "./Preview.module.css";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.ul}>
      {Object.keys(cards).map((key) => (
        <Card key={key} cards={cards[key]}></Card>
      ))}
    </ul>
  </section>
);

export default Preview;
