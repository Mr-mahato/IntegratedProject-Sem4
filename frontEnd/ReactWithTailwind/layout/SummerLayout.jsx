import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";
export default function SummerLayout({ header }) {
  const { vegetableName } = useParams();
  const {fruitName} = useParams();
  const {flowerName} = useParams();
  console.log(vegetableName);
  return (
    <>
      <div className="container max-h-full relative ">
        <div
          className={`w-full absolute z-10  left-7 flex ${
            (vegetableName || fruitName || flowerName) ? "text-black" : "text-white"
          }  justify-between items-center  p-4 rounded-lg`}
        >
          <Link to="/summer">
            <h1 className=" text-2xl">AgroGuide</h1>
          </Link>
          <div className="flex gap-2">
            <Link to="/aboutA">
              <h1 className=" text-lg">About us</h1>
            </Link>
            <Link to={`/summer/${header}`}>
              <h2 className=" text-lg">{header}</h2>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      {/* <Outlet/> */}
    </>
  );
}
