import { useState } from "react";
import classnames from "classnames";

import Image from "@/libs/Image";

import styles from "./index.module.scss";

const NavIcons = [
  { icon: "dashboard-sign.png", text: "Dashboard" },
  {
    icon: "costomer-sign.png",
    selectedIcon: "customer-icon-orange.png",
    text: "Customers",
    downArrow: true,
    hiddenOptions: ["Current", "New", "Negotiating"],
  },
  { icon: "report-sign.png", text: "All reports" },
  { icon: "globe-sign.png", text: "Geography" },
  { icon: "conversation-sign.png", text: "Conversations" },
  { icon: "deals-sign.png", text: "Deals" },
  { icon: "export-sign.png", text: "Export" },
];

const userData = {
  name: "Gustavo Xavier",
  image: "./images/gustavo-image.png",
  isAdmin: true,
};

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showHiddenSection, setShowHiddenSection] = useState(false);

  return (
    <div
      className={classnames(
        styles["container"],
        !showSidebar ? styles["shrink"] : "",
        showHiddenSection ? styles["hidden-visible"] : ""
      )}
      onClick={() => setShowSidebar(true)}
    >
      <div className={styles["app-logo"]}>
        <Image
          className={styles["app-bar"]}
          alt={"app-bar"}
          height={20}
          width={20}
          src={"./icons/app-bar.svg"}
        />
        <Image
          className={styles["logo"]}
          alt={"logo"}
          height={21}
          width={21}
          src={"./icons/logo.png"}
        />{" "}
        <div className={styles["app-name"]}> OrangeFarm</div>
      </div>
      <div className={styles["search"]}>
        <Image
          className={styles["search-icon"]}
          src={"./icons/search.png"}
          alt={"search"}
          height={16}
          width={16}
        />
        {showSidebar && <input placeholder={"Search"} />}
      </div>
      <div className={styles["sidebar-items-holder"]}>
        {NavIcons.map((data, idx) => (
          <>
            <div
              onClick={(ev) => {
                if (showSidebar) {
                  ev.preventDefault();
                  ev.stopPropagation();
                }

                if (data.hiddenOptions?.length)
                  setShowHiddenSection(!showHiddenSection);
              }}
              className={classnames(
                styles["sidebar-item"],
                showHiddenSection && data.hiddenOptions?.length
                  ? styles["orange-background"]
                  : ""
              )}
              key={idx}
            >
              <Image
                height={16}
                width={16}
                className={styles["icons"]}
                alt={""}
                src={`./icons/${
                  showHiddenSection && !!data.selectedIcon
                    ? data.selectedIcon
                    : data.icon
                }`}
              />
              {showSidebar && (
                <div className={styles["content"]}>
                  <div className={styles["text"]}>{data.text}</div>
                  {!!data.downArrow && (
                    <Image
                      className={
                        styles[
                          showHiddenSection && data.hiddenOptions
                            ? "rotate-180"
                            : ""
                        ]
                      }
                      height={16}
                      width={16}
                      alt={"arrow"}
                      src={"./icons/arrow.png"}
                    />
                  )}
                </div>
              )}
            </div>
            {showSidebar && showHiddenSection && (
              <div className={styles["hidden-section"]}>
                {data.hiddenOptions?.map((val) => (
                  <div className={styles["val"]} key={val}>
                    {val}
                  </div>
                ))}
              </div>
            )}
          </>
        ))}
      </div>

      <div className={styles["arrow-holder"]}>
        <Image
          className={classnames(
            styles["arrow"],
            styles[showSidebar ? "rotate-90" : "rotate-270"]
          )}
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            setShowSidebar(!showSidebar);
          }}
          height={16}
          width={16}
          alt={"arrow"}
          src={"./icons/arrow.png"}
        />
      </div>

      <div className={styles["sidebar-bottom-widget"]}>
        <div className={styles["sidebar-item"]}>
          <Image
            alt={"avatar"}
            src={userData.image}
            height={32}
            width={32}
            className={styles["profile-image"]}
          />
          {showSidebar && (
            <div className={styles["name-holder"]}>
              <div>{userData.name}</div>
              {userData.isAdmin && (
                <div className={styles["admin-icon"]}>Admin</div>
              )}
            </div>
          )}
        </div>
        <div className={styles["sidebar-item"]}>
          <Image
            height={16}
            width={16}
            className={styles["icons"]}
            alt={""}
            src={"./icons/setting-sign.png"}
          />
          {showSidebar && <div className={styles["text"]}>Settings</div>}
        </div>
        <div className={styles["sidebar-item"]}>
          <Image
            height={16}
            width={16}
            className={styles["icons"]}
            alt={""}
            src={"./icons/logout-sign.png"}
          />
          {showSidebar && (
            <div className={classnames(styles["text"], styles["red-text"])}>
              Log out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
