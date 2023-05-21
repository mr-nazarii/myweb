import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
export const TitleSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className={styles.section}
        style={{
          background: "black",
          backgroundImage: "url(frame.png)",
          backgroundSize: "cover",
        }}
      >
        {/* <div>
          {isClient && (
            <Spline
              className={styles.logo2}
              scene="https://prod.spline.design/sBdg08G15NthM4nq/scene.splinecode"
            />
          )}
        </div> */}

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
