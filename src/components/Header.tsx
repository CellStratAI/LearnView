// import React, { Fragment, useState } from "react";

// import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Link from "next/link";

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navigation = [
//     {
//       name: "About Cellstrat",
//       href: "https://cellstrat.com/",
//     },
//     {
//       name: "Github",
//       href: "https://github.com/CellStratAI/LearnView",
//     },
//   ];

//   return (
//     <header className="p-4 ">
//       <div className="container flex justify-between items-center h-10 mx-auto">
//         <a href="#" className="flex items-center">
//           <img
//             src="/assets/images/logo_LV.png"
//             className="w-16 mr-2"
//             alt="Logo"
//           />
//           <h5 className="text-2xl font-bold text-white">
//             Learn
//             <span className="text-blue-600">View</span>
//           </h5>
//         </a>
//         <ul className="text-white items-stretch hidden space-x-3 lg:flex">
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="https://github.com/CellStratAI/LearnView"
//               className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
//               Github
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="https://cellstrathub.com/"
//               className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
//               Cellstrat
//             </a>
//           </li>
//           <li className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="https://imagineview.com/"
//               className="flex items-center px-4 -mb-1 text-lg font-semibold hover:text-blue-400">
//               ImagineView
//             </a>
//           </li>
//         </ul>

//         <button className="p-4 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <XIcon className="w-6 h-6 text-gray-100" aria-hidden="true" />
//           ) : (
//             <MenuIcon className="w-6 h-6 text-gray-100" aria-hidden="true" />
//           )}
//         </button>
//       </div>

//       {/* Dropdown menu */}
//       <Transition
//         as={Fragment}
//         show={isOpen}
//         enter="transition ease-out duration-200"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-150"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95">
//         <Popover className="lg:hidden">
//           <Popover.Panel className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right">
//             <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//               {navigation.map((item) => (
//                 <div key={item.name} className="px-5 py-3">
//                   <a
//                     href={item.href}
//                     className="text-base font-medium text-gray-900 hover:text-gray-700">
//                     {item.name}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </Popover.Panel>
//         </Popover>
//       </Transition>
//     </header>
//   );
// };

// export default Menu;

import React, { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Menu = () => {
  const navigation = [
    {
      name: "Github",
      href: "https://github.com/CellStratAI/LearnView",
    },
    {
      name: "Cellstrat",
      href: "https://cellstrat.com/",
    },
    {
      name: "ImagineView",
      href: "https://imagineview.com/",
    },
  ];

  return (
    <div className="bg-transparent">
      <Popover>
        <div className="pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" className="flex items-center  ">
                  <img
                    src="/assets/images/Logo_LV.png"
                    className="w-10 mr-2"
                    alt="Logo"
                  />
                  <h5 className="text-4xl font-bold text-white">
                    Learn
                    <span className="text-blue-600">View</span>
                  </h5>
                </a>

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={` rounded-md p-2 inline-flex items-center justify-center text-gray-400 `}>
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-100 hover:text-blue-600">
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div
              className={`rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden`}>
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <a href="/" className="flex items-center ">
                    <img
                      src="/assets/images/Logo_LV.png"
                      className="w-10 mr-2"
                      alt="Logo"
                    />
                    <h5 className="text-2xl font-bold text-white">
                      Learn
                      <span className="text-blue-600">View</span>
                    </h5>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-40 `}>
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md font-medium text-gray-100 hover:bg-blue-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Menu;
