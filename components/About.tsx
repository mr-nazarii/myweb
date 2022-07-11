import Image from "next/image";
import React from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn";

export const About = () => {
  return (
    <div className={styles.section} id="aboutMe">
      <Btn color={true} styles={styles}>
        About Me
      </Btn>
      <div className={styles.imageWrapper}>
        <Image
          alt="me"
          src={"/Me.png"}
          width={230}
          height={330}
          objectFit="cover"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <p className={styles.about}>
        Enthusiastic Full-Stack Developer graduate keen on learning new
        cutting-edge technologies, fixing bugs, and creating great business
        projects which after easily managed and optimized to the clients needs.
      </p>
    </div>
  );
};
