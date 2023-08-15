import React, { useEffect, useState } from "react";
import styles from "../styles/Title.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
import Spline from "@splinetool/react-spline";
import { Carrousel } from "./Carrousel";
import { ScrollMore } from "./ScrollMore";

const data1 = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Express.Js",
  "MongoDB",
  "React.js",
  "Redux",
  "Redux-toolkit",
  "Redux-thunk",
  "React-Router",
  "Framer Motion",
  "Node.js",
  "BEM",
  "GraphQL",
  "Git",
  "Gulp",
  "Sass",
  "Bootstrap",
  "Php",
  "jQuery",
  "HTML/CSS",
  "JSON",
  "MUI",
  "Next.js",
  "Styled-components",
  "GIT",
  "GitHub",
  "Postman",
  "Visual Studio",
  "Docker",
  "Slack",
];

export const TitleSection = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.section}>
        <div className={styles.section__wrapper}>
          <div className={styles.section__innerWrapper}>
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
            <Spline
              className={styles.graphBg}
              scene="https://prod.spline.design/NUwCiaztj4vAOSMB/scene.splinecode"
            />
            <ScrollMore />
            <Carrousel data={data1} left={true} />
            <Carrousel data={data1} left={false} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
