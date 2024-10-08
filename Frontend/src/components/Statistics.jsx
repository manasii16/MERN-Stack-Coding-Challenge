// src/components/Statistics.js
import React, { useEffect, useState } from "react";
import { getStatistics } from "../api";

const Statistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await getStatistics(selectedMonth);
        setStatistics(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics(); // Call fetchStatistics here
  }, [selectedMonth]);

  return (
    <div>
      <h3>Statistics for {selectedMonth}</h3>
      <p>Total Sale Amount: ${statistics.totalSaleAmount || 0}</p>
      <p>Total Sold Items: {statistics.soldItems || 0}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems || 0}</p>
    </div>
  );
};

export default Statistics;
