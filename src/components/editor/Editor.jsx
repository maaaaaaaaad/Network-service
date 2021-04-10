import React from "react";
import CardAdd from "../Card_Add/Card_Add";
import CardEdit from "../card_edit_form/Card_Edit";
import styles from "./Editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <CardEdit
        key={key}
        FileInput={FileInput}
        cards={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      ></CardEdit>
    ))}
    <CardAdd FileInput={FileInput} onAdd={addCard}></CardAdd>
  </section>
);

export default Editor;
