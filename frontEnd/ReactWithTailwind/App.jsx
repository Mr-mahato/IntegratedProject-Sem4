import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Summer from "./pages/Summer";
export default function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/summer" element={<Summer/>}/>
      </Routes>
    </>
  );
}
