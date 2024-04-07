import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
