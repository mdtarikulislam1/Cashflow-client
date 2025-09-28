import React, { useState } from "react";
import { ChevronDown, ChevronRight, EllipsisVertical } from "lucide-react";

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
    <div className="overflow-x-auto overflow-y-auto text-nowrap">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-right">Date</th>
            <th className="px-4 py-2 text-right">Category</th>
            <th className="px-4 py-2 text-right">Method</th>
            <th className="px-4 py-2 text-right">Amount</th>
            <th className="px-4 py-2">Option</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <React.Fragment key={index}>
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
                <td className="px-4 py-2 text-right">{row?.addDate}</td>
                <td className="px-4 py-2 text-right">{row?.category}</td>
                <td className="px-4 py-2 text-right">{row.method || "-"}</td>
                <td className="px-4 py-2 text-right">{row.amount || "-"}</td>
                <td className="px-4 py-2 flex justify-end">
                  <EllipsisVertical size={20} />
                </td>
              </tr>

              {openIndex === index && (
                <tr>
                  <td colSpan="6" className="px-4 py-2">
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
