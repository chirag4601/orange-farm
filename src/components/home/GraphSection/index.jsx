import { useEffect, useState } from "react";
import classnames from "classnames";

import Chart from "@/components/common/Chart";
import { getData } from "@/utils/network";

import styles from "./index.module.scss";
import Select from "@/libs/Select";

const GraphSection = ({ className }) => {
  const [graphData, setGraphData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Yearly");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(
      `https://chirag4601.pythonanywhere.com/orangefarm?start=${selectedFilter}`
    )
      .then((data) => {
        setLoading(false);
        setGraphData(data.data);
      })
      .catch((e) => console.log(e));
  }, [selectedFilter]);

  return (
    <div className={classnames(styles["container"], className)}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>Graph</div>
        <div className={styles["sort"]}>
          <Select
            options={[
              { value: "24h", title: "24h" },
              { value: "7d", title: "7d" },
              { value: "14d", title: "14d" },
              { value: "Monthly", title: "Monthly" },
              { value: "60d", title: "60d" },
              { value: "200d", title: "200d" },
              { value: "Yearly", title: "Yearly" },
              { value: "Max", title: "Max" },
            ]}
            value={selectedFilter}
            onChange={(ev) => setSelectedFilter(ev.target.value)}
          />
        </div>
      </div>

      <Chart days={selectedFilter} arr={graphData} />
    </div>
  );
};

export default GraphSection;
