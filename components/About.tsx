import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/About.module.scss";
import { Btn } from "./Btn/Btn";
import { AnimatePresence, motion } from "framer-motion";
import SpinningParagraph from "./SpinningParagraph";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { text } from "stream/consumers";

export const About = () => {
  const [active, setActive] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 0.2 },
        scrollTrigger: {
          trigger: ".about-text",
          start: "top center",
          end: "1500 bottom",
          scrub: true,
        },
      });

      let t2 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".about-img1",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      let t3 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".about-img2",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      let t4 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".about-img3",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      let t5 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".about-img4",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(".about-text", {
        y: 100,
        opacity: 1,
      });

      t2.to(".about-img1", {
        y: 50,
        opacity: 1,
      });

      t3.to(".about-img2", {
        y: 100,
        opacity: 1,
      });

      t4.to(".about-img3", {
        y: 60,
        opacity: 1,
      });

      t5.to(".about-img4", {
        y: 100,
        opacity: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="section-about" id="About">
        <p className="about-text">
          I&apos;m a UX/UI Designer and Front-End Developer dedicated to
          transforming your business dreams into engaging web realities, one
          pixel and line of code at a time.
        </p>
        <div className="about-img1">
          <Canvas
            camera={{ position: [10, 0, 1.0] }}
            style={{
              position: "relative",
              left: "0px",
              top: "0px",
              overflow: "visible",
              background: "black",
            }}
          >
            <Blob />
          </Canvas>
        </div>

        <div className="about-img2">
          <Canvas
            camera={{ position: [10, 25, 3.0] }}
            style={{
              position: "relative",
              left: "0px",
              top: "0px",
              overflow: "visible",
              background: "green",
            }}
          >
            <Blob />
          </Canvas>
        </div>

        <div className="about-img3">
          <Canvas
            camera={{ position: [-10, 5, 3.0] }}
            style={{
              position: "relative",
              left: "0px",
              top: "0px",
              overflow: "visible",
              background: "green",
              mixBlendMode: "difference",
            }}
          >
            <Blob />
          </Canvas>
        </div>

        <div className="about-img4">
          <Canvas
            camera={{ position: [10, 5, 3.0] }}
            style={{
              position: "relative",
              left: "0px",
              top: "0px",
              overflow: "visible",
              background: "white",
              mixBlendMode: "difference",
            }}
          >
            <Blob />
          </Canvas>
        </div>
      </div>
    </>
  );
};
