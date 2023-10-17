import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const nav = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/#Works" },
  { name: "Services", path: "/Services" },
  { name: "About", path: "/#About" },
  { name: "Contacts", path: "/#Contacts" },
];

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants} className="navMenu__ul">
    {nav.map((i) => (
      <MenuItem i={i} toggle={toggle} />
    ))}
  </motion.ul>
);