import React , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Query from "./Query";
export default function SummerVeg() {
  const { vegetableName } = useParams();
  const [vegetable , setParticularVegetable] = useState({});
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const getVegetable = async () => {
      try {
        const summerVegi = await axios.get(`/api/vegetable/${vegetableName}`);
        setParticularVegetable(summerVegi.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getVegetable();
  }, []);


  return (
    
    <div className="absolute mt-14 left-[14%]    max-h-full w-2/3 p-10 ">
       <div className="gap-4 p-5 border border-gray-200 rounded-lg"> 
       <div className="image-section"> 
        <img src={vegetable.imageUrl} alt={vegetable.name} className="max-w-lg mx-auto mb-10 h-auto rounded-md" />
      </div>

      <div className="content-section"> 
        <h1 className="text-2xl font-bold">{vegetable.name}</h1> 
        <p className="mb-4">{vegetable.description}</p> {/* Updated for description */}

        <div className="grid grid-cols-2 gap-4 mb-5"> {/* Info grid */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Origin</h2>
            <p>{vegetable.origin}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Nutrition</h2>
            <p>{vegetable.nutrition}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Uses</h2>
            <p>{vegetable.uses}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Cultivation</h2>
            <p>{vegetable.cultivation}</p>
          </div>
        </div>

        <div className="mb-5"> 
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <p>{vegetable.instructions}</p>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">Watering</h2> 
          <p>{vegetable.water}</p>
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
