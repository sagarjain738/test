import { ResponsivePie } from "@nivo/pie";
import HigherOrder from "./HigherOrder";
import { useEffect, useState } from "react";
import todalData from "../../Data";
import ChildChart from "./ChildChart";

const TotalPieChart = ({ records }) => {
  const [month, setMonth] = useState("");
  const [subData, setSubData] = useState(false);
  const [recordsForMonth, setRecordsForMonth] = useState("");

  const getDataForSelectedMonth = (data, target) => {
    const result = [];
    for (const a of data) {
      const { product, sales } = a;
      const salesForMonth = sales.find((entry) => entry.month === target);

      if (salesForMonth) {
        result.push({ product, amount: salesForMonth.amount });
      }
    }
    console.log(result);
    setRecordsForMonth(result);
  };

  useEffect(() => {
    getDataForSelectedMonth(todalData.salesData, month);
    // setSubData(true)
  }, [month]);

  return (
    <div
      style={{
        height: "28rem",
        width: "28rem",
      }}
    >
      <ResponsivePie
        onClick={(a) => {
          setSubData((p) => !p);
          setMonth(a.id);
        }}
        data={records}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />

      {subData && recordsForMonth && <ChildChart data={recordsForMonth} />}
    </div>
  );
};

const MonthWisePieChart = HigherOrder(TotalPieChart, "Pie Chart");

export default MonthWisePieChart;
