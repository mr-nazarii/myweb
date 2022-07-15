import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Shield = (props: any) => {
  const shieldVariant = {
    closed: {
      x: -2000,
    },
    open: {
      x: 0,
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
        </div>
        <div className={props.styles.shield__glass}></div>
      </motion.div>
    </>
  );
};
