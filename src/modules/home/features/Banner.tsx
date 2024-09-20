// /* eslint-disable @typescript-eslint/no-unused-vars */

import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  MapPinIcon,
} from "lucide-react";
import Container from "../../../shared/layouts/Container";
import DForm from "../../../shared/forms/DForm";
import DSelect from "../../../shared/forms/DSelect";
import DDatePicker from "../../../shared/forms/DDatePicker";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { categoryOptions, locationOptions } from "../../../constants";
import { ReactNode, useState } from "react";

const Banner = () => {
  return (
    // <section className="bg-[url('https://images.pexels.com/photos/5054165/pexels-photo-5054165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] pt-32 -mt-32 bg-no-repeat !w-full h-full bg-cover object-center min-h-[600px] relative">
    //   <div className="bg-gradient-to-tr from-[#000000] to-[#00000098] absolute  inset-0 "></div>
    //   <Container className="relative">
    //     <div className="absolute -top-44 -left-32">
    //       <Gradient />
    //     </div>

    //     <div className="relative container   py-16  sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-11">
    //       <div className="lg:pr-8">
    //         <div className="">
    //           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
    //             Drive Your <span className="text-primaryColor">Dreams</span>
    //           </h1>
    //           <p className="mt-4 text-xl text-gray-300 sm:mt-6">
    //             Unlock the road to adventure with our premium car rental
    //             service.
    //           </p>
    //           <ul className="mt-8 space-y-3">
    //             {[
    //               "Wide range of vehicles",
    //               "24/7 customer support",
    //               "Flexible rental options",
    //             ].map((benefit) => (
    //               <li key={benefit} className="flex items-center description">
    //                 <CheckCircleIcon className="h-5 w-5 text-[#ffffff] mr-2" />
    //                 <span>{benefit}</span>
    //               </li>
    //             ))}
    //           </ul>
    //           <div className="mt-10">
    //             <button className="inline-flex group items-center rounded-full bg-primaryColor">
    //               <div className="flex  p-3 group-hover:mt-1 transition-all duration-300 bg-[black] m-[1px] rounded-full">
    //               <ArrowRightIcon className="ml-2 h-5 w-5" />
    //               Learn More
    //                 </div>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //         <SearchCarForm/>
    //     </div>
    //   </Container>
    // </section>

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
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-32 left-32 w-56 h-56 rounded-full bg-[#5b0536] animate-blob filter blur-[200px]"></div>

      {/* Second Group of Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#22055b] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#22055b] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#22055b] animate-blob filter blur-[200px]"></div>
      <div className="absolute top-32 right-32 w-56 h-56 rounded-full bg-[#22055b] animate-blob filter blur-[200px]"></div>

      {/* Bottom Blobs */}
      <div className="absolute bottom-10 left-0 w-72 h-72 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-2000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-2000"></div>
      <div className="absolute bottom-32 left-20 w-56 h-56 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-2000"></div>

      {/* Additional Blobs to balance out the shape */}
      <div className="absolute bottom-10 right-0 w-72 h-72 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-4000"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-4000"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 mix-blend-multiply rounded-full bg-[#300388] animate-blob filter blur-[200px] animation-delay-4000"></div>
    </>
  );
};

const MoveUp = ({ children }: { children: ReactNode }) => {
  return <div className="-mt-44 pt-44 bg-transparent">{children}</div>;
};





export const DemoBanner = () => {

  const [show, setShow] = useState(false)
  return (
    <section className=" pb-44 pt-32 overflow-hidden bg-black  ">
      <Container className="relative">
        <div  className=" relative z-10 left-0 top-0 bg-[#5b0536] animate-blob filter blur-[200px] ">
        <Gradient/>
        </div>
        <div className="">
          <div className="">
            <div className=" relative !z-30  text-white text-center">
              <h1 className="text-4xl  font-normal sm:text-5xl lg:text-6xl xl:text-7xl">
                 Travel The World with <span className="font-thin italic text-primaryColor">DriveX</span>
              </h1>
              <p className="mt-4 text-lg font-normal text-[#c9c9c9] sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit offic
              </p>
              <Button onClick={() => setShow(!show)} className="w-1/3 rounded-full py-6 mt-12">Get Available cars</Button>
         
            </div>
            
          </div>
        </div>
        <div className="absolute top-0 z-30 right-0 ">
        {show && <SearchCarForm/>}
        </div>
      </Container>
    </section>
  );
};
