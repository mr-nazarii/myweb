import React, { useEffect } from "react";

interface Project {
  id: number;
  name: string;
}

interface PaginationProps {
  data: Project[];
  setActiveIndex: (index: number) => void;
  setAutoplay: (autoplay: boolean) => void;
  autoplay: boolean;
  activeIndex: number;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  data,
  setActiveIndex,
  setAutoplay,
  autoplay,
  activeIndex,
}) => {
  useEffect(() => {
    if (autoplay) {
      const autoNext = setInterval(() => {
        nextActive();
      }, 1000);
      return () => clearInterval(autoNext);
    }
  }, [autoplay]);

  const nextActive = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const previousActive = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const setActiveDot = (index: number) => {
    setActiveIndex(index);
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
