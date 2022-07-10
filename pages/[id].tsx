import { serverResponse, serverSpesificResponse } from "data";
import Image from "next/image";
import { features } from "process";
import React from "react";
import styles from "../styles/ProjectPage.module.scss";

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
  return (
    <div className={styles.section}>
      <div className={styles.projectPage}>
        <h1 className={styles.projectPage__title}>
          {data ? data[0].name : null}
        </h1>
        <div className={styles.projectPage__imgWrap}>
          <Image
            src={"/projects/" + data[0].id + ".png"}
            alt={data[0].name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className={styles.projectPage__quote}>
          &ldquo;{data[0].quote}&rdquo;
        </p>
        <p className={styles.projectPage__sectionTitle}>FEATURES:</p>
        <ul className={styles.projectPage__featureList}>
          {data[0].features
            ? data[0].features.map((feature: any) => (
                <li key={feature}>{feature}</li>
              ))
            : null}
        </ul>
        <p className={styles.projectPage__sectionTitle}>TECH USED:</p>
        <ul className={styles.projectPage__techList}>
          {data[0].techList
            ? data[0].techList.map((feature: any) => (
                <li key={feature}>{feature}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Product;
