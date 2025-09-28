import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Table({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleRow = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!data || data.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">No data available</div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-right">Calories</th>
            <th className="px-4 py-2 text-right">Fat</th>
            <th className="px-4 py-2 text-right">Carbs</th>
            <th className="px-4 py-2 text-right">Protein</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <React.Fragment key={index}>
              {/* Main Row */}
              <tr
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleRow(index)}
              >
                <td className="px-4 py-2 text-center">
                  {openIndex === index ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </td>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2 text-right">{row.amount}</td>
                <td className="px-4 py-2 text-right">{row.category}</td>
                <td className="px-4 py-2 text-right">{row.carbs || "-"}</td>
                <td className="px-4 py-2 text-right">{row.protein || "-"}</td>
              </tr>

              {/* Collapsible Row */}
              {openIndex === index && (
                <tr>
                  <td colSpan="6" className="px-4 py-2 bg-gray-50">
                    <div className="p-2">
                      <p className="text-sm text-gray-600">{row.description}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
