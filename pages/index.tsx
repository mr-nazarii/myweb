import { Navbar } from "../components/Navbar";
import type { NextPage } from "next";

import { useState } from "react";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;
