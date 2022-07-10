import React from "react";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

const details = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const OneProject = (props: any) => {
  return (
    <>
      <div className={styles.project}>
        <Image
          alt={props.name}
          src={"/projects/" + props.id + ".png"}
          width={269}
          height={190}
          objectFit="cover"
          style={{ borderRadius: "20px" }}
        />
        <div className={styles.details}>
          <h5 className={styles.details__name}>{props.name}</h5>
          <Link key={props.id} href={"/" + props.id}>
            <a className={styles.details__action}>Open</a>
          </Link>
        </div>
      </div>
    </>
  );
};
