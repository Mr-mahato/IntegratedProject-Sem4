import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Summer from "./pages/Summer";
import SummerLayout from "./layout/SummerLayout";
import SummerVegetable from "./pages/SummerVegetable";
import SummerFruits from "./pages/SummerFruits";
import SummerFlower from "./pages/SummerFlower";
import ShowSummerItem from "./pages/ShowSummerItem";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { SessionProvider } from "./context/Session";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Query from "./pages/Query";
import Bot from "./pages/Bot";
import ResolvedQuery from "./pages/ResolvedQuery";
import SearchView from "./pages/SearchView";
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
            <Route path="/summer" element={<Summer />} />
            <Route
              path="/summer/vegetable"
              element={<SummerVegetable header="vegetable" />}
            />
            {/* this will show the vegetable */}
            <Route
              path="/summer/vegetable/:vegetableName"
              element={<ShowSummerItem fn="vegetable" FN="vegetableName" />}
            />
            <Route path="/summer/fruit" element={<SummerFruits />} />
            {/* this will show the fruit */}
            <Route
              path="/summer/fruit/:fruitName"
              element={<ShowSummerItem fn="fruit" FN="fruitName" />}
            />
             
            

            <Route path="/summer/flower" element={<SummerFlower />} />
            {/* this will show the flower */}
            <Route
              path="/summer/flower/:id"
              element={<ShowSummerItem fn="flower" FN="id" />}
            />
          </Route>
          <Route path="/" element={<SummerLayout />}>
          <Route
              path="/search/:id"
              element={<SearchView />}
            />
            </Route>
          <Route path="/query" element={<Query />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/resolvedQuery" element={<ResolvedQuery />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SessionProvider>
    </>
  );
}
