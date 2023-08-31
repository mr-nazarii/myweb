import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ProjectType } from "types/ProjectType";

export const OneProject: React.FC<ProjectType> = ({ name, id, desc, type }) => {
  return (
    <div className="project">
      <div className="project__detailsTop">
        <p className="project__minititle">
          {type.it && type.ux
            ? "Design and Developed"
            : type.it
            ? "Developed"
            : "Designed"}
        </p>
        <p className="project__title">{name}</p>
      </div>
      <p className="project__desc">{desc}</p>
      <Link className="project__link" key={id} href={`/${id}`}>
        Learn More
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
  );
};
