// /* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CalendarIcon,
  CarIcon,
  MapPinIcon,
  ShieldCloseIcon,
} from "lucide-react";
import Container from "../../../shared/layouts/Container";
import DForm from "../../../shared/forms/DForm";
import DSelect from "../../../shared/forms/DSelect";
import DDatePicker from "../../../shared/forms/DDatePicker";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { categoryOptions, locationOptions } from "../../../constants";
import { ReactNode, useState } from "react";
import { SearchIcon } from "../../../assets/icons/Icons";

const Banner = () => {
  return (
   
    <MoveUp>
      <DemoBanner />
    </MoveUp>
  );
};

export default Banner;

const SearchCarForm = () => {
  const handleSearchCar: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-16 sm:mt-24 lg:mt-0">
      <div className="backdrop-blur-sm bg-gradient-to-tr from-black/40 to-[#011112c5] border-white/20 shadow-2xl rounded-lg">
        <div className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold mb-6">Find Your Perfect Ride</h2>
          <DForm onSubmit={handleSearchCar} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="category" className="text-white">
                Category
              </label>
              <DSelect
                placeholder="Pick category"
                className="custom-select-no-bg"
                name="category"
                label="Category"
                options={categoryOptions}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="text-white">
                Location
              </label>
              <div className="relative">
                <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                <DSelect
                  placeholder="Pick Location"
                  className="custom-select-no-bg "
                  name="location"
                  options={locationOptions}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />

                  <DDatePicker name="pick-up-date" label="Pick-up Date" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <DDatePicker name="drop-off-date" label="Return date" />
                </div>
              </div>
            </div>
            <Button
              htmlType="submit"
              className="w-full primaryGradient hover:bg-indigo-500 border-none p-[1px] text-white rounded-md"
            >
              Search Available Cars
            </Button>
          </DForm>
        </div>
      </div>
    </div>
  );
};

export const Gradient = () => {
  return (
    <>
      {/* First Group of Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#23005C] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-10 left-[50%] w-72 h-72 rounded-full bg-[#23005C] animate-blob filter blur-[100px]"></div>
      <div className="absolute top-20 left-[50%] w-64 h-64 rounded-full bg-[#23005C] animate-blob filter blur-[100px]"></div>
      <div className="absolute top-32 left-[50%] w-56 h-56 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>

      {/* Second Group of Blobs */}
      <div className="absolute top-0 right-[50%] w-80 h-80 rounded-full bg-[#13004A] animate-blob filter blur-[50px]"></div>
      <div className="absolute top-10 right-[50%] w-72 h-72 rounded-full bg-[#16004E] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-20 right-[50%] w-64 h-64 rounded-full bg-[#170151] animate-blob filter blur-[100px]"></div>
      <div className="absolute top-32 right-[50%] w-56 h-56 rounded-full bg-[#1C0155] animate-blob filter blur-[200px]"></div>

      {/* Bottom Blobs */}
      <div className="absolute bottom-10 left-[50%]  w-72 h-72  rounded-full bg-[##2E0164] animate-blob  filter blur-[200px] animation-delay-2000"></div>
      <div className="absolute bottom-20 left-[50%]  w-64 h-64 rounded-full bg-[#2E0164] animate-blob filter blur-[100px] animation-delay-2000"></div>
      <div className="absolute bottom-32 left-[50%]  w-56 h-56 rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-2000"></div>

      {/* Additional Blobs to balance out the shape */}

      <div className="absolute bottom-20 right-[50%]  w-64 h-64  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
      <div className="absolute bottom-20 right-[50%]  w-64 h-64  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
      <div className="absolute bottom-32 right-[50%]  w-56 h-56  rounded-full bg-[#300388] animate-blob  filter blur-[200px] animation-delay-4000"></div>
    </>
  );
};

const MoveUp = ({ children }: { children: ReactNode }) => {
  return (
    <div className="-mt-44 pt-44 bg-black relative overflow-hidden">
      <Gradient />
      {children}
    </div>
  );
};

