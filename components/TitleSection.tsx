import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
import Spline from "@splinetool/react-spline";
import { Carrousel } from "./Carrousel";
import { ScrollMore } from "./ScrollMore";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import { useInView } from "react-intersection-observer";

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
      <div className={"section"}>
        <div className={"section__wrapper"}>
          <Canvas
            camera={{ position: [0, 0, 10.0] }}
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "visible",
              width: "100vw",
              height: "100vh",
            }}
          >
            <Blob />
          </Canvas>
          <div className={"section__innerWrapper"}>
            <div className="title-wrap-block">
              <div className={"titleSection"}>
                <div className={"preview"}>
                  <motion.div
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 1, y: 400 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h1 className={"titleSection__title2"}>I&#39;m Nazarii</h1>
                  </motion.div>
                </div>
                <div className={"titleSection__title3"}>
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
              </div>{" "}
            </div>

            <Carrousel data={data1} left={true} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
