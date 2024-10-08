import { useState } from "react";
import TransactionsTable from "./components/TransactionTable";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Transaction Dashboard</h1>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="month-select">Select Month: </label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Statistics selectedMonth={selectedMonth} />
        <BarChart selectedMonth={selectedMonth} />
        <PieChart selectedMonth={selectedMonth} />
        <TransactionsTable selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default App;
