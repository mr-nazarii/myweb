import { Btn } from "components/Btn";
import React from "react";
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
        "Express.Js",
        "MongoDB",
        "React.js",
        "React Native",
        "React Native navigation",
        "Redux",
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
      ],
      tools: ["GIT", "GitHub", "Postman", "Visual Studio", "Docker", "Slack"],
    },
  ];
  const data2 = [
    {
      imgSource: "/art.svg",
      title: "DESIGNER",
      about:
        "I favor clear design principles, straightforward information organization",
      sectionName1: "WHAT I DESIGN",
      sectionName2: "DESIGN TOOLS",
      languages: ["Apps", "Logos", "Web"],
      tools: ["Figma", "Illustrator"],
    },
  ];

  return (
    <div className={styles.section} id="stack">
      <Btn color={false} styles={styles}>
        My Stack
      </Btn>
      <OneTable data={data1} />
      <OneTable data={data2} />
    </div>
  );
};
