import React , {useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ShowSummerFruit() {
  const { fruitName } = useParams();
  const [fruits , setParticularFruits] = useState({});

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
    
    <div className="absolute mt-14 left-[14%]   max-h-full w-2/3 p-10 ">
       <div className="gap-4 p-5 border border-gray-200 rounded-lg"> 
       <div className="image-section"> 
        <img src={fruits.imageUrl} alt={fruits.name} className="max-w-lg mx-auto mb-10 h-auto rounded-md" />
      </div>

      <div className="content-section"> 
        <h1 className="text-2xl font-bold">{fruits.name}</h1> 
        <p className="mb-4">{fruits.description}</p> {/* Updated for description */}

        <div className="grid grid-cols-2 gap-4 mb-5"> {/* Info grid */}
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

      </div>
    </div>
  );
}
