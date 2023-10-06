import React, { useState, useMemo } from "react";

import { OneProject } from "./Projects/OneProject";
import { Kaleidoscope } from "./Projects/Ka";
import { ProjectType } from "types/ProjectType";
import Link from "next/link";

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
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";

export const Projects: React.FC<ProjectsProps> = ({ planets }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedProjects = useMemo(() => {
    return planets.sort((a, b) => {
      const aDate = new Date(a.monthYear);
      const bDate = new Date(b.monthYear);
      return bDate.getTime() - aDate.getTime();
    });
  }, [planets]);

  console.log(sortedProjects[0]);

  const swiperRef = React.useRef<SwiperCore>(null);

  return (
    <div className="project-wrapper" id="Works">
      <div className="project-main-img-wrapper1">
        <div className="project-main-img">
          <Link href={`/${sortedProjects[0].id}`}>
            <Image
              src={`/projects/${sortedProjects[0].name}/4.webp`}
              fill={true}
              alt="mouse"
              objectFit="cover"
            />
          </Link>
        </div>

        <div className="project-desc-wrapper">
          <p className="project-title">{sortedProjects[0].name}</p>
          <p className="project-desc">{sortedProjects[0].desc}</p>
        </div>
      </div>
      <div className="project-main-img-wrapper2">
        <p className="project-descdescription-text">
          Embracing boundless creativity and technical expertise to elevate
          every project, transcending conventional boundaries in art, design,
          and technology. Navigating uncharted terrains of innovation together,
          crafting designs and technology solutions that pave the way for the
          future.
        </p>
        <div className="project-main-img-wrapper1">
          <div className="project-main-img">
            <div>
              {" "}
              <Link href={`/${sortedProjects[1].id}`}>
                <Image
                  src={`/projects/${sortedProjects[1].name}/4.webp`}
                  fill={true}
                  alt="mouse"
                  objectFit="cover"
                />
              </Link>
            </div>
          </div>{" "}
          <div className="project-desc-wrapper">
            <p className="project-title">{sortedProjects[1].name}</p>
            <p className="project-desc">{sortedProjects[1].desc}</p>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="project-main-img-wrapper3">
        <div className="project-main-img">
          <Link href={`/${sortedProjects[2].id}`}>
            <Image
              src={`/projects/${sortedProjects[2].name}/4.webp?=221`}
              key={`/projects/${sortedProjects[2].name}/4.webp?=221`}
              fill={true}
              alt="mouse"
              objectFit="cover"
            />
          </Link>
        </div>
        <div className="project-desc-wrapper">
          <p className="project-title">{sortedProjects[2].name}</p>
          <p className="project-desc">{sortedProjects[2].desc}</p>
        </div>
      </div>
      <div className="project-main-img-wrapper4">
        <div className="project-main-img">
          <Link href={`/${sortedProjects[3].id}`}>
            <Image
              src={`/projects/${sortedProjects[3].name}/4.webp`}
              fill={true}
              alt="mouse"
              objectFit="cover"
            />
          </Link>
        </div>
        <div className="project-desc-wrapper">
          <p className="project-title">{sortedProjects[3].name}</p>
          <p className="project-desc">{sortedProjects[3].desc}</p>
        </div>
      </div>
      <div className="project-main-button">
        <Link className="project__link" href={`/`}>
          More Works
          <svg
            width="33"
            height="10"
            viewBox="0 0 33 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrowsvg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.61 0.480014C28.8972 0.264623 29.3046 0.322826 29.52 0.610014L32.8125 5.00002L29.52 9.39001C29.3046 9.6772 28.8972 9.7354 28.61 9.52001C28.3228 9.30462 28.2646 8.8972 28.48 8.61001L30.7 5.65002L1.00001 5.65001C0.641021 5.65001 0.350006 5.359 0.350006 5.00001C0.350006 4.64103 0.641021 4.35001 1.00001 4.35001L30.7 4.35002L28.48 1.39001C28.2646 1.10283 28.3228 0.695405 28.61 0.480014Z"
              fill="#000000"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
