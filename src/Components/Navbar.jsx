import React, { useState } from "react";
import { Menu } from "lucide-react";
import { House } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { EqualApproximately } from "lucide-react";
import { SquarePlus } from "lucide-react";
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
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              to={i?.href}
              key={i?.id}
            >
              <span className="flex items-center gap-2 pt-2 text-gray-800 font-semibold">
                <span>{i?.icon}</span>
                <span>{i?.navItem}</span>
              </span>
            </NavLink>
          ))}
        </ul>
      </div>
      {/* mobile Navbar */}
      <div className="flex items-center justify-between p-4 shadow-md bg-white lg:hidden">
        <h1 className="text-xl font-medium">My Expense Tracker</h1>
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bg-white min-h-screen w-72 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <ul className="mt-4 space-y-2">
            {navItems?.map((i) => (
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
                to={i?.href}
                key={i?.id}
                onClick={() => setOpen(false)}
              >
                <span className="flex items-center gap-2 pt-2 text-gray-800 text-lg font-semibold">
                  <span>{i?.icon}</span>
                  <span>{i?.navItem}</span>
                </span>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
