import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router"; // react-router-dom ব্যবহার করুন
import Footer from "../Components/Footer";

export default function Rootlayouts() {
  return (
    <div className="grid lg:grid-cols-[270px_1fr] min-h-screen">
      
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <div className="min-h-screen mt-24 lg:mt-3 max-w-11/12 ">
          <Outlet />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
