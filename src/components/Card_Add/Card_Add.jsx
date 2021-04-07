import React, { useRef, useState } from "react";
import Button from "../button/Button";
import styles from "./Card_Add.module.css";

const Card_Add = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const breedRef = useRef();
  const themeRef = useRef();
  const hostRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (fileData) => {
    setFile({
      fileName: fileData.name,
      fileURL: fileData.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      breed: breedRef.current.value || "",
      theme: themeRef.current.value,
      host: hostRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={breedRef}
        className={styles.input}
        type="text"
        name="breed"
        placeholder="Breed"
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="Theme"
      >
        <option placeholder="Dark">Dark</option>
        <option placeholder="White">White</option>
        <option placeholder="Colorful">Colorful</option>
      </select>
      <input
        ref={hostRef}
        className={styles.input}
        type="text"
        name="host"
        placeholder="Host"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange}></FileInput>
      </div>
      <Button name="Add" onClick={onSubmit}></Button>
    </form>
  );
};

export default Card_Add;
