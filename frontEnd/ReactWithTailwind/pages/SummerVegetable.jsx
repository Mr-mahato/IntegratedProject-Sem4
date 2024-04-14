import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SummerVegetable() {
  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    const getVegetable = async () => {
      try {
        const summerVegi = await axios.get("/api/summerVegetable");
        setVegetable(summerVegi.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);

  const vegeElem = vegetable.map((val) => {
    console.log(val);
    return (
      
      <Link to={`/summer/vegetable/${val.name}`}>
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
    <div className="summerVegeContainer relative">
      <div
        className="relative top-0 w-full h-[500px]  flex rounded-md items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://friscofreshmarket.com/wp-content/uploads/2022/06/ways-to-make-summer-vegetables-appealing.jpg`,
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
      <div className="vegContainer  my-1/2 absolute z-20 top-[500px] flex flex-wrap gap-10 justify-center">
        {vegeElem}
      </div>
    </div>
  );
}
