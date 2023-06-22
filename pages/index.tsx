import { TitleSection } from "../components/TitleSection";
import type { NextPage } from "next";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { About } from "../components/About";
import { Stack } from "../components/Stack/Stack";
import { Projects } from "components/Projects/Projects";
import { serverResponse } from "data";
import { Footer } from "components/Footer";
import { motion } from "framer-motion";
import { Navbar } from "components/Navbar";
import { Experience } from "components/Experience";

export const getStaticProps = async () => {
  const response = await serverResponse();

  return {
    props: {
      planets: response,
    },
  };
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Home: NextPage = ({ planets }: any) => {
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Navbar />

        <TitleSection />
        <Stack />
        <Experience />
        <Projects planets={planets} />
        <Footer />
      </motion.main>
    </>
  );
};

export default Home;
