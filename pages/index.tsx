import { TitleSection } from "../components/TitleSection";
import type { NextPage } from "next";
import React from "react";
import { About } from "../components/About";
import { Stack } from "../components/Stack/Stack";
import { Projects } from "components/Projects/Projects";
import { serverResponse } from "data";

export const getStaticProps = async () => {
  const response = await serverResponse();

  return {
    props: {
      planets: response,
    },
  };
};

const Home: NextPage = ({ planets }: any) => {
  return (
    <>
      <TitleSection />
      <About />
      <Stack />
      <Projects planets={planets} />
    </>
  );
};

export default Home;
