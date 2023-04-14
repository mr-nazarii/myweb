import React, { useEffect, useRef, useState } from "react";
import { Btn } from "./Btn/Btn";
import styles from "../styles/Experiance.module.scss";

export const Experiance = () => {
  const [active, setActive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = ref.current?.scrollTop;
      const totalHeight = ref.current?.scrollHeight - ref.current?.clientHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(totalHeight);
      console.log(progress);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={styles.section}
        ref={ref}
        style={{
          backgroundImage: "url('./frame2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          height: "800px",
        }}
        id="aboutMe"
      >
        <Btn active={active} setActive={setActive} styles={styles}>
          Work Experiance
        </Btn>

        <div
          style={{
            top: "150px",
            width: "10px",
            height: `${scrollProgress}%`,
            background: "yellow",
          }}
        ></div>
      </div>
    </>
  );
};
