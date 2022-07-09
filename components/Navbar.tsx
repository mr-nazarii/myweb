import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";

export const Navbar = (props: any) => {
  const variants = {
    open: { opacity: 1, x: "100%" },
    closed: { opacity: 1, x: 30 },
  };

  const backgroundVariants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };
  return (
    <>
      <Head>
        <title>Nazarii Kubik</title>
      </Head>
      <div>
        <motion.div
          animate={props.open ? "closed" : "open"}
          variants={backgroundVariants}
          className={styles.background}
        />
        <div className={styles.navbar}>
          <div
            className={styles.btnClose}
            onClick={() => props.setOpen(!props.open)}
          >
            {props.open ? (
              <Image
                alt="closebtn"
                src={"/btnOpen.svg"}
                width={30}
                height={30}
              />
            ) : (
              <Image
                alt="closebtn"
                src={"/btnClose.svg"}
                width={30}
                height={30}
              />
            )}
          </div>

          <motion.ul
            animate={props.open ? "open" : "closed"}
            variants={variants}
            className={styles.navbar__wrapper}
          >
            <li>About Me</li>
            <li>My Stack</li>
            <li>Projects</li>
            <li>Contacts</li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};
