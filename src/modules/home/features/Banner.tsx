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

const Banner = () => {
  return (
    <section className="bg-[url('https://i.pinimg.com/564x/7f/f6/92/7ff692671716716dd84ec58773b26946.jpg')] pt-32 -mt-32 bg-no-repeat !w-full h-full bg-cover object-top min-h-[600px] relative">
      <div className="bg-gradient-to-tr from-[#0d0016] to-[#000000b2] absolute  inset-0 "></div>
      <Container className="relative">
        <div className="absolute -top-44 -left-32">
          <Gradient />
        </div>

        <div className="relative container   py-16  sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-11">
          <div className="lg:pr-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
                Drive Your <span className="text-primaryColor">Dreams</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 sm:mt-6">
                Unlock the road to adventure with our premium car rental
                service.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Wide range of vehicles",
                  "24/7 customer support",
                  "Flexible rental options",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center description">
                    <CheckCircleIcon className="h-5 w-5 text-[#ffffff] mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button className="inline-flex group items-center rounded-full bg-primaryColor">
                  <div className="flex  p-3 group-hover:mt-1 transition-all duration-300 bg-[black] m-[1px] rounded-full">
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                  Learn More
                    </div>
                </button>
              </div>
            </div>
          </div>
            <SearchCarForm/>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

const SearchCarForm = () => {
  const handleSearchCar: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-16 sm:mt-24 lg:mt-0">
      <div className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl rounded-lg">
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
                options={[{ label: "Electronic", value: "electronic" }]}
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
                  options={[{ label: "Bangladesh", value: "🚩bangladesh" }]}
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
            <Button htmlType="submit" className="w-full primaryGradient hover:bg-indigo-500 border-none p-[1px] text-white rounded-md">
              Search Available Cars
            </Button>
          </DForm>
        </div>
      </div>
    </div>
  );
};

const Gradient = () => {
  return (
    <div className="absolute top-0 -z-10 left-0 bg-gradient-to-r from-[#240941] to-[#06000f] w-[1000px] h-[600px] filter blur-3xl"></div>
  );
};
