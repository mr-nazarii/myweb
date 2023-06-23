import React from "react";
import styles from "./TitleSection.module.scss";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.titleSection}>
      <p className={styles.titleSection__sectionSubTitle}>{subtitle}</p>
      <p className={styles.titleSection__sectionTitle}>{title} </p>
    </div>
  );
};

export default TitleSection;
