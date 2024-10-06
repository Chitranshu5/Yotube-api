import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";
import Contact from "./Contact";
import Service from "./Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,  // This makes Main the default route
        element: <Main />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);

const Screens = () => {
  return <RouterProvider router={router} />;
};

export default Screens;
