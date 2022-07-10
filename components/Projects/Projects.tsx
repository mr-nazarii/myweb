import React from "react";
import styles from "../../styles/Project.module.scss";
import { OneProject } from "./OneProject";

export const Projects = (props: any) => {
  return (
    <div className={styles.section} id="projects">
      <h4 className={styles.section__title}>Projects</h4>
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
