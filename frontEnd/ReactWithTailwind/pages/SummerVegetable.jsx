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
    return (
      <div>
        <Link to={`/summer/vegetable/${val.name}`}>
         
            <div
              key={val.name}
              className=" my-4 rounded-lg cursor-pointer shadow-lg bg-white p-4 transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <img
                src={val.imageUrl}
                alt="This is the vegetable "
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-2">
                <h1 className="text-2xl font-bold text-gray-800">{val.name}</h1>
              </div>
            </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="summerVegeContainer w-full h-screen absolute top-0">
      <div
        className="w-full h-full  flex rounded-md items-center justify-center "
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
      <div className="vegContainer  mt-20 flex flex-wrap gap-8 justify-center">
        {vegeElem}
      </div>
    </div>
  );
}
