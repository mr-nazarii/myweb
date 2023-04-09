import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn/Btn";
import { AnimatePresence, motion } from "framer-motion";
import SpinningParagraph from "./SpinningParagraph";

export const About = () => {
  const [active, setActive] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className={styles.section}
        style={{
          backgroundImage: "url('./frame2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="aboutMe"
      >
        <SpinningParagraph />

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
          As a passionate As an enthusiastic{" "}
          <span className={styles.position}>Front-End Developer</span> &
          <span className={styles.position}> UX/UI designer</span> , Im ready to
          help make your business ideas come true. I enjoy learning new
          technologies, solving problems, and creating great web projects. Lets
          work together and build something amazing!
        </motion.p>
      </div>
    </AnimatePresence>
  );
};
