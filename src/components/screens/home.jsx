import Sidebar from "@/components/home/Sidebar";
import CustomersSection from "@/components/home/CustomersSection";
import StatsWidget from "@/components/home/StatsWidget";
import QuarterGoalWidget from "@/components/home/QuarterGoalWidget";
import ChatSection from "@/components/home/ChatSection";
import TopStates from "@/components/home/TopStates";
import NewDealsSection from "@/components/home/NewDealsSection";
import GraphSection from "@/components/home/GraphSection";

import styles from "@/styles/home.module.scss";

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
