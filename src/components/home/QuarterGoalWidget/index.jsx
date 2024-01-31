import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const QuarterGoalWidget = ({ className }) => (
  <div className={classnames(styles["container"], className)}>
    <div className={styles["title"]}>Quarter goal</div>
    <div className={styles["score"]}>
      <Image
        className={styles["arrow"]}
        alt={"arrow"}
        src={"./icons/84p-image.png"}
        height={102}
        width={210}
      />
    </div>
    <div className={styles["cta"]}>
      All goals
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

export default QuarterGoalWidget;
