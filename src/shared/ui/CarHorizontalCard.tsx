import { Button } from "antd";
import { ICar } from "../../types/car.type";

const CarHorizontalCard = ({car}:{car:ICar}) => {
  return (
    <div className="lg:flex  rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Car Image */}
          <div className="lg:w-2/4 w-full">
            <img
              className="w-full h-full "
              src={car.image}
              alt={car.name}
            />
          </div>

          {/* Car Details */}
          <div className="lg:w-2/4 px-6 py-4 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-2xl mb-2">{car.name}</h2>
              <p className="text-[#989898] text-md mb-4">{car.description}</p>

              <div className="text-[#7a7a7a] mb-4">
                <div className="hidden md:flex justify-between">
                  <span className="block border p-1 rounded-lg">
                    Type: {car.type}
                  </span>
                  <span className="block border p-1 rounded-lg">
                    Location: {car.location}
                  </span>
                </div>

                <div className="hidden md:flex justify-between">
                  <span className="flex items-center gap-2 border p-1 rounded-lg my-2 ">
                    Color:
                    <span
                      className="w-5 h-5 rounded"
                      style={{ backgroundColor: car.color }}
                    ></span>
                  </span>
                  <span className="block border p-1 rounded-lg my-2">
                    Price per hour:{" "}
                    <span className="font-bold">${car.pricePerHour}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center gap-3 mt-3">
                  <span
                    className={`p-1 w-full block mt-2 rounded-full text-center  ${
                      car.status == "available"
                        ? "bg-[#bef9be7b] text-[#5be65b]"
                        : "bg-[red]"
                    }`}
                  >
                    {" "}
                    {car.status}
                  </span>

                  <Button className="block py-1 w-full rounded-full">Details</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default CarHorizontalCard;