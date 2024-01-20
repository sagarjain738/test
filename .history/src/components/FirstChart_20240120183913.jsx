import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SalesBarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Extract product names and sales data from the provided data
    const products = data.salesData.map((item) => item.product);
    const salesData = data.salesData.map((item) =>
      item.sales.map((sale) => sale.amount)
    );

    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a chart canvas
    const ctx = document.getElementById("salesChart").getContext("2d");

    // Create a bar chart
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: products,
        datasets: [
          {
            label: "January",
            data: salesData.map((sales) => sales[0]),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "February",
            data: salesData.map((sales) => sales[1]),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "March",
            data: salesData.map((sales) => sales[2]),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });
  }, [data]);

  return <canvas id="salesChart" width="400" height="200"></canvas>;
};

export default SalesBarChart;
