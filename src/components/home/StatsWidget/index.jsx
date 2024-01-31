import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const StatsWidget = (props) => (
  <div className={classnames(styles["container"], props.className)}>
    <div className={styles["title"]}>{props.title}</div>
    <div className={styles["score"]}>{props.value}</div>
    <div className={styles["subtitle"]}>{props.subtitle}</div>
    <div className={styles["cta"]}>
      {props.ctaText}{" "}
      <Image
        className={styles["arrow"]}
        alt={"arrow"}
        src={"./icons/right-arrow.png"}
        height={14}
        width={14}
      />
    </div>
  </div>
);

export default StatsWidget;
