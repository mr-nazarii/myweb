import { serverResponse, serverSpesificResponse } from "data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/ProjectPage.module.scss";
import { motion } from "framer-motion";
import Head from "next/head";
import TitleSection from "components/Projects/TitleSection";
import ListComponent from "components/Projects/ListComponent";

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
            <h1 className={styles.projectPage__title}>
              {data ? data[0].desc : null}
            </h1>
            {/* {data[0].company ? (
              <div style={{ padding: "10px 20px" }}>
                <p>
                  Disclaimer: The project displayed on this page,{" "}
                  <b>{data[0].name}</b>, was completed during my employment with{" "}
                  <b>{data[0].company}</b>. All rights, title, and interest in
                  this project, including any intellectual property rights,
                  belong exclusively to <b>{data[0].company}</b>. No claim of
                  ownership or control over this project is intended or implied.
                  <b>{data[0].company}</b>
                </p>
              </div>
            ) : null} */}
            <div className={styles.projectPage__imgWrap}>
              <Image
                src={"/projects/" + `${data[0].name}/` + "1.png?v=1233"}
                alt={data[0].name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <TitleSection
              title={`Shortly about ${data[0].name}`}
              subtitle={`The Beginning`}
            />
            <p className={styles.projectPage__paragraph}>{data[0].quote}</p>

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
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Product;
