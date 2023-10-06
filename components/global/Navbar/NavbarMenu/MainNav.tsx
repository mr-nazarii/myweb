import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimentions";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      background: "white",
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",

    transition: {
      delay: 0.5,

      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MainNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebar}
      custom={height}
      ref={containerRef}
      className="navMenu"
    >
      <motion.div className="navMenu__background" variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
