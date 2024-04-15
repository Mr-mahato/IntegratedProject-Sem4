import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SummerFlower() {
  const [flower, setFlower] = useState([]);

  useEffect(() => {
    const getFlower = async () => {
      try {
        const summerFlower = await axios.get("/api/flower");
        setFlower(summerFlower.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFlower();
  }, []);

  const flowElem = flower.map((val) => {
    return (
      <Link to={`/summer/flower/${val.name}`}>
      <div
        key={val.name}
        className="max-w-md rounded-lg cursor-pointer shadow-md bg-white p-4"
      >
        <img
          src={val.imageUrl}
          alt="This is the Flower "
          className="w-full h-48 object-cover rounded-t-lg transition hover:scale-110 duration-300 ease-in-out"
        />
        <div className="p-2">
          <h1 className="text-2xl  font-bold">{val.name}</h1>
        </div>
      </div>
      </Link>
    );
  });

  return (
    <div className="relative">
      <div
        className="relative top-0 w-full h-[500px]  flex rounded-md items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzdW1tZXIlMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 p-4 flex justify-center rounded-md ">
          <input
            type="text"
            placeholder="Enter the Flower of which aroma you want"
            className="w-2/3  px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="p-10 my-1/2 absolute z-20 top-[500px] flex flex-wrap gap-10 justify-center">
        {flowElem}
      </div>
    </div>
  );
}
