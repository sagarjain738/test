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
      <Bar dataKey="March" stackId="a" fill="red" />
      {monthNames.map((month) => (
        <Bar key={month} dataKey={month} stackId="a" fill="red" />
      ))}
    </BarChart>
  );
};

export default SecondChart;
