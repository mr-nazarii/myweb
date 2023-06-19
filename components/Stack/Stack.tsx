import { Btn } from "components/Btn/Btn";
import React, { useState } from "react";
import styles from "../../styles/Stack.module.scss";
import { OneTable } from "./OneTable";

export const Stack = () => {
  const data1 = [
    {
      imgSource: "/laptop.png",
      title: "Full-Stack Developer",
      about: "Coding is my passion. Love to create and manage",
      sectionName1: "Technologies I use",
      languages: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Express.Js",
        "MongoDB",
        "React.js",
        "React Native",
        "React Native navigation",
        "Redux",
        "Redux-toolkit",
        "Redux-thunk",
        "React-Router",
        "Framer Motion",
        "Node.js",
        "BEM",
        "GraphQL",
        "Git",
        "Gulp",
        "Sass",
        "Bootstrap",
        "Php",
        "jQuery",
        "HTML/CSS",
        "JSON",
        "MUI",
        "Next.js",
        "Styled-components",
        "GIT",
        "GitHub",
        "Postman",
        "Visual Studio",
        "Docker",
        "Slack",
      ],
    },
  ];
  const data2 = [
    {
      imgSource: "/art.png",
      title: "UX/UI Designer",
      about:
        "I favor clear design principles, straightforward information organization",
      sectionName1: "What I create",
      languages: [
        "Apps",
        "Logos",
        "Web",
        "Prototypes",
        "Wireframes",
        "Inclusive Design",
        "Low-Fidelity prototypes",
        "High-Fidelity prototypes",
        "UX research",
        "Mobile Games",
        "Websites",
        "User Interfaces (UI)",
        "User Experience (UX) Designs",
        "Branding Materials",
        "Infographics",
        "Illustrations",
        "Video Editing",
        "Social Media Graphics",
        "Print Materials",
        "Responsive Designs",
        "Iconography",
        "Style Guides",
        "User Flow Diagrams",
      ],
    },
  ];
  const [active, setActive] = useState(false);

  return (
    <div className={styles.section} id="Skills">
      <div className={styles.skillswrap}>
        <OneTable data={data1} />
        <OneTable data={data2} />
      </div>
    </div>
  );
};
