import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data
const data = [
  { name: "Chrome", value: 6200 },
  { name: "Firefox", value: 900 },
  { name: "Edge", value: 450 },
  { name: "Safari", value: 1200 },
  { name: "Other", value: 250 },
];

const COLORS = ["#4285F4", "#FF7139", "#0A66C2", "#00A3E0", "#8884d8"];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    const pct = Math.round(percent * 10000) / 100;
    return (
      <div
        style={{
          background: "white",
          border: "1px solid #ddd",
          padding: 8,
          borderRadius: 6,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontWeight: 700 }}>{name}</div>
        <div>Visits: {value}</div>
        <div>{pct}%</div>
      </div>
    );
  }
  return null;
}

export default function StaticBrowserPie() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-center py-5">
        Bro<span className="text-blue-700">wser</span> Visits
      </h3>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="60%"   
            innerRadius="30%"  
            paddingAngle={3}
            label={({ percent, index }) =>
              hoveredIndex === index ? `${Math.round(percent * 100)}%` : ""
            }
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
