// src/components/Header.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaVideo, FaBell, FaUserCircle } from "react-icons/fa"; // Using react-icons for YouTube-like icons
import { Youtube_Logo } from "../utils/Data";
import { YoutubeContext } from "./YoutubeContext";

const Header = () => {

  // Searching feed for youtube using context
  const {search,setSearch}= useContext(YoutubeContext)

  // const {search,setSearch} = useContext(YoutubeContext);
  const [Csearch, setCsearch] = useState("");

  console.log(search)
  


  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full ">
      <div className="flex items-center justify-between p-4 w-full mx-auto">
        {/* YouTube Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Youtube_Logo} alt="YouTube Logo" className="w-24" />
        </Link>

        {/* Search Bar */}
        <div className="hidden  md:flex md:flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none text-slate-600 text-sm "
            onChange={(e) => {
              setCsearch(e.target.value);
            }}
          />
          <button
          onClick={()=>{setSearch(Csearch)}}
           className="bg-orange-500 px-4 text-white p-2 rounded-r-full flex items-center">
            <FaSearch />
            
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaVideo className="text-xl" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaBell className="text-xl" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FaUserCircle className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
