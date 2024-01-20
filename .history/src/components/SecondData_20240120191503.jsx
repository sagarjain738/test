import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SecondChart = ({ records }) => {
  return (
    <BarChart
      width={800}
      height={700}
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
      <Bar dataKey="January" stackId="a" fill="#8884d8" />
      <Bar dataKey="February" stackId="a" fill="#82ca9d" />
      <Bar dataKey="March" stackId="a" fill="red" />
    </BarChart>
  );
};

export default SecondChart;
