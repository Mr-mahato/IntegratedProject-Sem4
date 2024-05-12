import React from "react";
import Header from "../pages/Header";
import { Outlet, Link, useParams } from "react-router-dom";
export default function WinterLayout({ header }) {
  const { vegetableName } = useParams();
  const {fruitName} = useParams();
  const {flowerName} = useParams();
  console.log(vegetableName);
  return (
    <>
     <Header/>
      <Outlet />
      {/* <Outlet/> */}
    </>
  );
}
