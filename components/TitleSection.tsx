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

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className={styles.section}
        style={{
          backgroundImage: "url('./frame.png')",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.logo}>
          <Image
            alt="logo"
            src={"/logo.png"}
            objectFit="contain"
            style={{ zIndex: 1 }}
            layout="fill"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};
