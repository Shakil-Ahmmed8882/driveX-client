import { Dispatch, SetStateAction, useState } from "react";
import { useGetAllCarsQuery } from "../../redux/features/cars/carsApi";
import Container from "../../shared/layouts/Container";
import SearchInput from "../../shared/ui/search/ui/SearchInput";
import Car from "./compoents/Car";
import { TCar } from "./type";
import { DSpinner } from "../../shared/ui/loading/DSpinner";

export default function AllCarsLayout() {
  const [searchValue, setSearchValue] = useState("");
  const { data: cardData, isLoading } = useGetAllCarsQuery([
    { name: "searchTerm", value: searchValue },
  ]);

  if (isLoading) return <DSpinner />;

  const totalCars = cardData?.data?.length as number;

  return (
    <Container>
      <div className="relative h-[310px] flex items-center justify-center z-10 px-3 ">
        <img
          className="w-full h-full absolute object-cover"
          src="https://i.pinimg.com/564x/77/39/8c/77398c36340a4e48172dab6012ea9b59.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 primaryGradient "></div>
        <div className="relative z-20 flex flex-col sm:w-1/2 text-center space-y-4">
          <h1 className="text-4xl pt-8">All Cars</h1>
          <p className="description mt-2 ">
            Drivex provides wide ransge of high quality vehicles.
          </p>

          <Search {...{ setSearchValue, searchValue, totalCars }} />
        </div>
      </div>
      <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-16 py-8 ">
        {cardData?.data?.map((car: TCar) => (
          <Car key={car?._id} car={car} />
        ))}
      </div>
    </Container>
  );
}

type TSearchProps = {
  totalCars: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
};

const Search = ({ totalCars, setSearchValue, searchValue }: TSearchProps) => {
  return (
    <div className=" !w-full top-0 left-0 flex items-center">
      <SearchInput {...{ setSearchValue }} className="bg-transparent flex-1" />
      <span
        className={`${
          totalCars && totalCars > 0 && searchValue !== ""
            ? "invisible sm:visible translate-y-0"
            : "invisible translate-y-6"
        } size-[35px] -mt-4 flex items-center transition-all duration-500 justify-center bg-[#00000085] rounded-full`}
      >
        {totalCars}
      </span>
    </div>
  );
};
