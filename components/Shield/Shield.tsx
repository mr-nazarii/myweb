import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { buttonVariantsExit } from "components/Btn/BtnVariants";

export const Shield = (props: any) => {
  const shieldVariant = {
    closed: {
      x: -2000,
      opacity: [1, 1, 1, 1, 0],
    },
    open: {
      x: 0,
      opacity: [0, 1, 1, 1, 1],
    },
  };

  const activeVariant = {
    closed: {
      color: "#c34278",
      background: "linear-gradient(90deg, #96184c 0%, #c3105b 100%)",
      transition: {
        delay: 0.5,
      },
    },
    open: {
      color: "#ffffff",
      background: "linear-gradient(90deg, #cc296d 0%, #c3105b 100%)",
      boxShadow: "#cc296d 0px 0px 25px",
      transition: {
        delay: 1.8,
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
