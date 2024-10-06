import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaPhone, FaTools, FaInfoCircle } from "react-icons/fa"; // Import icons from react-icons

const Boarding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items with icons
  const menuItems = [
    { name: "Contact", path: "/contact", icon: <FaPhone /> },
    { name: "Service", path: "/service", icon: <FaTools /> },
    { name: "About Us", path: "/aboutus", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-orange-500">
          CTR{" "}
          <span className="bg-orange-500 py-1 px-2 rounded-md text-white shadow-md">
            Store
          </span>
        </h1>
        {/* Menu button for smaller screens */}
        <button
          className="text-white text-xl md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close Menu" : "Menu"}
        </button>
      </nav>

      <div className="flex flex-grow">
        {/* Sidebar / Menu Bar */}
        <aside
          className={`bg-gray-800 p-6 shadow-lg   md:w-1/4 ${
            isMenuOpen ? "block" : "hidden"
          } md:block fixed md:relative inset-y-0 left-0 w-full md:w-auto z-40 transition-transform duration-300`}
        >
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.path} className="flex items-center">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-orange-500 py-2 px-4 rounded-md flex items-center space-x-2"
                      : "text-gray-400 hover:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                  }
                  onClick={toggleMenu}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 bg-gray-100 md:ml-1/4 h-screen overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Boarding;
