import React from "react";
import Card_Add from "../Card_Add/Card_Add";
import Card_Edit from "../card_edit_form/Card_Edit";
import styles from "./Editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <Card_Edit
        key={key}
        FileInput={FileInput}
        cards={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      ></Card_Edit>
    ))}
    <Card_Add FileInput={FileInput} onAdd={addCard}></Card_Add>
  </section>
);

export default Editor;
