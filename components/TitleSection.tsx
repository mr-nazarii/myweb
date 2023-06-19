import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import ReactRotatingText from "react-rotating-text";

export const TitleSection = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.section}>
        <div className={styles.section__wrapper}>
          <div className={styles.titleSection}>
            <div className={styles.titleSection__title1}>
              <h1>Welcome!</h1>
              <div className={styles.handstyle}>
                <Image
                  alt="graph1"
                  src={"/graphs/hand.png"}
                  objectFit="contain"
                  style={{ zIndex: 1 }}
                  layout="fill"
                />
              </div>
            </div>
            <h1 className={styles.titleSection__title2}>I&#39;m Nazarii</h1>
            <div className={styles.titleSection__title3}>
              <h1>a</h1>
              <h1>
                <ReactRotatingText
                  items={[
                    "UX/UI Designer",
                    "Front-End Developer",
                    "Entrepreneur",
                  ]}
                />
              </h1>
            </div>
          </div>
          <video className={styles.section__video} autoPlay loop muted>
            <source src="/me.mp4" />
          </video>
          <div className={styles.graph1}>
            <Image
              alt="graph1"
              src={"/graphs/1.png"}
              objectFit="contain"
              style={{ zIndex: 1 }}
              layout="fill"
            />
          </div>
          <div className={styles.graph2}>
            <Image
              alt="graph1"
              src={"/graphs/2.png"}
              objectFit="contain"
              style={{ zIndex: 1 }}
              layout="fill"
            />
          </div>
          <div className={styles.graph3}>
            <Image
              alt="graph1"
              src={"/graphs/3.png"}
              objectFit="contain"
              style={{ zIndex: 1 }}
              layout="fill"
            />
          </div>
          <div className={styles.graph4}>
            <Image
              alt="graph1"
              src={"/graphs/4.png"}
              objectFit="contain"
              style={{ zIndex: 1 }}
              layout="fill"
            />
          </div>

          <div className={styles.graph5}>
            <Image
              alt="graph1"
              src={"/graphs/5.png"}
              objectFit="contain"
              style={{ zIndex: 1 }}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
