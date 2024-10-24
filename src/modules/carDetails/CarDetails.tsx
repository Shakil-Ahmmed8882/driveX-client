import { Link, useParams } from "react-router-dom";
import Container from "../../shared/layouts/Container";
import CarDetailsContent from "./component/CarDetailsContent";
import CarFeatures from "./component/CarFeatures";
import CarImage from "./component/CarImage";
import ReservationDetails from "./component/ReservationDetails";
import { useGetSingleCarQuery } from "../../redux/features/cars/carsApi";
import { Button } from "antd";
import { DSpinner } from "../../shared/ui/loading/DSpinner";
import CarSuggestionList from "./feature/CarSuggestionList";
// import { TCar } from "../allCars/type";

export interface TCar {
  _id: string;
  name: string;
  color: string;
  description: string;
  features: string[];
  image: string;
  isDeleted: boolean;
  isElectric: boolean;
  pricePerHour: number;
  status: string;
  type: string;
  updatedAt: string;
}

const CarDetails = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id || "", { skip: !id });

  if (isLoading) return <DSpinner />;

  // const {name,description,color,isElectric,status,
  //   features,pricePerHour,isDeleted,image,createdAt,updatedAt,
  // } = data?.data
  const car = data?.data as any;

  console.log(car);
  const { name, pricePerHour, image} = car;

  return (
    <Container>
      <div className="grid grid-cols-1 pt-16 md:grid-cols-3 gap-8 bg-muted  rounded-lg shadow-lg items-start min-h-screen">
        <div className="grid gap-4 relative z-20  md:col-span-2 border-b ">
          <CarImage url={image} />
          <CarDetailsContent price={pricePerHour} title={name} />
          <div className="md:flex justify-between">
            <CarFeatures />
            <Link
              to={`/booking-form/${id}`}
              className="flex-1 flex justify-end"
            >
              <Button
                className={` w-full  md:!w-1/2 bg-primaryColor text-white hover:!text-white hover:!bg-primaryColor/90  border-none `}
              >
                Book
              </Button>
            </Link>
          </div>
          <hr className="  border-[#5f5f5f] pb-8" />
          <ReservationDetails />
        </div>
        <CarSuggestionList/>
      </div>
    </Container>
  );
};

export default CarDetails;
