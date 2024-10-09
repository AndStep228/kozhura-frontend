import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/style.scss";
import { AnimationProvider } from "./components/AnimationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AnimationProvider>
      <App />
    </AnimationProvider>
  </Router>
);
