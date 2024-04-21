import React from "react";
import { Link, useLocation } from "react-router-dom";
const Menu = ({ onTabChange }) => {
  const location = useLocation();
  const tabsArray = [
    {
      tabName: "Home",
      tabPath: "/",
    },
    {
      tabName: "About",
      tabPath: "/about",
    },
    {
      tabName: "Contact",
      tabPath: "/contact",
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col items-center md:flex-row justify-center gap-4">
        {tabsArray.map((tab, index) => (
          <Link
            className={`${
              location.pathname === tab.tabPath
                ? "border-b-2 border-gray-600"
                : "none"
            }  hover:scale-[1.1] transition ease-in delay-150 duration-300`}
            to={tab.tabPath}
            key={index}
            onClick={onTabChange}
          >
            {tab.tabName}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
