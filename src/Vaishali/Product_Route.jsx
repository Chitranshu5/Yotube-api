import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Boarding from "../Module/Boarding";
import Trending from "../SubModule/Trending";
import Subscription from "../SubModule/Subscription";
import Service from "./Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Boarding />,
    children: [
      {
        path: "trending",  // Corrected path
        element: <Trending />,
      },
      {
        path: "subscription",  // Fixed typo in path
        element: <Subscription />,
      },
      {
        path:"service",
        element:<Service/>
      }
    ],
  },
]);

const Product_Route = () => {
  return <RouterProvider router={router} />;
};

export default Product_Route;
