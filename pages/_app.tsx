import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
