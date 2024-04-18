import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Query from "./Query";
export default function ShowSummerFruit() {
  const { fruitName } = useParams();
  const [fruits, setParticularFruits] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const getVegetable = async () => {
      try {
        const summerVegi = await axios.get(`/api/fruit/${fruitName}`);
        setParticularFruits(summerVegi.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);

  return (
    <div className="h-full relative w-full  p-10 ">
      <div className="gap-4 h-full relative border border-gray-200 p-4 rounded-lg">
        <div className="relative">
          <img
            src={fruits.imageUrl}
            alt={fruits.name}
            className="w-full h-[20rem]  object-cover rounded-md"
          />
          <h1 className="absolute top-0">WaterMelon</h1>
        </div>

        <div className="content-section">
          <h1 className="text-2xl font-bold">{fruits.name}</h1>
          <p className="mb-4">{fruits.description}</p>{" "}
          {/* Updated for description */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {" "}
            {/* Info grid */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Origin</h2>
              <p>{fruits.origin}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Nutrition</h2>
              <p>{fruits.nutrition}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Uses</h2>
              <p>{fruits.uses}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Cultivation</h2>
              <p>{fruits.cultivation}</p>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p>{fruits.instructions}</p>
          </div>
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-2">Watering</h2>
            <p>{fruits.water}</p>
          </div>
        </div>
        <button
          onClick={() => setisOpen(!isOpen)}
          className="text-2xl sticky right-0 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {isOpen? "Close Query" : "Ask Query"}
        </button>
        {isOpen && <Query />}
      </div>
    </div>
  );
}
