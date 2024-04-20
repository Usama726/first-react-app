import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className="bg-gray-200 drop-shadow-lg sticky top-0 px-4">
        <div className="container mx-auto flex items-center justify-between h-16 ">
          <Link
            to="/"
            className="animate-pulse flex-shrink-0 font-bold tracking-wider text-2xl font-serif italic text-shadow text-shadow-gray-400 text-shadow-x-3 text-shadow-y-4"
          >
            TextUtils
          </Link>
          <div className="hidden md:flex">
            <Menu />
          </div>
          <button
            type="button"
            className="bg-gray-900 inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {showMobileMenu && <Menu />}
      </nav>
    </>
  );
}

export default Header;
