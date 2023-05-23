import { Btn } from "components/Btn/Btn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Project.module.scss";
import { OneProject } from "./OneProject";

export const Projects = (props: any) => {
  const [active, setActive] = useState(false);
  const [ux, setUX] = useState("all");

  const [count, setCount] = useState({
    all: 19,
    uxProjects: 15,
    itProjects: 10,
  });

  // const sortedProjects = props.planets.sort((a: any, b: any) => {
  //   const aDate = new Date(a.monthYear);
  //   const bDate = new Date(b.monthYear);
  //   return bDate.getTime() - aDate.getTime();
  // });

  // const projectCount = (sortedProjects: any) => {
  //   const newCount = { ...count };
  //   sortedProjects.forEach((element: { type: any }) => {
  //     if (element.type.ux && element.type.it) {
  //       newCount.all += 1;
  //       newCount.uxProjects += 1;
  //       newCount.itProjects += 1;
  //     } else if (element.type.ux) {
  //       newCount.all += 1;
  //       newCount.uxProjects += 1;
  //     } else if (element.type.it) {
  //       newCount.all += 1;
  //       newCount.itProjects += 1;
  //     }
  //   });
  //   setCount(newCount);
  // };

  // useEffect(() => {
  //   projectCount(sortedProjects);
  // }, [sortedProjects]);

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
        <p onClick={() => setUX("all")}>All [{count.all}]</p>
        <p onClick={() => setUX("true")}>UX/UI [{count.uxProjects}]</p>
        <p onClick={() => setUX("false")}>Development [{count.itProjects}]</p>
      </div>
      <div className={styles.projectsWrapper}>
        <div className={styles.wall}>
          <h1>Contact Me to Get Access to the Projects</h1>
          <div className={styles.linkWrapper}>
            <Btn color="link" styles={styles}>
              <a href="mailto: nazariikubik@gmail.com">
                <Image
                  alt="email"
                  width={40}
                  height={40}
                  src="/icons/email.svg"
                />
              </a>
            </Btn>
          </div>
        </div>
        <Image
          alt="gs"
          layout="fill"
          src={"/projects.png"}
          objectFit="cover"
          style={{ borderRadius: "6px", width: "100%", height: "100%" }}
        />
        {/* <div className={styles.section__projects}>
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
        </div> */}
      </div>
    </div>
  );
};
