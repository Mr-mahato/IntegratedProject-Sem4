import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SummerFruits() {
  const [fruits, setFruit] = useState([]);

  useEffect(() => {
    const getVegetable = async () => {
      try {
        const summerFruit = await axios.get("/api/summerFruit");
        setFruit(summerFruit.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);

  const vegeElem = fruits.map((val) => {
    return (
      <Link to={`/summer/fruit/${val.name}`}>
      <div
        key={val.name}
        className="max-w-md rounded-lg cursor-pointer shadow-md bg-white p-4"
      >
        <img
          src={val.imageUrl}
          alt="This is the vegetable "
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
    <div className="absolute top-0 w-full h-screen ">
      <div
        className=" h-full  flex rounded-md items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzdW1tZXIlMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 p-4 flex justify-center rounded-md ">
          <input
            type="text"
            placeholder="Enter the vegetable you like the most"
            className="w-2/3  px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="vegContainer p-10 my-1/2    flex flex-wrap gap-10 justify-center">
        {vegeElem}
      </div>
    </div>
  );
}
