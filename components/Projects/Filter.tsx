import React from "react";
import styles from "../../styles/Project.module.scss";

const Filter = ({ count, setFilter }) => (
  <div className={styles.filter}>
    <p onClick={() => setFilter("all")}>All [{count.all}]</p>
    <p onClick={() => setFilter("true")}>UX/UI [{count.uxProjects}]</p>
    <p onClick={() => setFilter("false")}>Development [{count.itProjects}]</p>
  </div>
);

export default Filter;
