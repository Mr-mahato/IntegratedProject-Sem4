import React , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Query from "./Query";
export default function ShowSummerFlower() {
  const [isOpen, setisOpen] = useState(false);
  const { flowerName } = useParams();
  const [flower , setParticularFlower] = useState({});

  useEffect(() => {
    const getFlower = async () => {
      try {
        const summerFlower = await axios.get(`/api/flower/${flowerName}`);
        setParticularFlower(summerFlower.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getFlower();
  }, []);


  return (
    
    <div className="absolute mt-14 left-[14%]   max-h-full w-2/3 p-10 ">
       <div className="gap-4 p-5 border border-gray-200 rounded-lg"> 
       <div className="image-section"> 
        <img src={flower.imageUrl} alt={flower.name} className="max-w-lg mx-auto mb-10 h-auto rounded-md" />
      </div>

      <div className="content-section"> 
        <h1 className="text-2xl font-bold">{flower.name}</h1> 
        <p className="mb-4">{flower.description}</p> {/* Updated for description */}

        <div className="grid grid-cols-2 gap-4 mb-5"> {/* Info grid */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Origin</h2>
            <p>{flower.origin}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Uses</h2>
            <p>{flower.uses}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Cultivation</h2>
            <p>{flower.cultivation}</p>
          </div>
        </div>

        <div className="mb-5"> 
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p>{flower.instructions}</p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">Watering</h2> 
          <p>{flower.water}</p>
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
