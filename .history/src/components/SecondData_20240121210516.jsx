import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import HigherOrder from "./HigherOrder";

const colors = ["#94A89A", "#797D81", "#EFB0A1", "#669bbc"];

const SecondChart = ({ records, monthNames }) => {
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`value: ${value}`}</text>
    );
  };

  return (
    <BarChart
      width={700}
      height={300}
      data={records}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {monthNames.map((month, i) => (
        <Bar
          key={i}
          dataKey={month}
          stackId="a"
          fill={colors[i]}
          label={(payload, x, y, width, height, value) => `Total: ${value}`}
        />
      ))}
    </BarChart>
  );
};

const TotalSalesForProduct = HigherOrder(
  SecondChart,
  "Total Sales For Product Chart"
);

export default TotalSalesForProduct;
