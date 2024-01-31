import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const CustomerData = [
  { image: "chris.png", name: "Chris Friedkly", org: "Supermarket Villanova" },
  { image: "maggie.png", name: "Maggie Johnson", org: "Oasis Organic Inc." },
  { image: "gael.png", name: "Gael Harry", org: "New York Finest Fruits" },
  { image: "jenna.png", name: "Jenna Sullivan", org: "Walmart" },
];

const CustomersSection = ({ className }) => (
  <div className={classnames(styles["container"], className)}>
    <div className={styles["header"]}>
      <div className={styles["title"]}>Customers</div>
      <div className={styles["sort"]}>
        Sort by Newest{" "}
        <Image height={16} width={16} alt={"arrow"} src={"./icons/arrow.png"} />
      </div>
    </div>

    <div className={styles["customer-list"]}>
      {CustomerData.map((data, idx) => (
        <div className={styles["card"]} key={idx}>
          <div className={styles["content"]}>
            <Image
              src={"./images/" + data.image}
              alt={"profile"}
              height={32}
              width={32}
              className={styles["profile-image"]}
            />
            <div>
              <div className={styles["name"]}>{data.name}</div>
              <div className={styles["org"]}>{data.org}</div>
            </div>
          </div>
          <div className={styles["options"]}>
            <Image
              src={"./icons/chat-icon.png"}
              className={styles["option-icon"]}
              alt={"chat"}
              height={16}
              width={16}
            />
            <Image
              src={"./icons/fav-icon.png"}
              className={styles["option-icon"]}
              alt={"fav"}
              height={16}
              width={16}
            />
            <Image
              src={"./icons/edit-icon.png"}
              className={styles["option-icon"]}
              alt={"edit"}
              height={16}
              width={16}
            />
            <Image
              src={"./icons/more-icon.png"}
              className={classnames(styles["option-icon"], styles["more-icon"])}
              alt={"more"}
              height={16}
              width={16}
            />
          </div>
        </div>
      ))}
    </div>
    <div className={styles["footer"]}>
      All customers
      <Image
        src={"./icons/right-arrow.png"}
        className={styles["arrow"]}
        alt={"arrow"}
        height={16}
        width={16}
      />
    </div>
  </div>
);

export default CustomersSection;
