import { getExperianceData } from "experianceData";
import React from "react";

export const Timeline: React.FC = () => {
  const data = getExperianceData();

  return (
    <>
      <h2 className="timeline-heading">My Experience</h2>
      <div className="timeline">
        <div className="timeline__job">f</div>
      </div>
    </>
  );
};
