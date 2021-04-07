import React from "react";
import Button from "../button/Button";
import styles from "./Card_Edit.module.css";

const Card_Edit = ({ FileInput, cards, updateCard, deleteCard }) => {
  const { name, breed, host, email, theme, message, fileName, fileURL } = cards;

  const onFileChange = (fileData) => {
    updateCard({
      ...cards,
      fileName: fileData.name,
      fileURL: fileData.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...cards,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(cards);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="breed"
        value={breed}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="Dark">Dark</option>
        <option value="White">White</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="host"
        value={host}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange}></FileInput>
      </div>
      <Button name="Delete" onClick={onSubmit}></Button>
    </form>
  );
};

export default Card_Edit;
