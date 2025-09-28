import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";

export default function MonthlyChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const monthlyData = {};

    data.forEach(item => {
      const month = new Date(item.addDate).toLocaleString("default", { month: "short", year: "numeric" });

      if (!monthlyData[month]) {
        monthlyData[month] = { month, income: 0, expense: 0 };
      }

      const amount = Number(item.amount);

      if (item.type === "income") {
        monthlyData[month].income += amount;
      } else if (item.type === "expense") {
        monthlyData[month].expense += amount;
      }
    });

    setChartData(Object.values(monthlyData));
  }, [data]);

  return (
    <div>
        <h4 className="font-bold text-2xl py-5 text-center">Monthly Cash<span className="text-blue-700">Flow</span></h4>
      <BarChart width={400} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#4caf50" />
        <Bar dataKey="expense" fill="#f44336" />
      </BarChart>
    </div>
  );
}
