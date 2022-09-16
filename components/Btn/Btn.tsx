import React from "react";
import { motion } from "framer-motion";
import { buttonVariantsBlack } from "./BtnVariants";
import { Shield } from "components/Shield/Shield";

export const Btn = (props: any) => {
  const bulbVariant = {
    closed: {
      background: "linear-gradient(90deg, #d92638 0%, #c76666 100%)",

      boxShadow: "rgba(255, 0, 0, 0.518) 0px 0px 25px",
    },
    open: {
      background: "linear-gradient(90deg, #3bd926 0%, #68c766 100%)",

      boxShadow: "rgba(0, 255, 26, 0.518) 0px 0px 25px",
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
          <Shield
            active={props.active}
            setActive={props.setActive}
            styles={props.styles}
          />
        </>
      )}
    </>
  );
};
