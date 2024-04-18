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
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { SessionProvider } from "./context/Session";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Query from "./pages/Query";
import ResolvedQuery from "./pages/ResolvedQuery";
export default function App() {
  return (
    <>
      <SessionProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/summer" element={<SummerLayout />}>
            <Route path="/summer" element={<Summer/>}/>
            <Route path="/summer/vegetable" element={<SummerVegetable header='vegetable'/>} />
            {/* this will show the vegetable */}
            <Route path="/summer/vegetable/:vegetableName" element={<SummerVeg/>} />
            <Route path="/summer/fruit" element={<SummerFruits/>} />
            {/* this will show the fruit */}
            <Route path="/summer/fruit/:fruitName" element={<ShowSummerFruit/>} />

            <Route path="/summer/flower" element={<SummerFlower/>} />
            {/* this will show the flower */}
            <Route path="/summer/flower/:flowerName" element={<ShowSummerFlower/>} />
          </Route>
          <Route path="/query" element={<Query />} />
          <Route path="/resolvedQuery" element={<ResolvedQuery />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </SessionProvider>
    </>
  );
}
