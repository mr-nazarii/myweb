import React, { useState } from "react";
import { Btn } from "./Btn/Btn";
import styles from "../styles/Experiance.module.scss";

export const Experiance = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={styles.section}
        style={{
          backgroundImage: "url('./frame2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="aboutMe"
      >
        <Btn active={active} setActive={setActive} styles={styles}>
          Work Experiance
        </Btn>

        <div
          style={{
            position: "sticky",
            top: "150px",
            width: "10px",
            height: "10px",
            background: "yellow",
          }}
        ></div>
      </div>
    </>
  );
};
