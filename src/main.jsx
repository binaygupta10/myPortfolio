import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Static capture mode for screenshots: disables smooth scroll + reveal gating.
if (new URLSearchParams(window.location.search).has("snap")) {
  document.documentElement.classList.add("snap");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
