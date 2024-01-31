import classnames from "classnames";

import styles from "./index.module.scss";

const TopPerformersWidget = ({ className, title, bottomWidget }) => (
  <div className={classnames(styles["container"], className)}>
    <div className={styles["title"]}>{title}</div>
    {bottomWidget}
  </div>
);

export default TopPerformersWidget;
