import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function SummerLayout({header}) {
  return (
    <>
      <div className="container max-h-full relative">
        <div className="w-4/5 absolute z-10 left-[10%] flex justify-between items-center bg-green-500 p-4 rounded-lg">
          <Link to="/summer">
          <h1 className="text-white text-lg">AgroGuide</h1>
          </Link>
          <Link to={`/summer/${header}`}>
            <h2 className="text-white text-lg">Summer {header}</h2>
          </Link>
        </div>
      </div>
      <Outlet />
      {/* <Outlet/> */}
    </>
  );
}
