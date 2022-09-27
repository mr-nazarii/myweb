import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const TitleSection = () => {
  const titles = [
    "Full-Stack Developer",
    "Front-End Developer",
    "UX/UI Designer",
    "Entrepreneur",
  ];

  const [title, setTitle] = useState(titles[0]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTitle(titles);
  //   }, 2000);
  // }, []);

  const animationVariant = {
    initial: {
      x: -1000,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
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

        <div className={styles.sphere} />
      </div>
    </AnimatePresence>
  );
};
