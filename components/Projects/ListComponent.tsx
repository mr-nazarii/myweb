import React from "react";
import TitleSection from "./TitleSection";
import styles from "./ListComponent.module.scss";

interface Data {
  techList?: string[];
  uxMethods?: string[];
}

interface ListComponentProps {
  data: Data[];
}

const ListComponent: React.FC<ListComponentProps> = ({ data }) => {
  return (
    <div>
      {data[0].techList ? (
        <>
          <TitleSection
            title={`Tech`}
            subtitle={`Technologies of the project`}
          />
          <ul className={styles.techList}>
            {data[0].techList.map((feature: string) => (
              <li key={`${Date.now()}${feature}`}>{feature}</li>
            ))}
          </ul>
        </>
      ) : null}

      {data[0].uxMethods ? (
        <>
          <TitleSection title={`UI/UX`} subtitle={`UX/UI Methods Used`} />
          <ul className={styles.techList}>
            {data[0].uxMethods.map((feature: string) => (
              <li key={`${Date.now()}${feature}`}>{feature}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default ListComponent;
