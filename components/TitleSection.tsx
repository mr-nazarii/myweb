import React from "react";
import styles from "../styles/Title.module.scss";

export const TitleSection = () => {
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.title}>Nazarii</h1>
        <h1 className={styles.title}>Kubik</h1>
        <h3 className={styles.subtitle}>Full-Stack Developer</h3>
      </div>
    </div>
  );
};
