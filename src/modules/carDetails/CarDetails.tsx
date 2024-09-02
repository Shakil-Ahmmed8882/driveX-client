import { Link, useParams } from "react-router-dom";
import Container from "../../shared/layouts/Container";
import CarBookingForm from "./component/CarBookingForm";
import CarDetailsContent from "./component/CarDetailsContent";
import CarFeatures from "./component/CarFeatures";
import CarImage from "./component/CarImage";
import ReservationDetails from "./component/ReservationDetails";
import {
  useGetSingleCarQuery,
} from "../../redux/features/cars/carsApi";
import { Button } from "antd";


const CarDetails = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id, {skip: !id});


  if(isLoading) return<>".."</>


  const {name,description,color,isElectric,status,
    features,pricePerHour,isDeleted,image,createdAt,updatedAt,__v
  } = data?.data
  


  
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-muted  rounded-lg shadow-lg items-start min-h-screen">
        <div className="grid gap-4 md:col-span-2 border-b ">
          <CarImage url={image} />
          <CarDetailsContent price={pricePerHour} title={name}/>
          <div className="md:flex justify-between">
          <CarFeatures />
          <Link to={`/booking-form/${id}`} className="flex-1 flex justify-end">
          <Button disabled={status === "unaviable"} className=" w-full  md:!w-1/2 primaryGradient border-none !text-white ">Book</Button>
          </Link>
          </div>
          <hr className="  border-[#5f5f5f] pb-8" />
          <ReservationDetails />
        </div>
      </div>
    </Container>
  );
};

export default CarDetails;
