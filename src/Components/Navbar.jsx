import React, { useState } from "react";
import {
  Menu,
  X,
  House,
  ArrowLeftRight,
  EqualApproximately,
  SquarePlus,
} from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      navItem: "Home",
      href: "/",
      icon: <House />,
    },
    {
      id: 2,
      navItem: "My income & expense",
      href: "/Cashflow",
      icon: <ArrowLeftRight />,
    },
    {
      id: 3,
      navItem: "About",
      href: "/about",
      icon: <EqualApproximately />,
    },
    {
      id: 4,
      navItem: "AddData",
      href: "/addData",
      icon: <SquarePlus />,
    },
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 z-10 min-h-screen bg-gray-50 min-w-[250px] border-r-2 border-gray-200 shadow p-3 hidden lg:block">
        <ul className="mt-4 space-y-2">
          {navItems?.map((i) => (
            <NavLink
              key={i?.id}
              to={i?.href}
              className={({ isActive }) =>
                `flex items-center gap-2 pt-2 font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-900"
                }`
              }
            >
              <span>{i?.icon}</span>
              <span>{i?.navItem}</span>
            </NavLink>
          ))}
        </ul>
      </div>
      {/* mobile Navbar */}
      <div>
        <div className="min-w-full bg-white border-b border-gray-100 shadow fixed top-0 right-0 left-0 flex items-center justify-between z-50 px-2 py-3 lg:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-6 h-6" /> 
            ) : (
              <Menu className="w-6 h-6" /> 
            )}
          </button>
          <h1 className="flex items-center font-bold text-2xl">
            <span>Cash</span>
            <span className="text-blue-800">Flow</span>
          </h1>
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
            </div>
          </div>
        </div>
        
        {open && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white min-h-screen w-72 shadow-lg z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 mt-20">
          <ul className="mt-4 space-y-2">
            {navItems?.map((i) => (
              <NavLink
                key={i?.id}
                to={i?.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 pt-2 font-semibold ${
                    isActive ? "text-blue-600" : "text-gray-900"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <span>{i?.icon}</span>
                <span>{i?.navItem}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
