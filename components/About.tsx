import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn/Btn";
import { AnimatePresence, motion } from "framer-motion";
import SpinningParagraph from "./SpinningParagraph";
import { useInView } from "react-intersection-observer";
import { StarBig } from "./StarBig";

export const About = () => {
  const [active, setActive] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="section-about" id="About">
        <div className="preview2">
          <motion.svg
            variants={{
              visible: {
                fill: "#AA52FF",
                stroke: "#AA52FF",
                rotate: "-20deg",
                y: -45,
                x: 55,
              },
              hidden: {
                fill: "#ffffff",
                stroke: "#ffffff",
                rotate: "-20deg",
                y: 20,
                x: 70,
              },
            }}
            viewport={{ once: true }}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.4 }}
            whileInView="visible"
            width="44"
            height="44"
            viewBox="0 0 324 324"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_48)">
              <path
                stroke-width="4"
                d="M161.693 -0.193756L163.282 7.50162C179.32 85.1659 240.476 145.574 318.331 160.654L323.551 161.665L318.331 162.676C240.476 177.756 179.32 238.164 163.282 315.829L161.693 323.524L160.788 318.778C145.694 239.594 83.7645 177.664 4.58094 162.57L-0.165771 161.665L4.5808 160.76C83.7645 145.666 145.694 83.7365 160.788 4.55282L161.693 -0.193756Z"
              />
            </g>
          </motion.svg>
          <motion.svg
            variants={{
              visible: { fill: "#AA52FF", stroke: "#AA52FF" },
              hidden: { fill: "#ffffff", stroke: "#c2c2c2" },
            }}
            viewport={{ once: true }}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView="visible"
            width="84"
            height="84"
            viewBox="0 0 324 324"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_48)">
              <path
                stroke-width="4"
                d="M161.693 -0.193756L163.282 7.50162C179.32 85.1659 240.476 145.574 318.331 160.654L323.551 161.665L318.331 162.676C240.476 177.756 179.32 238.164 163.282 315.829L161.693 323.524L160.788 318.778C145.694 239.594 83.7645 177.664 4.58094 162.57L-0.165771 161.665L4.5808 160.76C83.7645 145.666 145.694 83.7365 160.788 4.55282L161.693 -0.193756Z"
              />
            </g>
          </motion.svg>
          <motion.svg
            variants={{
              visible: {
                fill: "#AA52FF",
                stroke: "#AA52FF",
                rotate: "20deg",
                y: 50,
                x: -70,
              },
              hidden: {
                fill: "#ffffff",
                stroke: "#ffffff",
                rotate: "20deg",
                y: 110,
                x: -70,
              },
            }}
            viewport={{ once: true }}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.8 }}
            whileInView="visible"
            width="44"
            height="44"
            viewBox="0 0 324 324"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_48)">
              <path
                stroke-width="4"
                d="M161.693 -0.193756L163.282 7.50162C179.32 85.1659 240.476 145.574 318.331 160.654L323.551 161.665L318.331 162.676C240.476 177.756 179.32 238.164 163.282 315.829L161.693 323.524L160.788 318.778C145.694 239.594 83.7645 177.664 4.58094 162.57L-0.165771 161.665L4.5808 160.76C83.7645 145.666 145.694 83.7365 160.788 4.55282L161.693 -0.193756Z"
              />
            </g>
          </motion.svg>{" "}
        </div>

        <div className={"preview"}>
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 400 },
            }}
            initial="hidden"
            transition={{ duration: 0.5, delay: 0.5 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-about__about">
              I&apos;m a UX/UI Designer and Front-End Developer dedicated to
              transforming your business dreams into engaging web realities, one
              pixel and line of code at a time.
            </p>
          </motion.div>
        </div>
      </div>
      ;
    </AnimatePresence>
  );
};
