import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn/Btn";
import { AnimatePresence, motion } from "framer-motion";
import SpinningParagraph from "./SpinningParagraph";

export const About = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="section-about" id="About">
      <p className="section-about__about">
        UX/UI Designer meets passionate Front-End Developer. Elevating your
        business visions with captivating web narratives. With an unyielding
        thirst for knowledge and a knack for problem-solving, I&apos;m dedicated
        to sculpting digital masterpieces. Ready to co-create the extraordinary?
        Let&apos;s get started!
      </p>
    </div>
  );
};
