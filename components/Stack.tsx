import React from "react";
import styles from "../styles/Stack.module.scss";
import Image from "next/image";
export const Stack = () => {
  const languages = [
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
  ];

  const tools = [
    "GIT",
    "GitHub",
    "Postman",
    "Visual Studio",
    "Docker",
    "Slack",
  ];

  return (
    <div className={styles.section}>
      <h3 className={styles.section__title}>My Stack</h3>

      <div className={styles.skill}>
        <div className={styles.skill__image}>
          <Image
            alt="me"
            src={"/laptop.svg"}
            width={37}
            height={37}
            objectFit="cover"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <h4 className={styles.skill__title}>FULLSTACK DEVELOPER</h4>
        <p className={styles.skill__about}>
          Coding is my passion. Love to create and manage
        </p>
        <h5 className={styles.skill__section}>TECHNOLOGIES I USE</h5>
        <ul className={styles.skill__listItemWrapper}>
          {languages.map((el: string) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <h5 className={styles.skill__section}>DEV TOOLS</h5>
        <ul className={styles.skill__listItemWrapper}>
          {tools.map((el: string) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
