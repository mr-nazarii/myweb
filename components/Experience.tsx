import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Experience.module.scss";
import { ExperienceItem } from "./ExpeianceItem";
import { getExperianceData } from "experianceData";

export const Experience = () => {
  const data = getExperianceData();

  return (
    <div className={styles.section} id="Experience">
      <div className={styles.section__line} />
      <ul className={styles.experience}>
        {data.map((experience) => (
          <ExperienceItem
            key={experience.id}
            position={experience.position}
            company={experience.company}
            location={experience.location}
            responsibilities={experience.responsibilities}
            employmentPeriod={experience.employmentPeriod}
          />
        ))}
      </ul>
    </div>
  );
};
