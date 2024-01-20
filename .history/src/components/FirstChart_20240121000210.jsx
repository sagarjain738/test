import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import HigherOrder from "./HigherOrder";

const colors = ["#94A89A", "#797D81", "#EFB0A1", "#669bbc"];

const FirstChart = ({ records, monthNames }) => {
  return (
    <BarChart
      width={700}
      height={300}
      data={records}
      margin={{
        top: 5,
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
          key={month}
          dataKey={month}
          fill={colors[i]}
          activeBar={<Rectangle fill={colors[i]} stroke="blue" />}
        />
      ))}
    </BarChart>
  );
};

const ProductWiseMont = HigherOrder(FirstChart, "First Chart");

export default ProductWiseMont;
