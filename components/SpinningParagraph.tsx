import React, { useState, useEffect } from "react";
import styles from "styles/Spinner.module.scss";
import dynamic from "next/dynamic";

const SpinningParagraph = () => {
  const [words, setWords] = useState([
    "Full-Stack Developer",
    "Entrepreneur",
    "Front-End Developer",
    "UX/UI Designer",
    "Full-Stack Developer",
  ]);

  return (
    <div className={styles.spinningParagraph}>
      <div className={styles.paragraphWrapper}>
        <p>Nazarii Kubik</p>

        <div className={styles.titleOverflow}>
          <div className={styles.titleWrapper}>
            {words.map((word) => (
              <span key={word + Date().toString}>{word}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpinningParagraph), {
  ssr: false,
});
