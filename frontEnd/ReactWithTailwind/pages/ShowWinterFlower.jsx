import React, { useEffect, useState , useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Query from "./Query";
import { SessionContext } from "../context/Session";
import Footer from './Footer'
export default function ShowWinterFlower({fn , FN}) {
  const {session} = useContext(SessionContext);
  let name = useParams();
  name = name[`${FN}`];
  console.log(fn , name);
  const [fruits, setParticularFruits] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const getVegetable = async () => {
      try {
        const winterVegi = await axios.get(`/api/${fn}/${name}`);
        console.log(winterVegi.data);
        setParticularFruits(winterVegi.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);

  const handelQuery = ()=>{
    console.log(session);
    if(!session)
    {
      return alert('please logged in');
    }
    setisOpen(!isOpen);
  }

  return (
    <div className="min-h-screen w-full    ">
      <div className=" relative border bg-[#324a34]   border-gray-200  ">
        <div className="relative">
          <img
            src={fruits.imageUrl}
            alt={fruits.name}
            className="w-full h-[20rem]  object-cover"
          />
        </div>

        <div className=" bg-white relative top-10 rounded-md p-10 w-3/4  shadow-lg mx-auto mb-20">
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
          <button
          onClick={handelQuery}
          className="text-2xl sticky right-0 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {isOpen? "Close Query" : "Ask Query"}
        </button>
        {isOpen && <Query />}
        </div>
        <Footer/>
      </div>
    </div>
  );
}
