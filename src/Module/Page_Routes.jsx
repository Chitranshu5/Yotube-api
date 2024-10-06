import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Boarding from "./Boarding";
import Feed from "./Feed";
import Subscription from "../SubModule/Subscription";
import Trending from "../SubModule/Trending";
import Music from "../SubModule/Explore/Music";
import Movies from "../SubModule/Explore/Movies";
import TvShow from "../SubModule/Explore/TvShow";
import Gaming from "../SubModule/Explore/Gaming";
import News from "../SubModule/Explore/News";
import VideoPage from "./VideoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Boarding />,
    children: [
      {
        index: true, // This makes Main the default route
        element: <Feed />,
      },
      {
        path: "contact",
        element: <Subscription />,
      },
      {
        path:"video/:videoId",
        element:<VideoPage/>
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "tvshows",
        element: <TvShow />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

const Page_Routes = () => {
  return <RouterProvider router={router} />;
};

export default Page_Routes;
