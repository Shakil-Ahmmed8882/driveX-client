import { handleError } from "../../../../modules/carDetails/component/CarImage";
import { TCar } from "../../../../types/booking.type";
import carImg from "../../../../assets/images/home/featured/bg-car3.jpg";


const SearchResultCard = ({ item, searchValue }: { item: TCar, searchValue: string }) => {
  return (
    <div className={`group cursor-pointer transition-all duration-500 relative gap-4 bg-transparent rounded-lg min-h-32 overflow-hidden border p-3 `}>
      <img
        src={item.image || carImg}
        onError={handleError}
        className={`${searchValue ? "h-72" : ""} w-full object-cover object-top group-hover:scale-105 transition-all duration-500 rounded-lg`}
        alt={item.name}
      />
      <h2 className="text-xl pt-3 text-black group-hover:opacity-0 transition-all duration-500">{item.name}</h2>

      <div className={`
        bg-gradient-to-tr   from-[white] to-[#ffffffa7] shadow-lg
        ${searchValue ? "h-74" : ""}
        
        absolute -inset-2 group-hover:translate-x-0 translate-x-32 group-hover:opacity-100 opacity-0 transition-all duration-500 `} />
      <div className="group-hover:text-[black] group-hover:opacity-100 opacity-0 space-y-3 pt-2 absolute delay-100 group-hover:translate-y-0 translate-y-32 transition-all duration-500 bottom-24 left-2">
        <h2 className="text-xl">{item.name}</h2>
        <p className="text-[gray]">{item.description.split(" ").slice(0, 3)}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
