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
        <Image
          alt="me"
          src={"/logo.svg"}
          objectFit="cover"
          width="421"
          height="435"
          style={{ zIndex: 1 }}
        />
        <div className={styles.sphere1} />
        <div className={styles.spherewrapper} />
      </div>
    </AnimatePresence>
  );
};
