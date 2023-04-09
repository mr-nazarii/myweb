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
    <>
      <div className={styles.project}>
        <div className={styles.project__img}>
          <Image
            layout="fill"
            alt={name}
            src={`/projects/${name}/1.png`}
            objectFit="cover"
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.detailsInner}>
            <h5 className={styles.details__name}>{name}</h5>
            <Link key={id} href={`/${id}`}>
              <a className={styles.details__action}>Open</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
