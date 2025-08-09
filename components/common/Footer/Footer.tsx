import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <section className={styles.container}>
        <p className={styles.copyright}>
          <small>© {currentYear} Imago. All rights reserved.</small>
        </p>
        <p className={styles.rightContent}>
          <small>Made in Germany</small>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
