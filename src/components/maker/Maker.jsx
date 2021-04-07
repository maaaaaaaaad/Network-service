import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/Editor";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Preview from "../preview/Preview";
import styles from "./Maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Dolce",
      breed: "Maltese",
      host: "DONG WOONG OH",
      email: "integral5137@gmail.com",
      theme: "Dark",
      message: "Hello",
      fileName: "",
      fileURL: "",
    },
    2: {
      id: "2",
      name: "Louis",
      breed: "Poodle",
      host: "DONG WOONG OH",
      email: "integral5137@gmail.com",
      theme: "White",
      message: "Hello",
      fileName: "",
      fileURL: "",
    },
    3: {
      id: "3",
      name: "Happy",
      breed: "Labrador Retriever",
      host: "DONG WOONG OH",
      email: "integral5137@gmail.com",
      theme: "Colorful",
      message: "Hello",
      fileName: "",
      fileURL: "",
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <div className={styles.header}>
        <Header onLogout={onLogout}></Header>
      </div>
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        ></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Maker;
