import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Experience.module.scss";
import { motion } from "framer-motion";
import { ExperienceItem } from "./ExpeianceItem";
import { getExperianceData } from "experianceData";
import animation from "./animation.json";
import Lottie from "react-lottie";
import Spline from "@splinetool/react-spline";

export const Experience = () => {
  // const data = getExperianceData();

  return (
    <div className={styles.section} id="Experience">
      <Spline scene="https://prod.spline.design/tYIc2xXwcRcabmNT/scene.splinecode" />
    </div>
  );
};
