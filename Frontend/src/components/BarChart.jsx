// src/components/BarChart.js
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getBarChartData } from "../api";

const BarChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Items",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const data = await getBarChartData(selectedMonth);
        const labels = data.map((item) => item.priceRange);
        const values = data.map((item) => item.count);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Number of Items",
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching bar chart data:", error);
      }
    };

    fetchBarChartData();
  }, [selectedMonth]); // Correctly call fetchBarChartData here

  return <Bar data={chartData} />;
};

export default BarChart;
