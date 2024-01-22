import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChildChart({ data }) {
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`Total: ${value}`}</text>
    );
  };

  return (
    <BarChart
      width={700}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        label={renderCustomBarLabel}
        dataKey="amount"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
    </BarChart>
  );
}
