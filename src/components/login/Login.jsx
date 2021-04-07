import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.target.textContent)
      .then((data) => goToMaker(data.user.uid));
  };
  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMaker(user.uid);
      });
  });
  return (
    <section>
      <Header></Header>
      <section className={styles.section}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <button className={styles.btn} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.li}>
            <button className={styles.btn} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
