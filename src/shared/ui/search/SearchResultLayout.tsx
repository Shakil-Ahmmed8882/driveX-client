import { Close } from "../../../assets/icons/Icons";
import Container from "../../layouts/Container";
import SearchInput from "./ui/SearchInput";
import car from "../../../assets/images/home/banner/red-car.png";
import { useRef, useState } from "react";
import { useGetAllCarsQuery } from "../../../redux/features/cars/carsApi";
import {
  searchState,
  setSearchClick,
} from "../../../redux/features/global/global.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { DatePicker, TimePicker } from "antd";
import SearchResultCard from "./ui/SearchResultCard";
import { staticCars } from "./ui/staticCardData";
import { CarIcon } from "lucide-react";
import AnimateUp from "../../animations/AnimateUp";
import SearchCategoryAndSocal from "../../../stockComponents/SearchCategoryAndSocal";

const SearchResultLayout = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const searchLayoutRef = useRef(null);
  const isSearchClick = useAppSelector(searchState);
  const dispatch = useAppDispatch();

  if (isSearchClick) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // useClickOutside(searchLayoutRef, () => {
  //   dispatch(setSearchClick(false));
  // });

  const { data } = useGetAllCarsQuery(
    searchValue
      ? [
          { name: "limit", value: 20 },
          { name: "sort", value: "" },
          { name: "searchTerm", value: searchValue },
        ]
      : []
  );

  const carsToDisplay = searchValue ? data?.data || [] : staticCars;

  return (
    <div
      ref={searchLayoutRef}
      className={`${
        isSearchClick
          ? "h-[100vh] opacity-100 visible"
          : "h-[0vh] opacity-0 invisible"
      } transition-all duration-500 bg-[#f8f8f8] pb-32 pt-20 overflow-y-scroll w-full z-50 fixed top-0 right-0 left-0 overflow-x-hidden`}
    >
      <Container className="relative pt-24">
        <AnimateUp trigger={isSearchClick} delay={0.5}>
          <h1 className=" text-5xl sm:text-7xl w-1/2 font-bold text-[black] pb-8 lg:pb-0">
            Search <span className="text-primaryColor">DriveX</span> collection
          </h1>
        </AnimateUp>

        <CarIcon className="h-[600px] -z-10  w-[600px] text-[#d8d8d821] absolute -top-52 left-32" />

        <section className=" pt-10 lg:flex gap-8 items-center -mt-12">
          <div className="md:flex w-full sm:w-2/3  space-y-3 md:space-y-0 lg:h-14  flex-2 justify-between gap-3">
            <AnimateUp
              className="w-full h-full"
              trigger={isSearchClick}
              delay={0.6}
            >
              <SearchInput {...{ setSearchValue }} />
            </AnimateUp>
            <AnimateUp
              className="w-full  border-none sm:w-2/3 md:w-full h-12 md:h-14 lg:h-auto shadow-lg shadow-[#e3e3e3]"
              trigger={isSearchClick}
              delay={0.7}
            >
              <DatePicker className="w-full h-full" />
            </AnimateUp>
            <AnimateUp
              className="w-full h-12 md:h-14 lg:h-auto  bg-[#ffffff] shadow-lg shadow-[#e3e3e3]"
              trigger={isSearchClick}
              delay={0.8}
            >
              <TimePicker format={"HH:mm"} className="w-full h-full" />
            </AnimateUp>
          </div>
          <img src={car} alt="" className="hidden lg:flex" />
        </section>

        <button onClick={() => dispatch(setSearchClick(false))}>
          <Close className="absolute -top-4 right-10 text-[black] hover:bg-[white] bg-[#e5e5e5] transition-all duration-300 shadow-lg w-10 h-10 rounded-full p-2" />
        </button>

        <main className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-11 gap-y-">
          {carsToDisplay.map((item) => (
            <SearchResultCard {...{ item, searchValue }} key={item._id} />
          ))}
        </main>




      </Container>
        <SearchCategoryAndSocal/>
    </div>
  );
};

export default SearchResultLayout;
