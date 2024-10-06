import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const Boarding = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky header always on the top */}
      <Header />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden ">
        <div className="hidden lg:block  h-screen overflow-y-auto  ">
          <LeftSidebar />
        </div>

        <div className="flex-1 h-screen overflow-y-auto ">
          <Outlet />
        </div>
   
      </div>
    </div>
  );
};

export default Boarding;
