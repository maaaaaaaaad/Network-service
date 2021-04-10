import React, { memo } from "react";
import styles from "./Footer.module.css";

const Footer = memo((props) => (
  <>
    <footer className={styles.footer}>
      <p className={styles.title}>Dolce in Seoul</p>
    </footer>
  </>
));

export default Footer;
