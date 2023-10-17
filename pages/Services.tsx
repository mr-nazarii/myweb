import { Navbar } from "components/global/Navbar/Navbar";
import React, { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { serverResponse, serverSpesificResponse } from "data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { GetStaticProps } from "next";
import { HomeProps } from "pages";
import { Footer } from "components/Footer";

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await serverResponse();

  return {
    props: {
      planets: response,
    },
  };
};

export default function Services({ planets }) {
  console.log(planets);
  return (
    <>
      <Navbar />
      <div className="section-services-wrapper">
        <div className={"section-title-wrapper"}>
          <motion.p
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ delay: 0.3 }}
            initial="hidden"
            whileInView={"visible"}
            className={"section-services-title"}
          >
            Innovative Technologist Delivering Unique Brand Journeys{" "}
          </motion.p>
        </div>

        <div className="service-single">
          <p className="service-single-title">Branding</p>
          <div className="service-single-projects">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              navigation
              pagination={true}
              spaceBetween={50}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              {planets.map((planet) => {
                if (planet.type.branding === true) {
                  return (
                    <SwiperSlide key={planet.id}>
                      <Link className="service-project" href={`/${planet.id}`}>
                        <Image
                          src={`/projects/${planet.name}/4.webp`}
                          fill={true}
                          alt={planet.name}
                          objectFit="cover"
                        />
                      </Link>
                    </SwiperSlide>
                  );
                }
                return null; // Return null if the condition is not met
              })}
            </Swiper>
          </div>
        </div>

        <div className="service-single">
          <p className="service-single-title">UX/UI Design</p>
          <div className="service-single-projects">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              navigation
              spaceBetween={50}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              {planets.map((planet) => {
                if (planet.type.ux === true) {
                  return (
                    <SwiperSlide key={planet.id}>
                      <Link className="service-project" href={`/${planet.id}`}>
                        <Image
                          src={`/projects/${planet.name}/4.webp`}
                          fill={true}
                          alt={planet.name}
                          objectFit="cover"
                        />
                      </Link>
                    </SwiperSlide>
                  );
                }
                return null; // Return null if the condition is not met
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
