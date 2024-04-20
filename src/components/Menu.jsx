import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Initially select the first tab

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
  ]; // Your array of tab names

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  return (
    <nav>
      <ul className="flex flex-col items-center md:flex-row justify-center gap-3">
        {tabsArray.map((tab, index) => (
          <Link
            className={`${
              selectedTab === index ? "border-b-4 border-gray-600" : "none"
            }  hover:scale-[1.1]`}
            to={tab.tabPath}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab.tabName}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
