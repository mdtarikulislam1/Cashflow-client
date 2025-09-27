import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cashflow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/allData");
        setData(response.data.data); 
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
