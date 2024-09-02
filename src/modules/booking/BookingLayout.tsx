import { useState, useEffect } from "react";
import DInput from "../../shared/forms/DInput";
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
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [carQuery, setCarQuery] = useState<{ name: string; value: string }[]>(
    []
  );

  const { data: carData } = useGetAllCarsQuery(carQuery); // Pass carQuery here
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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

  const handleBookNow = (car: Car) => {
    setSelectedCar(car);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-lightGray text-gray-100 min-h-screen py-12">
      {!selectedCar && !bookingConfirmed && (
        <section
          className={`max-w-4xl mx-auto px-4 mb-16 pt-8 bg-lightGray z-40 transition-transform duration-300 ${
            isScrollingUp ? "sticky top-0" : "-top-full"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Search for a Car
          </h2>
          <div className="bg-thickGray p-6 rounded-lg ">
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
                className=" primaryGradient col-span-2 text-white py-2 -mt-2 px-4 rounded-lg w-full"
              >
                Search
              </button>
            </DForm>
          </div>
        </section>
      )}

      <section className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carData?.data?.map((car) => (
            <Car key={car.id} car={car} onBookNow={handleBookNow} />
          ))}
        </div>
      </section>

      {/* Render Car Details, Booking Form, and Confirmation as needed */}
      {selectedCar && !bookingConfirmed && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Car Details
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium">{selectedCar.name}</h3>
            <p className="text-gray-400 mb-4">{selectedCar.price}</p>
            <ul className="text-gray-400 mb-4">
              {selectedCar.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {selectedCar && !bookingConfirmed && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Booking Form
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="NID/Passport"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Driving License"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Payment Information"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Additional Options (GPS, Child Seat)"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg"
              />
            </div>
            <button
              onClick={handleConfirmBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
            >
              Confirm Booking
            </button>
          </div>
        </section>
      )}

      {bookingConfirmed && (
        <section className="max-w-4xl mx-auto px-4 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Booking Confirmation
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-medium mb-4">
              Thank you for your booking!
            </h3>
            <p className="text-gray-400 mb-4">
              Your booking for{" "}
              <span className="font-bold">{selectedCar?.name}</span> has been
              confirmed.
            </p>
            <p className="text-gray-400">
              A confirmation email has been sent to your provided email address.
              Please review your booking details and contact us if you have any
              questions.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookingLayout;
