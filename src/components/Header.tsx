import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Menu = () => {
  const navigation = [
    {
      name: "About Cellstrat",
      href: "https://cellstrat.com/",
    },
    {
      name: "Github",
      href: "https://github.com/CellStratAI/LearnView",
    },
  ];

  return (
    <header className="p-4 ">
      <div className="container flex justify-between items-center h-10 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="/assets/images/logo_LV.png"
            className="w-16 mr-2"
            alt="Logo"
          />
          <h5 className="text-2xl font-bold text-white">
            Learn
            <span className="text-blue-600">View</span>
          </h5>
        </a>
        <ul className="text-white items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/CellStratAI/LearnView"
              className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
              Github
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://cellstrathub.com/"
              className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
              Cellstrat
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://imagineview.com/"
              className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
              ImagineView
            </a>
          </li>
        </ul>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Menu;
