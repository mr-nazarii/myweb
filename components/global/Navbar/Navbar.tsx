import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MainNav } from "./NavbarMenu/MainNav";
import Link from "next/link";

export const Navbar = (props: any) => {
  const nav = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/#Works" },
    { name: "Services", path: "/Services" },
    { name: "About", path: "/#About" },
    { name: "Contacts", path: "/#Contacts" },
  ];

  return (
    <>
      <Head>
        <title>Nazarii Kubik</title>
      </Head>

      <ul className={"navbar-desktop__wrapper"}>
        {nav.map((navItem) => {
          return (
            <Link href={`${navItem.path}`} key={navItem.name}>
              {navItem.name}
            </Link>
          );
        })}
      </ul>
      <div className={"navbar__wrapper"}>
        <MainNav />
      </div>
    </>
  );
};
