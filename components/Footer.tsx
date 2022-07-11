import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";
import { Btn } from "./Btn";

export const Footer = () => {
  return (
    <div className={styles.section} id="contacts">
      <Btn colore={true} styles={styles}>
        CONTACTS
      </Btn>
      <div className={styles.linkWrapper}>
        <Btn color="link" styles={styles}>
          <a href="https://github.com/mr-nazarii">
            <Image
              alt="github"
              layout="fill"
              objectFit="cover"
              src="/icons/github.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.linkedin.com/in/nazarii-kubik">
            <Image
              alt="linkedin"
              layout="fill"
              objectFit="cover"
              src="/icons/linkedin.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.facebook.com/profile.php?id=100005049318856">
            <Image
              alt="facebook"
              layout="fill"
              objectFit="cover"
              src="/icons/facebook.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.instagram.com/_mr.nazarii_/">
            <Image
              alt="instagram"
              layout="fill"
              objectFit="cover"
              src="/icons/instagram.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="mailto: nazariikubik@gmail.com">
            <Image
              alt="email"
              layout="fill"
              objectFit="cover"
              src="/icons/email.svg"
            />
          </a>
        </Btn>

        <Btn color="link" styles={styles}>
          <a href="tel:+380639669833">
            <Image
              alt="phone"
              layout="fill"
              objectFit="cover"
              src="/icons/phone.svg"
            />
          </a>
        </Btn>
      </div>
    </div>
  );
};
