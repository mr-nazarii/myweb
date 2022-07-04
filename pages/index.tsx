import { Navbar } from "../components/Navbar";
import { TitleSection } from "../components/TitleSection";
import type { NextPage } from "next";
import { useState } from "react";
import { About } from "../components/About";

const Home: NextPage = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <TitleSection />
      <About />
    </>
  );
};

export default Home;
