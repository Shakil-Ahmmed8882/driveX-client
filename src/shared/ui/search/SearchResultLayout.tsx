import { Close } from "../../../assets/icons/Icons";
import Container from "../../layouts/Container";
import SearchInput from "./ui/SearchInput";
import carImg from "../../../assets/images/home/featured/bg-car3.jpg";
import { useEffect, useRef, useState } from "react";
import { useGetAllCarsQuery } from "../../../redux/features/cars/carsApi";
import { Key } from "lucide-react";
import { handleError } from "../../../modules/carDetails/component/CarImage";
import useClickOutside from "../../../hooks/useClickOutside";

const SearchResultLayout = ({
  isSearchClick,
  setSearchClick,
}: {
  isSearchClick: boolean;
  setSearchClick: (param: boolean) => void;
}): JSX.Element => {
  const [searchValue, setSearchValut] = useState("");
  const searchLayoutRef = useRef<HTMLElement>(null)

  if(isSearchClick) {
    document.body.style.overflow = 'hidden'
  }
  useClickOutside(searchLayoutRef,()=>{setSearchClick(false)})

  

  const { data } = useGetAllCarsQuery([
    { name: "limit", value: 4 },
    { name: "searchTerm", value: searchValue },
  ]);

  return (
    <div
    ref={searchLayoutRef}
      className={`${
        isSearchClick
          ? "h-[80vh] opacity-100 visible"
          : "h-[0vh] opacity-0 invisible"
      } transition-all duration-500  bg-[#313131] pb-32 pt-20 overflow-y-scroll w-full z-50 fixed top-0 right-0 left-0`}
    >
      <Container className="relative pt-24">



        <SearchInput {...{ setSearchValut }} />
        <button onClick={() => setSearchClick(false)}>
          <Close className="absolute -top-4 right-10" />
        </button>

        <main className="grid grid-cols-2 gap-20 pt-11">
          {data?.data?.map((item) => (
            <SearchResultCard {...{ item }} Key={item._id} />
          ))}
        </main>
      </Container>
    </div>
  );
};

export default SearchResultLayout;

const SearchResultCard = ({ item }) => {
  return (
    <div className="group cursor-pointer overflow-y-hidden relative gap-4 bg-[#1a1919]  h-52 rounded-lg">
      <img src={item.image || carImg} alt="" className="w-full  object-cover"  onError={handleError}/>
      <div className="absolute inset-0   group-hover:translate-y-80 translate-y-0 transition-all duration-500 bg-[#00000093] "></div>
      
      <div className=" space-y-3 pt-2  absolute delay-100  group-hover:translate-y-80 translate-y-0 transition-all duration-500  bottom-4 left-2">
        <h2 className="text-xl ">{item.name}</h2>
        <p className="text-[#b7b7b7]">{item.description} </p>
      </div>
    </div>
  );
};
