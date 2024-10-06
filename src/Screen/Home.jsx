import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./LeftSide";  // Sidebar component

const Home = () => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Sidebar - 20% width */}
      <aside className="w-1/5 bg-gray-200 p-4">
        <LeftSide />
      </aside>

      {/* Main Content Area - 80% width */}
      <main className="w-4/5 p-6">
        <Outlet /> {/* This will render Main by default or other pages */}
      </main>
    </div>
  );
};

export default Home;
