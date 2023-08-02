import { Btn } from "components/Btn/Btn";
import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import styles from "../../styles/Project.module.scss";
import Filter from "./Filter";
import { OneProject } from "./OneProject";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

interface ProjectType {
  desc: string;
  color: string;
  name: string;
  quote: string;
  id: string;
  monthYear: string;
  type: {
    ux: boolean;
    it: boolean;
  };
}

interface ProjectsProps {
  planets: ProjectType[];
}

export const Projects = (props: ProjectsProps) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const spacer = 100;

  const [count, setCount] = useState({
    all: 0,
    uxProjects: 0,
    itProjects: 0,
  });

  const sortedProjects = useMemo(() => {
    return props.planets.sort((a, b) => {
      const aDate = new Date(a.monthYear);
      const bDate = new Date(b.monthYear);
      return bDate.getTime() - aDate.getTime();
    });
  }, [props.planets]);

  const projectCount = (sortedProjects: ProjectType[]) => {
    const newCount = { ...count };
    sortedProjects.forEach((element) => {
      if (element.type.ux && element.type.it) {
        newCount.all += 1;
        newCount.uxProjects += 1;
        newCount.itProjects += 1;
      } else if (element.type.ux) {
        newCount.all += 1;
        newCount.uxProjects += 1;
      } else if (element.type.it) {
        newCount.all += 1;
        newCount.itProjects += 1;
      }
    });
    setCount(newCount);
  };

  useEffect(() => {
    projectCount(sortedProjects);
  }, [sortedProjects]);

  return (
    <div className={styles.section} id="Works">
      <Filter count={count} setFilter={setSelectedFilter} />
      <div className={styles.section__projects}>
        {sortedProjects.map((project: ProjectType) => {
          if (
            (selectedFilter === "true" && project.type.ux) ||
            (selectedFilter === "false" && project.type.it) ||
            selectedFilter === "all"
          ) {
            return (
              <OneProject
                desc={project.desc}
                color={project.color}
                key={project.name}
                name={project.name}
                quote={project.quote}
                id={project.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
