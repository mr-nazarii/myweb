import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
          onClick={() => props.setOpen(!props.open)}
        />
        <div className={styles.navbar}>
          <div
            className={styles.btnClose}
            onClick={() => props.setOpen(!props.open)}
          >
            {props.open ? (
              <Image alt="closebtn" src={"/btnOpen.png"} layout="fill" />
            ) : (
              <Image alt="closebtn" src={"/btnClose.png"} layout="fill" />
            )}
          </div>

          <motion.ul
            animate={props.open ? "open" : "closed"}
            variants={variants}
            className={styles.navbar__wrapper}
          >
            <li>
              <Link
                activeClass="active"
                onClick={() => props.setOpen(!props.open)}
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={() => props.setOpen(!props.open)}
                to="stack"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                My Stack
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={() => props.setOpen(!props.open)}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                onClick={() => props.setOpen(!props.open)}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
              >
                Contacts
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};
