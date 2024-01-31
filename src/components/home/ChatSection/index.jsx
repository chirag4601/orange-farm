import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const unreadMessages = [
  { profileImage: "maggie.png" },
  { profileImage: "dummy-user-1.png" },
];
const readMessages = [
  { profileImage: "dummy-user-2.png" },
  { profileImage: "dummy-user-3.png" },
  { profileImage: "gustavo-image.png" },
];

const ChatSection = ({ className }) => (
  <div className={classnames(styles["container"], className)}>
    <div>
      <div className={styles["title"]}>Chats</div>
      <div className={styles["subtitle"]}>
        {unreadMessages.length} unread messages
      </div>
      <div className={styles["chats-list"]}>
        {unreadMessages.map((data, idx) => (
          <div
            key={idx}
            className={classnames(styles["card"], styles["unread"])}
          >
            <div className={styles["red-dot"]}>
              <div className={styles["dot"]}></div>
            </div>
            <Image
              src={"./images/" + data.profileImage}
              alt={"image"}
              height={32}
              width={32}
            />
          </div>
        ))}
        {readMessages.map((data, idx) => (
          <div key={idx} className={styles["card"]}>
            <Image
              src={"./images/" + data.profileImage}
              alt={"image"}
              height={32}
              width={32}
            />
          </div>
        ))}
      </div>
    </div>
    <div className={styles["footer"]}>
      All Chats{" "}
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

export default ChatSection;
