import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnalyticsProps } from "@vercel/analytics/*";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AnalyticsProps />
  </React.StrictMode>
);
