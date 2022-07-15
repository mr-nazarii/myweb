import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  buttonVariantsBlack,
  buttonVariantsExit,
} from "components/Btn/BtnVariants";

export const Shield = (props: any) => {
  const shieldVariant = {
    closed: {
      x: -2000,
    },
    open: {
      x: 0,
    },
  };

  const activeVariant = {
    closed: {
      color: "#961a27",
      background: "linear-gradient(90deg, #d92638 0%, #c76666 100%)",
      transition: {
        delay: 1.5,
      },
    },
    open: {
      color: "#1a962f",
      background: "linear-gradient(90deg, #3bd926 0%, #68c766 100%)",

      transition: {
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={shieldVariant}
        initial={"closed"}
        animate={props.active ? "open" : "closed"}
        transition={{ duration: 1.5 }}
        className={props.styles.shield}
      >
        <div className={props.styles.shield__top}>
          <div className={props.styles.shield__danger} />
          <p>Defence Line</p>
          <div className={props.styles.actionWrapper}>
            <motion.p
              variants={activeVariant}
              initial={"closed"}
              animate={props.active ? "open" : "closed"}
              className={props.styles.actionWrapper__activeLamp}
            >
              active
            </motion.p>

            <motion.div
              variants={buttonVariantsExit}
              whileHover={"hover"}
              whileTap={"click"}
              className={props.styles.link}
              onClick={() => props.setActive(!props.active)}
            >
              <Image alt="phone" width={20} height={20} src="/signOut.svg" />
            </motion.div>
          </div>
        </div>
        <div className={props.styles.shield__glass}></div>
      </motion.div>
    </>
  );
};
