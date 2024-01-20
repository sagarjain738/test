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

const FirstChart = ({ records }) => {
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
      <Bar
        dataKey="January"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      <Bar
        dataKey="February"
        fill="#82ca9d"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
      <Bar
        dataKey="March"
        fill="red"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
  );
};

export default FirstChart;
