// Type imports
import type { NextPage, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { ProjectType } from "types/ProjectType";

// Component imports
import { Navbar } from "components/global/Navbar/Navbar";
import { TitleSection } from "../components/TitleSection";
import { About } from "components/About";
import { Projects } from "components/Projects";
import { Footer } from "components/Footer";
import { Loader } from "components/global/Loader/Loader";

// Data imports
import { serverResponse } from "data";

// Define the type for Source and Project
interface HomeProps {
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
        <About />
        <Projects planets={planets} />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Home;
