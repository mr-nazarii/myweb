import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className="navMenu__button">
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="23" fill="white" strokeWidth="3" />
      <Path
        variants={{
          closed: { d: "M 10 17 L 40 17" },
          open: { d: "M 12 33 L 38 17" },
        }}
      />
      <Path
        d="M 10 25 L 40 25"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 10 33 L 40 33" },
          open: { d: "M 12 17 L 38 33" },
        }}
      />
    </svg>
  </button>
);
