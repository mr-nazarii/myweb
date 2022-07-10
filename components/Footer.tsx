import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>CONTACTS</h2>
      <div className={styles.linkWrapper}>
        <a
          href="https://github.com/mr-nazarii"
          className={styles.linkWrapper__link}
        >
          <Image
            alt="github"
            layout="fill"
            objectFit="cover"
            src="/icons/github.svg"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nazarii-kubik"
          className={styles.linkWrapper__link}
        >
          <Image
            alt="linkedin"
            layout="fill"
            objectFit="cover"
            src="/icons/linkedin.svg"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005049318856"
          className={styles.linkWrapper__link}
        >
          <Image
            alt="facebook"
            layout="fill"
            objectFit="cover"
            src="/icons/facebook.svg"
          />
        </a>
        <a
          href="https://www.instagram.com/_mr.nazarii_/"
          className={styles.linkWrapper__link}
        >
          <Image
            alt="instagram"
            layout="fill"
            objectFit="cover"
            src="/icons/instagram.svg"
          />
        </a>
        <a
          href="mailto: nazariikubik@gmail.com"
          className={styles.linkWrapper__link}
        >
          <Image
            alt="email"
            layout="fill"
            objectFit="cover"
            src="/icons/email.svg"
          />
        </a>
        <a href="tel:+380639669833" className={styles.linkWrapper__link}>
          <Image
            alt="phone"
            layout="fill"
            objectFit="cover"
            src="/icons/phone.svg"
          />
        </a>
      </div>
    </div>
  );
};
