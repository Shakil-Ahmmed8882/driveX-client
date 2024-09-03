import { useState} from "react";
import DForm from "../../shared/forms/DForm";
import DSelect from "../../shared/forms/DSelect";
import Car from "../allCars/compoents/Car";
import { useGetAllCarsQuery } from "../../redux/features/cars/carsApi";
import { carTypesOptions, featuresOptions } from "./constants";

interface Car {
  id: number;
  type: string;
  name: string;
  image: string;
  price: string;
  features: string[];
}

const BookingLayout: React.FC = () => {
  const [carQuery, setCarQuery] = useState<{ name: string; value: string }[]>([]);

  const { data: carData } = useGetAllCarsQuery(carQuery); // Pass carQuery here

  // Simplify the submitHandler
  const submitHandler = (data: any) => {
    const queries: { name: string; value: string }[] = [];

    if (data?.type?.reset) {
      queries.push({ name: "", value: "" });
    }

    if (data.type) {
      queries.push({ name: "type", value: data.type });
    }

    if (data.features) {
      queries.push({ name: "features", value: data.features });
    }

    setCarQuery(queries);
  };

  
  return (
    <div className="bg-lightGray text-gray-100 min-h-screen py-12">
       (
        <section className="max-w-4xl mx-auto px-4 mb-16 pt-8 bg-lightGray z-40">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Search for a Car
          </h2>
          <div className="bg-thickGray p-6 rounded-lg">
            <DForm
              onSubmit={submitHandler}
              className="sm:grid sm:grid-cols-2 gap-4 mb-4"
            >
              <DSelect
                options={carTypesOptions}
                name="type"
                label="search by types"
              />
              <DSelect
                options={featuresOptions}
                name="features"
                label="search by features"
              />
              <button
                type="submit"
                className="primaryGradient col-span-2 text-white py-2 -mt-2 px-4 rounded-lg w-full"
              >
                Search
              </button>
            </DForm>
          </div>
        </section>
      )

      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carData?.data?.map((car: Car) => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default BookingLayout;