import React from "react";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  id: string;
}

export const OneProject: React.FC<Props> = ({ name, id }) => {
  return (
    <Link key={id} href={`/${id}`}>
      <div className={styles.project}>
        <div className={styles.project__img}>
          <Image
            layout="fill"
            alt={name}
            src={`/projects/${name}/1.png`}
            objectFit="cover"
            style={{ borderRadius: "35px" }}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.detailsInner}>
            <h5 className={styles.details__name}>{name}</h5>
            <a className={styles.details__action}>Learn More</a>
          </div>
        </div>
      </div>
    </Link>
  );
};
