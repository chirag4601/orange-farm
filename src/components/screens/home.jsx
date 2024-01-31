import Sidebar from "@/components/home/Sidebar";
import CustomersSection from "@/components/home/CustomersSection";
import StatsWidget from "@/components/home/StatsWidget";
import QuarterGoalWidget from "@/components/home/QuarterGoalWidget";
import ChatSection from "@/components/home/ChatSection";
import TopStates from "@/components/home/TopStates";
import NewDealsSection from "@/components/home/NewDealsSection";
import GraphSection from "@/components/home/GraphSection";

import styles from "@/styles/home.module.scss";
import TopPerformersWidget from "@/components/home/TopPerformersWidget";
import Image from "@/libs/Image";

const stats = [
  {
    title: "Revenues",
    value: "15%",
    status: "increased",
    subtitle: "Increase compared to last week",
    ctaText: "Revenues report",
  },
  {
    title: "Lost deals",
    value: "4%",
    subtitle: "You closed 96 out of 100 deals",
    ctaText: "All deals",
  },
];

const TopPerformerData = [
  {
    title: "Top month",
    bottom: (
      <div>
        <div className={styles["top-text"]}>November</div>
        <div className={styles["top-subtext"]}>2019</div>
      </div>
    ),
  },
  {
    title: "Top year",
    bottom: (
      <div>
        <div className={styles["top-text"]}>2023</div>
        <div className={styles["subtext"]}>96K sold so far</div>
      </div>
    ),
  },
  {
    title: "Top buyer",
    bottom: (
      <div>
        <Image
          height={24}
          width={24}
          className={styles["image"]}
          alt={"image"}
          src={"./images/maggie.png"}
        />
        <div className={styles["name"]}>Maggie Johnson</div>
        <div className={styles["org"]}>Oasis Organic Inc.</div>
      </div>
    ),
  },
];

const HomeScreen = () => (
  <div className={styles["container"]}>
    <Sidebar />
    <div className={styles["content-holder"]}>
      <div className={styles["stats-holder"]}>
        {stats.map((data, idx) => (
          <StatsWidget {...data} className={styles["stats-widget"]} key={idx} />
        ))}
        <QuarterGoalWidget className={styles["quarter-widget"]} />
      </div>
      <div className={styles["customer-growth-section"]}>
        <CustomersSection className={styles["customer-widget"]} />
        <div className={styles["graph-holder"]}>
          <GraphSection />
          <div className={styles["top-performers"]}>
            {TopPerformerData.map((data, idx) => (
              <TopPerformersWidget
                key={idx}
                className={styles["widget"]}
                title={data.title}
                bottomWidget={data.bottom}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      <div className={styles["chats-deals-section"]}>
        <ChatSection className={styles["chat-section"]} />
        <TopStates className={styles["top-states-section"]} />
        <NewDealsSection className={styles["new-deals-section"]} />
      </div>
    </div>
  </div>
);

export default HomeScreen;
