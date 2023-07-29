import React from "react";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  quote: string;
  id: string;
  color: string;
  desc: string;
}

export const OneProject: React.FC<Props> = ({
  quote,
  name,
  id,
  color,
  desc,
}) => {
  return (
    <div className={styles.project} style={{ background: `${color}` }}>
      <div className={styles.innerWrapper}>
        <div className={styles.details}>
          <h5 className={styles.details__name}>{desc}</h5>
          <h5 className={styles.details__quote}>{quote}</h5>
          <Link className={styles.details__action} key={id} href={`/${id}`}>
            Learn More
            <Image
              width={40}
              height={40}
              alt={name}
              src={`/icons/arrowRight.svg`}
              style={{ borderRadius: "35px" }}
            />
          </Link>
        </div>
        <div className={styles.project__img}>
          <Image alt={name} fill={true} src={`/projects/${name}/2.png?v=13`} />
        </div>
      </div>
      {/*
      <div className={styles.details}>
        <div className={styles.detailsInner}>
          <h5 className={styles.details__name}>{name}</h5>
          <Link className={styles.details__action} key={id} href={`/${id}`}>
            Learn More
          </Link>
        </div>
      </div> */}
    </div>
  );
};
