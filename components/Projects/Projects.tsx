import { Btn } from "components/Btn";
import React from "react";
import styles from "../../styles/Project.module.scss";
import { OneProject } from "./OneProject";

export const Projects = (props: any) => {
  return (
    <div className={styles.section} id="projects">
      <Btn color={true} styles={styles}>
        Projects
      </Btn>
      {props.planets
        ? props.planets.map((project: any) => (
            <OneProject
              key={project.name}
              name={project.name}
              id={project.id}
            />
          ))
        : null}
    </div>
  );
};
