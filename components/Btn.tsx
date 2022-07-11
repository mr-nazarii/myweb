import React, { useState } from "react";
import { motion } from "framer-motion";

export const Btn = (props: any) => {
  const [color, setColor] = useState(false);
  const buttonVariantsWhite = {
    hover: {
      backgroundColor: "#d2b56a",
      color: "#ffe8af",
      borderBottom: "6px #6e6e6e solid",
      borderLeft: "4px #c9c9c9 solid",
      boxShadow: "inset 5px -5px 20px -6px #ffffff0",
    },

    click: {
      boxShadow: "inset 5px -5px 20px -6px #00000087",
      borderBottom: "0px #6e6e6e solid",
      borderLeft: "0px #c9c9c9 solid",
      backgroundColor: "#8e8264",
      color: "#453f2b",
      borderTop: "4px #2f2f2f solid",
      borderRight: "8px #5a5a5a solid",
      paddingLeft: "5px",
    },
  };

  const buttonVariantsBlack = {
    hover: {
      backgroundColor: "#350000",
      color: "#ffe092",
      borderBottom: "6px #6e6e6e solid",
      borderLeft: "4px #c9c9c9 solid",
      boxShadow: "inset 5px -5px 20px -6px #ffffff0",
    },

    click: {
      boxShadow: "inset 5px -5px 20px -6px #00000087",
      borderBottom: "0px #6e6e6e solid",
      borderLeft: "0px #c9c9c9 solid",
      backgroundColor: "#281d00",
      color: "#604b00",
      borderTop: "4px #563f1a solid",
      borderRight: "8px #825f27 solid",
      paddingLeft: "5px",
    },
  };
  return (
    <>
      {props.color === "link" ? (
        <motion.h3
          variants={buttonVariantsBlack}
          whileHover={"hover"}
          whileTap={"click"}
          className={props.styles.linkWrapper__link}
        >
          {props.children}
        </motion.h3>
      ) : props.color ? (
        <motion.h3
          variants={buttonVariantsWhite}
          whileHover={"hover"}
          whileTap={"click"}
          className={props.styles.section__title}
        >
          {props.children}
        </motion.h3>
      ) : (
        <motion.h3
          variants={buttonVariantsBlack}
          whileHover={"hover"}
          whileTap={"click"}
          className={props.styles.section__title}
        >
          {props.children}
        </motion.h3>
      )}
    </>
  );
};
