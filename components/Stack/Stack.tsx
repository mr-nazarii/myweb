import { Btn } from "components/Btn/Btn";
import React, { useState } from "react";
import styles from "../../styles/Stack.module.scss";
import { OneTable } from "./OneTable";

export const Stack = () => {
  const data1 = [
    {
      imgSource: "/laptop.svg",
      title: "FULLSTACK DEVELOPER",
      about: "Coding is my passion. Love to create and manage",
      sectionName1: "TECHNOLOGIES I USE",
      sectionName2: "DEV TOOLS",
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
      ],
      tools: ["GIT", "GitHub", "Postman", "Visual Studio", "Docker", "Slack"],
    },
  ];
  const data2 = [
    {
      imgSource: "/art.svg",
      title: "UX/UI DESIGNER",
      about:
        "I favor clear design principles, straightforward information organization",
      sectionName1: "WHAT I DESIGN",
      sectionName2: "DESIGN TOOLS",
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
      ],
      tools: ["Figma", "Adobe Illustrator", "Adobe XD"],
    },
  ];
  const [active, setActive] = useState(false);

  return (
    <div className={styles.section} id="stack">
      <Btn active={active} setActive={setActive} color={false} styles={styles}>
        My Stack
      </Btn>
      <div className={styles.sphere} />
      <OneTable data={data1} />
      <OneTable data={data2} />
    </div>
  );
};
