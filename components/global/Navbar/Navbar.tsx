import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MainNav } from "./NavbarMenu/MainNav";

export const Navbar = (props: any) => {
  const nav = [
    { name: "Home", path: "" },
    { name: "Works", path: "Works" },
    { name: "Services", path: "" },
    { name: "About", path: "About" },
    { name: "Contacts", path: "Contacts" },
  ];

  return (
    <>
      <Head>
        <title>Nazarii Kubik</title>
      </Head>

      <ul className={"navbar-desktop__wrapper"}>
        {nav.map((navItem) => {
          if (navItem.name === "Services") {
            return (
              <li className="soon" key={navItem.name}>
                <a href={`#${navItem.path}`}>{navItem.name}</a>
              </li>
            );
          } else {
            return (
              <li key={navItem.name}>
                <a href={`#${navItem.path}`}>{navItem.name}</a>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <div className={"navbar__wrapper"}>
        <MainNav />
      </div>
    </>
  );
};
