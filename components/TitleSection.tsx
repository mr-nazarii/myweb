import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
export const TitleSection = () => {
  // const titles = [
  //   "Full-Stack Developer",
  //   "Front-End Developer",
  //   "UX/UI Designer",
  //   "Entrepreneur",
  // ];

  const [isClient, setIsClient] = useState(false); // Initializing state

  useEffect(() => {
    setIsClient(true); // Change state on client side
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className={styles.section}
        style={{
          background: "black",
        }}
      >
        <div>
          {isClient && ( // Only render Spline on client side
            <Spline
              className={styles.logo2}
              scene="https://prod.spline.design/sBdg08G15NthM4nq/scene.splinecode"
            />
          )}
        </div>

        {/* <div className={styles.logo}>
          <Image
            alt="logo"
            src={"/logo.png"}
            objectFit="contain"
            style={{ zIndex: 1 }}
            layout="fill"
          />
        </div> */}
      </div>
    </AnimatePresence>
  );
};
