import { ShieldCloseIcon } from "lucide-react";
import Skeleton from "../components/Skeleton";
import { TCar } from "../../allCars/type";
import { Button } from "antd";
import CarHorizontalCard from "../../../shared/ui/CarHorizontalCard";
import Container from "../../../shared/layouts/Container";
import { Close } from "../../../assets/icons/Icons";

type Props = {
  setIsSearchAvailableCars: (p: boolean) => void;
  isSearchAvailableCars: boolean;
  isLoading: boolean;
  data: any[] | undefined;
};

export function AvailableSearchBasedCars({
  setIsSearchAvailableCars,
  isSearchAvailableCars,
  isLoading,
  data,
}: Props) {
  return (
    <div
      className={`${
        isSearchAvailableCars
          ? "translate-y-0 opacity-100 visible"
          : "translate-y-full opacity-0 invisible"
      } transition-all duration-500 bg-white w-full 
      fixed inset-0 bottom-0 z-[99] overflow-scroll h-screen rounded-t-xl `}
    >
      <button className="bg-[#ebebeb] group-hover:bg-transparent text-[#999999] hover:text-[white] tranistion500 group rounded-full absolute overflow-hidden right-8 top-8 p-3" onClick={() => setIsSearchAvailableCars(false)}>
        <div className="bg-[#ff8e8e] absolute left-32 top-32 group-hover:top-0 z-10 group-hover:left-0 transition-all duration-500 w-full h-full rounded-full "></div>
        <Close className=" relative font-bold z-10 !size-8" />
      </button>

      <article className=" pt-44 md:pt-16 pb-24 px-3 md:text-center">
        <h1 className=" text-5xl md:text-6xl font-bold">Availbale cars</h1>
        <p className="text-lg w-4/5 md:w-1/2 md:mx-auto mt-3 text-[#b0afaf]">
          Get your desired Nam minima quaerat pariatur praesentium, omnis earum
          quae error, rerum, voluptatibus animi iure rem.
        </p>
      </article>

      <main className="flex container relative mx-auto">
        <div className="container mx-auto">
          {isLoading && <Skeleton />}
          {!isLoading && (
            <div className=" grid md:grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-8">
              {data?.map((item) => (
                <CarHorizontalCard car={item} key={item._id} />
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:block w-[300px] h-screen sticky top-0 rounded-lg bg-[#f1f1f1] p-1">
          <SuggestedCar />
          <SuggestedCar />
          <SuggestedCar />
          <SuggestedCar />
          <SuggestedCar />
          <SuggestedCar />
        </div>
      </main>
    </div>
  );
}

const SuggestedCar = () => {
  return (
    <div className="p-3 w-full mt-4 rounded-lg bg-[white] flex gap-2">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lja1KvbZMc19rYj6tzWNdu0VqLWD_VVTPg&s"
          alt=""
          className="w-16 object-cover h-full"
        />
      </div>
      <div>
        <h2>title of car</h2>
        <p className=" text-[#989898]">Get exclusive car </p>
      </div>
    </div>
  );
};
