import React, { useState, useMemo } from "react";
import { PaginationComponent } from "./PaginationComponent";
import { OneProject } from "./OneProject";
import { Kaleidoscope } from "./Ka";

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

export const Projects: React.FC<ProjectsProps> = ({ planets }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const sortedProjects = useMemo(() => {
    return planets.sort((a, b) => {
      const aDate = new Date(a.monthYear);
      const bDate = new Date(b.monthYear);
      return bDate.getTime() - aDate.getTime();
    });
  }, [planets]);

  return (
    <div>
      <div className="section-pagination">
        <PaginationComponent
          data={planets}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          autoplay={autoplay}
          setAutoplay={setAutoplay}
        />
      </div>
      <div className="section-projects" id="Works">
        <Kaleidoscope project={...sortedProjects[activeIndex]} />
        <svg
          className="svg-top"
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M0,30C0,30,438.4,0,720,0c281.6,0,720,30,720,30H0z"
          ></path>
        </svg>
        <div className="section-projects__projects">
          <OneProject {...sortedProjects[activeIndex]} />
        </div>
        <svg
          className="svg-bottom"
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            d="M0,30C0,30,438.4,0,720,0c281.6,0,720,30,720,30H0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
