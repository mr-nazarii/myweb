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
          Enthusiastic Full-Stack Developer graduate keen on learning new
          cutting-edge technologies, fixing bugs, and creating great business
          projects which after easily managed and optimized to the clients
          needs.
        </motion.p>
      </div>
    </AnimatePresence>
  );
};
