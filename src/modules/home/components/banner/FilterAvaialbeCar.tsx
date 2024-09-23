// src/components/Banner/Search.tsx

import { useState, useEffect, useRef } from "react";
import { CalendarIcon, CarIcon, MapPinIcon } from "lucide-react";

import { Button } from "antd";

import { FieldValues, SubmitHandler } from "react-hook-form";
import DSelect from "../../../../shared/forms/DSelect";
import DForm from "../../../../shared/forms/DForm";
import { categoryOptions, locationOptions } from "../../../../constants";
import DDatePicker from "../../../../shared/forms/DDatePicker";
import { SearchIcon } from "../../../../assets/icons/Icons";
import { AvailableSearchBasedCars } from "../../features/AvailableSearchBasedCars";
import { useGetAllCarsQuery } from "../../../../redux/features/cars/carsApi";
import { format } from "date-fns";

export function FilterAvaialbeCar() {
  const [isIconVisible, setIconVisible] = useState(false);
  const [isSearchAvailableCars, setIsSearchAvailableCars] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleFieldClick = () => setIconVisible(true);

// search criteria 
  const [criteria, setCriteria] = useState< {
        startDate: string;
        endDate: string;
        location?: string;
        category?: string;
      }| {}>({});


  // Event handler with null check for containerRef.current
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIconVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    setCriteria({
        ...(data["pick-up-date"] && { startDate: format(new Date(data["pick-up-date"]), "yyyy-MM-dd") }),
        ...(data["drop-off-date"] && { endDate: format(new Date(data["drop-off-date"]), "yyyy-MM-dd") }),
        ...(data.location && { location: data.location }),  // Assuming location is coming from `data`
        ...(data.category && { category: data.category }),  // Assuming category is coming from `data`
      });
      
      
        
        
        
        
    };
    

    const queryArray = Object.entries(criteria)
  .filter(([, value]) => !!value) // Filter out any entries with falsy values
  .map(([key, value]) => ({
    name: key === 'category' ? 'type' : key, // Rename 'category' to 'type'
    value,
  }));

  const { data,isLoading } = useGetAllCarsQuery(queryArray);

  
  
    
    



  return (
    <>
      <div
        ref={containerRef}
        className={`${
          isIconVisible ? "mt-24" : "mt-16"
        } transition-all duration-500 delay-300 w-full lg:max-w-[70%] pt-6 pb-3 mx-auto relative bg-[#222222] lg:rounded-full px-5 shadow-lg`}
      >
        <DForm onSubmit={onSubmit}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 px-3">
            <div className="relative min-w-[120px]" onClick={handleFieldClick}>
              <MapPinIcon className="absolute text-gray-400 right-3 top-5 h-4 w-4 z-40" />
              <DSelect
                options={locationOptions}
                label="Location"
                name="location"
              />
            </div>

            <div className="relative min-w-[120px]" onClick={handleFieldClick}>
              <CalendarIcon className="absolute right-3 top-6 pb-3 text-gray-400 h-4 w-4 z-40" />
              <DDatePicker name="pick-up-date" label="Pick up date" />
            </div>

            <div className="relative min-w-[120px]" onClick={handleFieldClick}>
              <CalendarIcon className="absolute right-3 top-6 pb-3 text-gray-400 h-4 w-4 z-40" />
              <DDatePicker name="drop-off-date" label="Drop off date" />
            </div>

            <div className="relative min-w-[120px]" onClick={handleFieldClick}>
              <CarIcon className="absolute right-3 top-5 text-gray-400 h-4 w-4 z-40" />
              <DSelect
                options={categoryOptions}
                label="Category"
                name="category"
              />
            </div>
          </div>

          <Button
            htmlType="submit"
            onClick={() => setIsSearchAvailableCars(true)}
            className={`bg-[#13004A] rounded-full h-11 w-20 absolute right-6 -top-14 border-none text-white px-4 transition-all duration-300 ${
              isIconVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <SearchIcon />
          </Button>

          <Button
            className={`bg-[#5d05051f] rounded-full h-11 w-20 right-28 absolute -top-14 border-none text-white px-4 transition-all duration-300 ${
              isIconVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Clear
          </Button>
        </DForm>
      </div>

      <AvailableSearchBasedCars
      {...{isLoading, setIsSearchAvailableCars, isSearchAvailableCars}}
      data={data?.data}
      />
    </>
  );
}

export default FilterAvaialbeCar;