export const DemoBanner = () => {
  const [show, setShow] = useState(false);
  return (
    <section className=" pb-44 pt-32 overflow-hidden bg-black  ">
      <Container className="relative">
        <div className="">
          <div className="">
            <div className=" relative !z-30  text-white text-center">
              <h1 className="text-4xl  font-normal sm:text-5xl lg:text-6xl xl:text-7xl">
                Travel the world
              </h1>
              <p className="mt-4 text-lg font-normal text-[#c9c9c9] sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit offic
              </p>
              
            </div>
          </div>
        </div>
        <Search />
      </Container>
    </section>
  );
};

import { useEffect, useRef } from "react";

export function Search() {
  // State to control the visibility of the search icon
  const [isIconVisible, setIconVisible] = useState(false);
  const [isSearchAvailableCars, setIsSearchAvailableCars] = useState(false);

  // Refs to track clicks inside/outside the fields
  const containerRef = useRef(null);

  // Show the search icon when a field is clicked
  const handleFieldClick = () => {
    setIconVisible(true);
  };

  // Hide the search icon when clicking outside the input fields
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIconVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };


return (
    <>
    <div
      ref={containerRef}
      className={` ${isIconVisible?"mt-24":"mt-16"} transition-all duration-500 delay-300 w-full lg:max-w-[70%] pt-6 pb-3 mx-auto relative bg-[#222222] lg:rounded-full px-5 shadow-lg`}
    >
      <DForm onSubmit={onSubmit}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 px-3">
          <div className="relative min-w-[120px]" onClick={handleFieldClick}>
            <MapPinIcon className="absolute text-gray-400 right-3 top-5 transform -translate-y-1/2 h-4 w-4 z-40" />
            <DSelect options={locationOptions} label="Location" name="location" />
          </div>

          <div className="relative min-w-[120px]" onClick={handleFieldClick}>
            <CalendarIcon className="absolute right-3 top-6 pb-3 p-5 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-40" />
            <DDatePicker name="pick-up-date" label="Pick up date" />
          </div>

          <div className="relative min-w-[120px]" onClick={handleFieldClick}>
            <CalendarIcon className="absolute right-3 top-6 pb-3 p-5 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-40" />
            <DDatePicker name="drop-off-date" label="Drop off date" />
          </div>

          <div className="relative min-w-[120px]" onClick={handleFieldClick}>
            <CarIcon className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-40" />
            <DSelect options={categoryOptions} label="Category" name="category" />
          </div>
        </div>

        {/* Search button with transition */}
        <Button
        
          onClick={() => setIsSearchAvailableCars(true)}
          className={`bg-[#13004A] rounded-full h-11 w-20 absolute right-6 -top-14 border-none text-white px-4 text-sm whitespace-nowrap transition-all duration-300 delay-300 ${
            isIconVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
          }`}
        >
          <SearchIcon />
        </Button>

        <Button
          className={`bg-[#5d05051f] rounded-full h-11 w-20 right-28 absolute  -top-14 border-none text-white px-4 text-sm whitespace-nowrap transition-all duration-300 delay-300 ${
            isIconVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
          }`}
        >
          Clear
        </Button>
      </DForm>
    </div>
      {isSearchAvailableCars && <AvailableCars {...{setIsSearchAvailableCars}}/>}
    </>
    
  );
}





export function AvailableCars({setIsSearchAvailableCars}:{setIsSearchAvailableCars: (p: boolean) => void}) {
  


return <div className="bg-white w-full h-[90vh] fixed inset-0 top-32 z-[99]">

  <ShieldCloseIcon onClick={() => setIsSearchAvailableCars(false)} className="text-red-600 absolute right-0 size-11"/>
  Availbale cars
  <Skeleton/>
</div>
}





import { Skeleton as AntSkeleton } from 'antd';

const Skeleton: React.FC = () => <AntSkeleton active/>;

