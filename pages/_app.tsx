import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
