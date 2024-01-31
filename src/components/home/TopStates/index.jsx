import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";
import { useEffect } from "react";

const topStatesData = [
  {
    name: "NY",
    value: 120,
    topValue: 120,
  },
  {
    name: "MA",
    value: 80,
    topValue: 120,
  },
  {
    name: "NH",
    value: 70,
    topValue: 120,
  },
  {
    name: "OR",
    value: 50,
    topValue: 120,
  },
];
const TopStates = ({ className }) => {
  useEffect(() => {
    topStatesData.forEach((data, idx) => {
      const element = document.getElementById(`states-card-${idx}`);
      element.style.width = (data.value / data.topValue) * 100 + "%";
    });
  }, []);

  return (
    <div className={classnames(styles["container"], className)}>
      <div className={styles["title"]}>Top states</div>
      <div className={styles["states-list"]}>
        {topStatesData.map((data, idx) => (
          <div key={idx} id={`states-card-${idx}`} className={styles["card"]}>
            <div className={styles["name"]}>{data.name}</div>
            <div className={styles["value"]}>{data.value}K</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStates;
