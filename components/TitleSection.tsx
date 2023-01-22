import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const TitleSection = () => {
  // const titles = [
  //   "Full-Stack Developer",
  //   "Front-End Developer",
  //   "UX/UI Designer",
  //   "Entrepreneur",
  // ];

  const [gradient, setGradient] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGradient(false);
    }, 2000);
  }, [gradient]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.section}>
        <div className={styles.logo}>
          <div className={styles.sphere}/>
          <Image
            alt="logo"
            src={"/logo.svg"}
            objectFit="contain"
            style={{ zIndex: 1 }}
            layout="fill"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};
