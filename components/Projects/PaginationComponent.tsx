import React, { useEffect } from "react";
import { ProjectType } from "types/ProjectType";

interface PaginationProps {
  data: ProjectType[]; // <-- Change this line
  nextSlide: () => void; // <-- Add this
  activeIndex: number;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  nextSlide,
  data,
  activeIndex,
}) => {
  const nextActive = () => {
    const newIndex = (activeIndex + 1) % data.length;
    nextSlide(newIndex);
  };

  const previousActive = () => {
    const newIndex = (activeIndex - 1 + data.length) % data.length;
    nextSlide(newIndex);
  };

  const setActiveDot = (index: number) => {
    nextSlide(index);
  };

  return (
    <div className="wrapper">
      <div className="pagination" aria-hidden="true">
        <button className="previous" onClick={previousActive}></button>
        <ul id="list">
          {data.map((project, index) => (
            <li
              key={project.id}
              onClick={() => setActiveDot(index)}
              className={index === activeIndex ? "active" : ""}
            ></li>
          ))}
        </ul>
        <button className="next" onClick={nextActive}></button>
      </div>
    </div>
  );
};
