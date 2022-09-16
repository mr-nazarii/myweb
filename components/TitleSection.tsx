import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";

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
        <motion.div
          variants={animationVariant}
          initial={"initial"}
          animate={"animate"}
        >
          <h1 className={styles.title}>Nazarii</h1>
          <h1 className={styles.title}>Kubik</h1>
          <h3 className={styles.subtitle}>{title}</h3>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
