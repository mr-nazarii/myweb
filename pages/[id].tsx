import { serverResponse, serverSpesificResponse } from "data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/ProjectPage.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import TitleSection from "components/Projects/TitleSection";
import ListComponent from "components/Projects/ListComponent";
import { Kaleidoscope } from "components/Projects/Ka";

export const getStaticPaths = async () => {
  const res = await serverResponse();

  const paths = res.map((planet: any) => {
    {
      return {
        params: {
          id: planet.id.toString(),
        },
      };
    }
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const response = await serverSpesificResponse(context.params.id);

  return {
    props: {
      data: response,
    },
  };
};

const Product: any = ({ data }: any) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  console.log(data[0].name);

  return (
    <>
      <Head>
        <title>Nazarii Kubik | {data[0].name}</title>
      </Head>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear" }}
      >
        <div className={styles.section}>
          <Link href={"/"}>
            <div className={styles.backLinkWrapper}>
              <Image
                src={"/icons/back.svg"}
                alt={"back"}
                width={23}
                height={23}
              />

              <p className={styles.backLinkWrapper__backLink}>HOME</p>
            </div>
          </Link>
          <div className={styles.projectPage}>
            <div className={styles.container}>
              <h1 className={styles.projectPage__title}>
                {data ? data[0].desc : null}
              </h1>
            </div>
            <div className={styles.projectWrapper}>
              <Kaleidoscope {...data[0]} />
              <svg
                className={styles.waveTop}
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
                className={styles.waveBottom}
                viewBox="0 0 1440 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFFF"
                  d="M0,30C0,30,438.4,0,720,0c281.6,0,720,30,720,30H0z"
                ></path>
              </svg>
            </div>
            <div className={styles.container}>
              <p className={styles.projectPage__subparagraph}>
                {data[0].quote}
              </p>
              <TitleSection
                title={`Features of the project`}
                subtitle={`Interesting Stuff`}
              />
              <ul className={styles.projectPage__featureList}>
                {data[0].features
                  ? data[0].features.map((feature: any) => (
                      <li key={Date.now() + feature}>{feature}</li>
                    ))
                  : null}
              </ul>
              <ListComponent data={data} />
              <TitleSection
                title={`Continue viewing the features`}
                subtitle={`Links`}
              />
              <div className={styles.linkwrapper}>
                {data[0].sources.map((source: any) => {
                  if (source.address) {
                    return (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.action}
                        key={source.address}
                        href={source.address}
                      >
                        {source.category}
                        <Image
                          alt="link"
                          src={"/icons/link.svg"}
                          width={20}
                          height={20}
                        />
                      </a>
                    );
                  }
                  return (
                    <p className={styles.actionUnpressed} key={source.address}>
                      {source.category}
                    </p>
                  );
                })}
              </div>{" "}
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Product;
