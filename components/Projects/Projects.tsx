import { Btn } from "components/Btn/Btn";
import React, { useState } from "react";
import styles from "../../styles/Project.module.scss";
import { OneProject } from "./OneProject";

export const Projects = (props: any) => {
  const [active, setActive] = useState(false);
  const [ux, setUX] = useState("all");

  const sortedProjects = props.planets.sort((a: any, b: any) => {
    const aDate = new Date(a.monthYear);
    const bDate = new Date(b.monthYear);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div
      className={styles.section}
      id="projects"
      style={{
        backgroundImage: "url('./frame2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Btn active={active} setActive={setActive} color={true} styles={styles}>
        Projects
      </Btn>
      <div className={styles.filter}>
        <p onClick={() => setUX("all")}>All</p>
        <p onClick={() => setUX("true")}>UX/UI</p>
        <p onClick={() => setUX("false")}>Development</p>
      </div>
      {sortedProjects.map((project: any) => {
        if (ux === "true" && project.type.ux) {
          return (
            <OneProject
              key={project.name}
              name={project.name}
              id={project.id}
            />
          );
        } else if (ux === "false" && project.type.it) {
          return (
            <OneProject
              key={project.name}
              name={project.name}
              id={project.id}
            />
          );
        } else if (ux === "all") {
          return (
            <OneProject
              key={project.name}
              name={project.name}
              id={project.id}
            />
          );
        }
      })}
    </div>
  );
};
