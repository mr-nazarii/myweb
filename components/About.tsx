import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn/Btn";
import { AnimatePresence, motion } from "framer-motion";

export const About = () => {
  const [active, setActive] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.section} id="aboutMe">
        <Btn active={active} setActive={setActive} styles={styles}>
          About Me
        </Btn>
        <div className={styles.imageWrapper}>
          <Image alt="me" src={"/Me.png"} objectFit="cover" layout="fill" />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className={styles.about}
        >
          As a passionate{" "}
          <span className={styles.position}>Front-End Developer</span> &
          <span className={styles.position}>
            {" "}
            Google Certified UX/UI designer
          </span>{" "}
          I am eager to bring your business vision to fruition. I have a love
          for learning and working with the latest technologies, troubleshooting
          challenges, and most importantly, crafting exceptional web projects.
          Let{"'"}s create something amazing together!
        </motion.p>
      </div>
    </AnimatePresence>
  );
};
