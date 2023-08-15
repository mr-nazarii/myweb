import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navbar = (props: any) => {
  const nav = ["About", "Works", "Contacts"];

  return (
    <>
      <Head>
        <title>Nazarii Kubik</title>
      </Head>
      <div className={"navbar"}>
        <ul className={"navbar__wrapper"}>
          {nav.map((navItem) => (
            <li key={navItem}>
              <a href={`#${navItem}`}>{navItem}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
