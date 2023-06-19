import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Footer.module.scss";
import { Btn } from "./Btn/Btn";

export const Footer = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.section} id="contacts">
      <div className={styles.linkWrapper}>
        <Btn color="link" styles={styles}>
          <a href="https://github.com/mr-nazarii">
            <Image
              alt="github"
              width={40}
              height={40}
              src="/icons/github.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.linkedin.com/in/nazarii-kubik">
            <Image
              alt="linkedin"
              width={40}
              height={40}
              src="/icons/linkedin.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.facebook.com/profile.php?id=100005049318856">
            <Image
              alt="facebook"
              width={40}
              height={40}
              src="/icons/facebook.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="https://www.instagram.com/_mr.nazarii_/">
            <Image
              alt="instagram"
              width={40}
              height={40}
              src="/icons/instagram.svg"
            />
          </a>
        </Btn>
        <Btn color="link" styles={styles}>
          <a href="mailto: nazariikubik@gmail.com">
            <Image alt="email" width={40} height={40} src="/icons/email.svg" />
          </a>
        </Btn>
      </div>
    </div>
  );
};
