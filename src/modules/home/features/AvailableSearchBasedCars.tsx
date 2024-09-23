import { ShieldCloseIcon } from "lucide-react";
import Skeleton from "../components/Skeleton";
import { TCar } from "../../allCars/type";

  
  type Props = {
    setIsSearchAvailableCars: (p: boolean) => void;
    isSearchAvailableCars: boolean;
    isLoading: boolean;
    data: TCar[]; // Adjust the type here
  };
  


 const obj =  {
    "_id": "66ed8ec2daecf817fbddf07c",
    "name": "BMW X5",
    "isDeleted": false,
    "description": "Luxury SUV with powerful engine and spacious interior.",
    "color": "Black",
    "isElectric": false,
    "status": "available",
    "features": [
        "All-Wheel Drive",
        "Heated Seats",
        "Navigation"
    ],
    "pricePerHour": 60,
    "image": "https://i.pinimg.com/236x/50/3b/9b/503b9b6af0dc79244e9708f6466defbd.jpg",
    "type": "SUV",
    "location": "Dhaka"
}


export function AvailableSearchBasedCars({
    setIsSearchAvailableCars,
    isSearchAvailableCars, 
    isLoading,
    data
  }: Props) {
    return (
  <div className={`${isSearchAvailableCars ? "translate-y-20 opacity-100 visible" : "translate-y-full opacity-0 invisible"} transition-all duration-500 bg-white w-full fixed inset-0 bottom-0 z-[99] overscroll-auto`}>
  
        <ShieldCloseIcon
          onClick={() => setIsSearchAvailableCars(false)}
          className="text-red-600 absolute right-0 size-11"
        />
        <h1 className="text-center text-5xl">Availbale cars</h1>
        {isLoading && <Skeleton/>}
        {
            !isLoading &&
            
            <div className="grid grid-cols-3">
                <div>
                    <h1>{obj.name}</h1>
                </div>
            </div>
            
        }
      </div>
    );
  }
  