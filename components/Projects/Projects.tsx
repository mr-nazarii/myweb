import { Btn } from "components/Btn/Btn";
import React, { useState } from "react";
import styles from "../../styles/Project.module.scss";
import { OneProject } from "./OneProject";

export const Projects = (props: any) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.section} id="projects">
      <Btn active={active} setActive={setActive} color={true} styles={styles}>
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
