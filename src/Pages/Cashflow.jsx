import axios from "axios";
import React, { useEffect, useState } from "react";
import Total from "../Components/Total";
import Table from "../Components/Table";

export default function Cashflow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://cashflow-client-six.vercel.app/api/allData");
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
        <Total data={data}/>
       <div className="w-[400px] px-3 sm:w-[600px] mx-auto md:w-[800px] lg:w-full">
         <Table data={data}/>
       </div>
      </div>
    </div>
  );
}
