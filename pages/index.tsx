// Type imports
import type { NextPage, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { ProjectType } from "types/ProjectType";
import { Analytics } from "@vercel/analytics/react";

// Component imports
import { Navbar } from "components/global/Navbar/Navbar";
import { TitleSection } from "../components/TitleSection";
import { About } from "components/About";
import { Projects } from "components/Projects";
import { Footer } from "components/Footer";
import { Loader } from "components/global/Loader/Loader";

// Data imports
import { serverResponse } from "data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Define the type for Source and Project
export interface HomeProps {
  planets: ProjectType[];
}

// Animation variants
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await serverResponse();
  // Assuming serverResponse is typed to return Project[]

  return {
    props: {
      planets: response,
    },
  };
};

const Home: NextPage<HomeProps> = ({ planets }) => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (window.innerWidth <= 1035) {
        let background = gsap.timeline({
          defaults: { duration: 0.2 },
          scrollTrigger: {
            trigger: ".gradient-motion",
            start: "670 center",
            end: "1550 bottom",
            scrub: true,
          },
        });

        background.to(".gradient-motion", {
          background: "black",
        });
      } else {
        let background = gsap.timeline({
          defaults: { duration: 0.2 },
          scrollTrigger: {
            trigger: ".gradient-motion",
            start: "1770 center",
            end: "3050 bottom",
            scrub: true,
          },
        });

        background.to(".gradient-motion", {
          background: "black",
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <Navbar />
        <TitleSection />
        <div className="gradient-motion">
          <About />
          <Projects planets={planets} />
        </div>
        <Footer />
      </motion.main>
      <Analytics />
    </div>
  );
};

export default Home;
