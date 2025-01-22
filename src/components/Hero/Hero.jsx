import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kasthuri Krishna L M</h1>
        <p className={styles.description}>
          I'm a Java full-stack developer and a budding cybersecurity enthusiast pursuing my bachelors in Computer Science Engineering (Cybersecurity). Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
          <a href="mailto:lmkkrishna110@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/Kasthuri_Krishna_SLB_new.pdf"
            download
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
      </div>
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
