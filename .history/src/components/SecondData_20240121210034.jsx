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
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {monthNames.map((month, i) => (
        <Bar key={i} dataKey={month} stackId="a" fill={colors[i]} />
      ))}
    </BarChart>
  );
};

const TotalSalesForProduct = HigherOrder(
  SecondChart,
  "Total Sales For Product Chart"
);

export default TotalSalesForProduct;
