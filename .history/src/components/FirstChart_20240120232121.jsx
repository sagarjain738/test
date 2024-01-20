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
      {monthNames.map((month) => (
        <Bar
          key={month}
          dataKey={month}
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      ))}
    </BarChart>
  );
};

export default FirstChart;
