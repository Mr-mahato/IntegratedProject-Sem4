import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function SummerVegetable() {
  const [vegetable, setVegetable] = useState([]);
  const [searchField , setSearchField]  = useState("");
  useEffect(() => {
    const getVegetable = async () => {
      try {
        const rainyVegi = await axios.get("/api/rainyVegetable");
        setVegetable(rainyVegi.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);

  const vegeElem = vegetable
  .filter((item) => {
    if (!searchField) return true;
    if (item.name.toLowerCase().includes(searchField.toLowerCase())) {
      return true;
    }
    return false;
  }).map((val) => {
    return (
      <div>
        <Link to={`/rainy/vegetable/${val._id}`}>
         
            <div
              key={val.name}
              className=" my-4 rounded-lg cursor-pointer shadow-lg bg-white p-4 transition-transform duration-500 ease-in-out hover:shadow-md hover:scale-105"
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
        className="w-full h-1/2  flex  items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://friscofreshmarket.com/wp-content/uploads/2022/06/ways-to-make-summer-vegetables-appealing.jpg`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 mt-20 p-4 flex justify-center rounded-md ">
          <input
            type="text"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="Enter the vegetable you like the most"
            className="w-2/3  px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="vegContainer bg-[#324a34]  p-10 my-1/2 flex flex-wrap gap-10 justify-center">
        {vegeElem}
      </div>
      <Footer/>
    </div>
  );
}
