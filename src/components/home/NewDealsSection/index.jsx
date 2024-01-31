import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const NewDealsData = [
  "Fruit2Go",
  "Marshall's MKT",
  "CCNT",
  "Joana Mini-market",
  "Little Brazil Vegan",
  "Target",
  "Organic Place",
  "Morello's",
];

const NewDealsSection = ({ className }) => (
  <div className={classnames(styles["container"], className)}>
    <div className={styles["title"]}>New Deals</div>
    <div className={styles["states-list"]}>
      {NewDealsData.map((data, idx) => (
        <div key={idx} id={`states-card-${idx}`} className={styles["card"]}>
          <Image
            src={"./icons/orange-add-sign.png"}
            alt={"plus"}
            width={24}
            height={24}
          />
          <div className={styles["value"]}>{data}</div>
        </div>
      ))}
    </div>
  </div>
);

export default NewDealsSection;
