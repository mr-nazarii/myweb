import React, { useState, useMemo } from "react";

import { OneProject } from "./Projects/OneProject";
import { Kaleidoscope } from "./Projects/Ka";
import { ProjectType } from "types/ProjectType";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface ProjectsProps {
  planets: ProjectType[];
}

import SwiperCore from "swiper";

export const Projects: React.FC<ProjectsProps> = ({ planets }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedProjects = useMemo(() => {
    return planets.sort((a, b) => {
      const aDate = new Date(a.monthYear);
      const bDate = new Date(b.monthYear);
      return bDate.getTime() - aDate.getTime();
    });
  }, [planets]);

  const swiperRef = React.useRef<SwiperCore>(null);

  return (
    <div className="project-wrapper">
      <Kaleidoscope {...sortedProjects[activeIndex]} />
      <svg
        className="waveBottom"
        viewBox="0 0 1440 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFFFFF"
          d="M0,30C0,30,438.4,0,720,0c281.6,0,720,30,720,30H0z"
        ></path>
      </svg>
      <svg
        className="waveTop"
        viewBox="0 0 1440 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFFFFF"
          d="M0,30C0,30,438.4,0,720,0c281.6,0,720,30,720,30H0z"
        ></path>
      </svg>
      <Swiper
        ref={swiperRef}
        // @ts-ignore
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const isActive = index === activeIndex ? "active" : "";
            return `<li class="${className} ${isActive}"></li>`;
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {sortedProjects.map((project) => {
          return (
            <SwiperSlide
              key={sortedProjects[activeIndex] + ""}
              className="section-projects__projects"
            >
              <OneProject {...project} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
