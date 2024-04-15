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
import ShowSummerFruit from "./pages/ShowSummerFruit";
import ShowSummerFlower from "./pages/ShowSummerFlower";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/summer" element={<Summer />} />
        {/* this is the vegetable part */}
        <Route element={<SummerLayout header="Vegetable" />}>
          <Route path="/summer/vegetable" element={<SummerVegetable />} />
          <Route
            path="/summer/vegetable/:vegetableName"
            element={<SummerVeg />}
          />
        </Route>

        {/* this is the fruit part */}
        <Route element={<SummerLayout header="fruit" />}>
          <Route path="/summer/fruit" element={<SummerFruits />} />
          <Route
            path="/summer/fruit/:fruitName"
            element={<ShowSummerFruit />}
          />
        </Route>
        <Route element={<SummerLayout header="flower" />}>
          <Route path="/summer/flower" element={<SummerFlower />} />
          <Route
            path="/summer/flower/:flowerName"
            element={<ShowSummerFlower />}
          />
        </Route>
      </Routes>
    </>
  );
}
