import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Application } from "@splinetool/runtime";
import Spline from "@splinetool/react-spline";

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
          background: "black",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Spline scene="https://prod.spline.design/sBdg08G15NthM4nq/scene.splinecode" />
      </div>
    </AnimatePresence>
  );
};
{
  /* <div className={styles.logo}>
<Image
  alt="logo"
  src={"/logo.png"}
  objectFit="contain"
  style={{ zIndex: 1 }}
  layout="fill"
/>

</div> */
}
