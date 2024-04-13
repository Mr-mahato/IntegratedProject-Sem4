import React from "react";
import { Outlet , Link } from "react-router-dom";
export default function SummerLayout() {
  return (
    <>
      <div className="w-4/5 absolute z-10 left-[10%] flex justify-between items-center bg-green-500 p-4 rounded-lg">
        <h1 className="text-white text-lg">AgroGuide</h1>
        <Link to={'/summer/vegetable'}>
        <h2 className="text-white text-lg">Summer Vegetable</h2>
        </Link>
      </div>
      <Outlet />
      {/* <Outlet/> */}
    </>
  );
}
