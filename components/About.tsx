import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.scss";

export const About = () => {
  return (
    <div className={styles.section} id="aboutMe">
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
        Enthusiastic Full-Stack Developer graduate keen on learning new
        cutting-edge technologies, fixing bugs, and creating great business
        projects which after easily managed and optimized to the clients needs.
      </p>
    </div>
  );
};
