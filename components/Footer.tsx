import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__title}>CONTACTS</h2>
      <div className={styles.linkWrapper}>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="github"
            layout="fill"
            objectFit="cover"
            src="/icons/github.svg"
          />
        </div>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="linkedin"
            layout="fill"
            objectFit="cover"
            src="/icons/linkedin.svg"
          />
        </div>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="facebook"
            layout="fill"
            objectFit="cover"
            src="/icons/facebook.svg"
          />
        </div>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="instagram"
            layout="fill"
            objectFit="cover"
            src="/icons/instagram.svg"
          />
        </div>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="email"
            layout="fill"
            objectFit="cover"
            src="/icons/email.svg"
          />
        </div>
        <div className={styles.linkWrapper__link}>
          <Image
            alt="phone"
            layout="fill"
            objectFit="cover"
            src="/icons/phone.svg"
          />
        </div>
      </div>
    </div>
  );
};
