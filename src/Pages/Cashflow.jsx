import axios from "axios";
import React, { useEffect, useState } from "react";
import Total from "../Components/Total";
import Table from "../Components/Table";
import MonthlyChart from "../Components/MonthlyChart";
import StaticBrowserPie from "../Components/StaticBrowserPie";

export default function Cashflow() {
  const [data, setData] = useState([]);

  // Fetch data
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cashflow-server-blue.vercel.app/api/allData"
        );
        setData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Total data={data} />
        <div className="w-[400px] px-3 sm:w-[600px] mx-auto md:w-[800px] lg:w-full mt-5">
          <h4 className="text-center font-bold text-2xl py-4">
            Total His<span className="text-blue-700">tory</span>
          </h4>
          <Table data={data} />
          <div className="my-10 flex flex-col justify-center gap-8 lg:flex-row">
           <div className="my-8">  <MonthlyChart data={data}/></div>
            <StaticBrowserPie/>
          </div>
        </div>
      </div>
    </div>
  );
}
