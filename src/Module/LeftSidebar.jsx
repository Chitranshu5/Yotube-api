// src/components/LeftSidebar.js
import React from "react";
import {
  FaHome,
  FaFire,
  FaPlayCircle,
  FaHistory,
  FaMusic,
  FaFilm,
  FaTv,
  FaGamepad,
  FaGlobe,
} from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { IoMdList } from "react-icons/io";
import { BsFillHeartFill, BsFillTagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Sidebar configuration for items
const sideBarItems = [
  {
    category: "Main Navigation",
    items: [
      { path: "/", name: "Home", icon: <FaHome /> },
      { path: "/trending", name: "Trending", icon: <FaFire /> },
      { path: "/subscriptions", name: "Subscriptions", icon: <FaPlayCircle /> },
      { path: "/history", name: "History", icon: <FaHistory /> },
    ],
  },
  {
    category: "Library & Playlists",
    items: [
      { path: "/library", name: "Library", icon: <HiLibrary /> },
      { path: "/playlists", name: "Playlists", icon: <IoMdList /> },
    ],
  },
  {
    category: "Explore",
    items: [
      { path: "/music", name: "Music", icon: <FaMusic /> },
      { path: "/movies", name: "Movies", icon: <FaFilm /> },
      { path: "/tvshows", name: "TV Shows", icon: <FaTv /> },
      { path: "/gaming", name: "Gaming", icon: <FaGamepad /> },
      { path: "/news", name: "News", icon: <FaGlobe /> },
    ],
  },
  {
    category: "More from YouTube",
    items: [
      { path: "/liked", name: "Liked Videos", icon: <BsFillHeartFill /> },
      { path: "/tags", name: "Tags", icon: <BsFillTagFill /> },
    ],
  },
];

// Reusable SidebarItem Component
const SidebarItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <li
      className="flex items-center p-2 hover:bg-gray-200 rounded cursor-pointer"
      onClick={() => navigate(item.path)}
    >
      <span className="text-xl mr-3">{item.icon}</span>
      <span>{item.name}</span>
    </li>
  );
};

const LeftSidebar = () => {
  return (
    <div className="border-r border-gray-300 w-full h-screen overflow-auto">
      <div className="p-4">
        {/* App Logo / Title */}
        <div className="text-lg font-semibold mb-4">YouTube</div>

        {/* Render Sidebar Categories */}
        {sideBarItems.map((section, index) => (
          <div key={index}>
            {/* Category Title */}
            <div className="text-gray-500 mt-4 mb-2 text-sm">
              {section.category}
            </div>
            <ul className="space-y-2">
              {/* Render Sidebar Items */}
              {section.items.map((item, idx) => (
                <SidebarItem key={idx} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
