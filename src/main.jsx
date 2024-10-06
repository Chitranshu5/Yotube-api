import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Page_Routes from "./Module/Page_Routes.jsx";
import { YoutubeProvider } from "./Module/YoutubeContext.jsx";

createRoot(document.getElementById("root")).render(
  <YoutubeProvider>
    <Page_Routes />
  </YoutubeProvider>
);
