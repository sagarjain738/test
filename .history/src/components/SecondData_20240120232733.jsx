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

const SecondChart = ({ records, monthNames }) => {
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
      {monthNames.map((month, i) => (
        <Bar key={i} dataKey={month} stackId="a" fill="" />
      ))}
    </BarChart>
  );
};

export default SecondChart;
