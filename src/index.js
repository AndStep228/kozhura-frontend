// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/style.scss";
import { AnimationProvider } from "./components/AnimationContext";
import { AuthProvider } from "./components/AuthContext"; // Импортируем AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AnimationProvider>
          <App />
        </AnimationProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
