import React from "react";
import styles from "../../styles/Stack.module.scss";
import Image from "next/image";

export const OneTable = (props: any) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill__image}>
        <Image
          alt="laptop"
          src={props.data[0].imgSource}
          width={37}
          height={37}
        />
      </div>
      <h4 className={styles.skill__title}>{props.data[0].title}</h4>
      <p className={styles.skill__about}>{props.data[0].about}</p>
      <h5 className={styles.skill__section}>{props.data[0].sectionName1}</h5>
      <ul className={styles.skill__listItemWrapper}>
        {props.data[0].languages.map((el: string) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <h5 className={styles.skill__section}>{props.data[0].sectionName1}</h5>
      <ul className={styles.skill__listItemWrapper}>
        {props.data[0].tools.map((el: string) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};
