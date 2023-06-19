import { motion } from "framer-motion";
import styles from "../styles/Experience.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface ExperienceItemProps {
  position: string;
  company: string;
  backgroundColor?: string;
  textColor?: string;
  location?: string;
  responsibilities: string[];
  employmentPeriod: EmploymentPeriod;
}

interface EmploymentPeriod {
  start: Date;
  end: Date;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  backgroundColor = "white",
  textColor = "#b1b1b1",
  position,
  location,
  company,
  responsibilities = [],
  employmentPeriod,
}) => {
  const [rootMargin, setRootMargin] = useState("-602px 0px 100% 0px");
  const handleResize = () => {
    if (window.innerWidth <= 366.98) {
      setRootMargin("-988px 0px 100% 0px");
    } else if (window.innerWidth <= 513.98) {
      setRootMargin("-788px 0px 100% 0px");
    } else if (window.innerWidth <= 776.98) {
      setRootMargin("-748px 0px 100% 0px");
    } else {
      setRootMargin("-602px 0px 100% 0px");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [ref, inView] = useInView({
    rootMargin,
  });

  const isCurrentMonth =
    employmentPeriod.end.getTime() ===
    new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();

  return (
    <li className={styles.experience__wrapper}>
      <motion.div
        initial={{ color: textColor }}
        animate={{ color: inView ? textColor : "#212121" }}
        ref={ref}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.experience__title}
      >
        <h3>{position}</h3>

        <motion.p
          initial={{ color: textColor }}
          animate={{ borderColor: inView ? "#b1b1b1" : "#212121" }}
          ref={ref}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.periodExperiance}
        >
          {`${employmentPeriod.start.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })} - ${
            isCurrentMonth
              ? "Currently"
              : employmentPeriod.end.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })
          }`}
        </motion.p>

        <motion.p
          initial={{ color: textColor }}
          animate={{ color: inView ? textColor : "#000000" }}
          ref={ref}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles.experience__title}
        >
          {`${company} // ${location}`}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ backgroundColor, borderColor: textColor }}
        animate={{
          backgroundColor: inView ? "#ffffff" : backgroundColor,
          borderColor: inView ? "#F3F3F3" : "#FDD85C",
        }}
        ref={ref}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.experience__sphere}
      />
      <motion.div
        initial={{ color: textColor }}
        animate={{ color: inView ? textColor : "#212121" }}
        ref={ref}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.experience__title}
      >
        {responsibilities.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </motion.div>
    </li>
  );
};
