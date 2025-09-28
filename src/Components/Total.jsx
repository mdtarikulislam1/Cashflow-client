import React, { useState } from "react";
import {
  BanknoteArrowUp,
  BanknoteArrowDown,
  Calendar,
  CornerUpLeft,
  CornerUpRight,
} from "lucide-react";

export default function Total({ data }) {
  const [filterType, setFilterType] = useState("all"); // today | week | month | year | range
  const [range, setRange] = useState({ start: "", end: "" });

  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const getWeekRange = (date) => {
    const start = new Date(date);
    const day = start.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    start.setDate(start.getDate() + diff);

    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    return { start, end };
  };

  // Filter Function
  const filterData = () => {
    if (!data) return [];

    const today = new Date();

    return data.filter((item) => {
      const itemDate = new Date(item.addDate);

      if (filterType === "today") {
        return isSameDay(itemDate, today);
      }

      if (filterType === "week") {
        const { start, end } = getWeekRange(today);
        return itemDate >= start && itemDate <= end;
      }

      if (filterType === "month") {
        return (
          itemDate.getMonth() === today.getMonth() &&
          itemDate.getFullYear() === today.getFullYear()
        );
      }

      if (filterType === "year") {
        return itemDate.getFullYear() === today.getFullYear();
      }

      if (filterType === "range" && range.start && range.end) {
        const start = new Date(range.start);
        const end = new Date(range.end);
        return itemDate >= start && itemDate <= end;
      }

      return true; // "all"
    });
  };

  const filteredData = filterData();

  // Income & Expense হিসাব
  const totalIncome = filteredData
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = filteredData
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Filter Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        {["all", "today", "week", "month", "year", "range"].map((f) => (
          <button
            key={f}
            onClick={() => setFilterType(f)}
            className={`px-3 py-1 rounded-lg text-sm ${
              filterType === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {f === "all"
              ? "All"
              : f === "today"
              ? "Today"
              : f === "week"
              ? "This Week"
              : f === "month"
              ? "This Month"
              : f === "year"
              ? "This Year"
              : "Date Range"}
          </button>
        ))}
      </div>

      {/* Date Range Picker */}
      {filterType === "range" && (
        <div className="flex gap-2 items-center mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={18} />
            <input
              type="date"
              value={range.start}
              onChange={(e) => setRange({ ...range, start: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </div>
          <span>to</span>
          <div className="flex items-center gap-1">
            <Calendar size={18} />
            <input
              type="date"
              value={range.end}
              onChange={(e) => setRange({ ...range, end: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      )}

      {/* Total Income & Expense */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="min-h-30 relative border flex justify-between p-4 border-gray-200 rounded-xl">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gray-400 text-sm">Total Expense</h4>
              <p className="font-semibold text-xl pt-2">{totalIncome}</p>
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-1">
              <CornerUpRight size={16} color="blue" />
              <p>From Total Income</p>
            </div>
          </div>
          <div className="bg-[#4d4dff] flex items-center justify-center w-12 h-12 rounded-full">
            <BanknoteArrowDown size={30} color="white" />
          </div>
          <div className="absolute bottom-0 left-0">
            <svg
              width="47"
              height="42"
              viewBox="0 0 47 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-44.4098 34.6272L-0.415983 0.450239L8.58423 32.9502L46.5841 43.4504L30.44 49.1958L-44.4098 34.6272Z"
                fill="#4d4dff"
              />
            </svg>
          </div>
        </div>

        {/*  */}
        <div className="min-h-30 relative border flex justify-between p-4 border-gray-200 rounded-xl">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gray-400 text-sm">Total Expense</h4>
              <p className="font-semibold text-xl pt-2">{totalExpense}</p>
            </div>
            <div className="text-sm text-gray-400 flex items-center gap-1">
              <CornerUpLeft size={16} color="blue" />
              <p>From Total Expense</p>
            </div>
          </div>
          <div className="bg-[#00802b] flex items-center justify-center w-12 h-12 rounded-full">
            <BanknoteArrowDown size={30} color="white" />
          </div>
          <div className="absolute bottom-0 left-0">
            <svg
              width="47"
              height="42"
              viewBox="0 0 47 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-44.4098 34.6272L-0.415983 0.450239L8.58423 32.9502L46.5841 43.4504L30.44 49.1958L-44.4098 34.6272Z"
                fill="#00802b"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
