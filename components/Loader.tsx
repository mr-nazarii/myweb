import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Rive from "@rive-app/react-canvas";

const simulateFetch = () => new Promise((resolve) => setTimeout(resolve, 5000));

export const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loaderDiv = useRef<HTMLDivElement | null>(null);
  const blue = useRef<SVGCircleElement | null>(null);
  const red = useRef<SVGCircleElement | null>(null);
  const yellow = useRef<SVGCircleElement | null>(null);
  const green = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const loaderAnimation = gsap.fromTo(
      [blue.current, yellow.current],
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      [red.current, green.current],
      0.5,
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true }
    );

    simulateFetch().then(() => {
      if (loaderDiv.current) {
        gsap.to(loaderDiv.current, {
          autoAlpha: 0,
          onComplete: () => setIsLoading(false),
        });
      }
      // loaderAnimation.pause();
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderDiv}
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: 10,
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
      }}
    >
      <div />
      <svg viewBox="0 0 150 33.2" width="280" height="150">
        <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#ffffff" />
        <circle
          ref={red}
          cx="55.2"
          cy="16.6"
          r="16.1"
          fill="#000000"
          stroke="white"
          strokeWidth="2"
        />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#ffffff" />
        <circle
          ref={green}
          cx="133.4"
          cy="16.6"
          r="16.1"
          fill="#000000"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
