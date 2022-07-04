import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.scss";

export const About = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.section__title}>About Me</h3>
      <div className={styles.section__imageWrapper}>
        <Image
          alt="me"
          src={"/Me.JPG"}
          width={230}
          height={230}
          objectFit="cover"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <p className={styles.section__about}>
        I enjoy learning new cutting-edge technologies, fixing bugs, and
        creating leading business projects which I like to manage and optimize
        to the clients needs. Love socializing and meeting new people.
      </p>
    </div>
  );
};
