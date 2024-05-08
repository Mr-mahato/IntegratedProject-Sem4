import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function SummerFlower() {
  const [flower, setFlower] = useState([]);
  const [searchField , setSearchField] = useState('');
  useEffect(() => {
    const getFlower = async () => {
      try {
        const summerFlower = await axios.get("/api/flower");
        console.log(summerFlower.data)
        setFlower(summerFlower.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFlower();
  }, []);

  const flowElem = flower
  .filter((item) => {
    if (!searchField) return true;
    if (item.name.toLowerCase().includes(searchField.toLowerCase())) {
      return true;
    }
    return false;
  }).map((val) => {
    return (
      <Link to={`/summer/flower/${val._id}`}>
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
    <div className="absolute w-full h-full top-0">
      <div
        className=" w-full h-1/2  flex  items-center justify-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzdW1tZXIlMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 mt-20 p-4 flex justify-center rounded-md ">
          <input
            type="text"
            value={searchField}
            onChange={(e)=>setSearchField(e.target.value)}
            placeholder="Enter the Flower of which aroma you want"
            className="w-2/3  px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="p-10 my-1/2 bg-[#324a34]   flex flex-wrap gap-10 justify-center">
        {flowElem}
      </div>
      <Footer/>
    </div>
  );
}
