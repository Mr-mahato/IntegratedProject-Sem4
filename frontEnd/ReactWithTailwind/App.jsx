import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Summer from "./pages/Summer";
import SummerLayout from "./layout/SummerLayout";
import SummerVegetable from "./pages/SummerVegetable";
import SummerFruits from "./pages/SummerFruits";
import SummerFlower from "./pages/SummerFlower";
import SummerVeg from "./pages/SummerVeg";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/summer" element={<Summer />} />
        <Route  element={<SummerLayout />} >
          <Route path="/summer/vegetable" element={<SummerVegetable/>}/>
          <Route path="/summer/vegetable/:vegetableName" element={<SummerVeg/>}/>
        </Route>
        {/* <Route path="/summer/fruit" element={<SummerFruits />} />
        <Route path="/summer/flower" element={<SummerFlower />} /> */}
      </Routes>
    </>
  );
}
