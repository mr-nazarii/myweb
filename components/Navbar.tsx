import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navbar = (props: any) => {
  const nav = ["Works", "Skills", "Experience"];

  return (
    <>
      <Head>
        <title>Nazarii Kubik</title>
      </Head>
      <div>
        <div className={styles.navbar}>
          <ul className={styles.navbar__wrapper}>
            {nav.map((navItem) => (
              <li key={navItem}>
                <a href={`#${navItem}`}>{navItem}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
