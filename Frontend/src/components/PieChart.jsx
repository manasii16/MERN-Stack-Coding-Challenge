// src/components/PieChart.js
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getPieChartData } from "../api";

const PieChart = ({ selectedMonth }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const data = await getPieChartData(selectedMonth);
        const labels = data.map((item) => item.category);
        const values = data.map((item) => item.count);
        setChartData({
          labels: labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
              ],
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching pie chart data:", error);
      }
    };

    fetchPieChartData(); // Correctly call fetchPieChartData here
  }, [selectedMonth]);

  return <Pie data={chartData} />;
};

export default PieChart;
