import React from "react";
import { motion } from "framer-motion";
import { buttonVariantsBlack } from "./BtnVariants";

export const Btn = (props: any) => {
  const bulbVariant = {
    closed: {
      background: "linear-gradient(90deg, #0B2E3C 0%, #08232E 100%)",
    },
    open: {
      background: "linear-gradient(90deg, #71C5E6 0%, #2087AF 100%)",

      boxShadow: "#71C5E6 0px 0px 25px",
    },
  };

  return (
    <>
      {props.color === "link" ? (
        <motion.div
          variants={buttonVariantsBlack}
          whileHover={"hover"}
          whileTap={"click"}
          className={props.styles.linkWrapper__link}
        >
          {props.children}
        </motion.div>
      ) : (
        <>
          <div className={props.styles.section__titleWrapper}>
            <motion.h3
              variants={buttonVariantsBlack}
              whileHover={"hover"}
              whileTap={"click"}
              className={props.styles.section__title}
              onClick={() => props.setActive(!props.active)}
            >
              {props.children}
            </motion.h3>
            <motion.span
              className={props.styles.section__bulb}
              variants={bulbVariant}
              initial={"closed"}
              animate={props.active ? "open" : "closed"}
            />
          </div>
        </>
      )}
    </>
  );
};
