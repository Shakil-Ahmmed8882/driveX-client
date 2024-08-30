import { useParams } from "react-router-dom";
import Container from "../../shared/layouts/Container";
import CarBookingForm from "./component/CarBookingForm";
import CarDetailsContent from "./component/CarDetailsContent";
import CarFeatures from "./component/CarFeatures";
import CarImage from "./component/CarImage";
import ReservationDetails from "./component/ReservationDetails";
import {
  useGetSingleCarQuery,
} from "../../redux/features/cars/carsApi";

const CarDetails = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(id, {skip: !id});


  if(isLoading) return<>".."</>


  const {_name,description,color,isElectric,status,features,pricePerHour,isDeleted,image,createdAt,updatedAt,__v
  } = data?.data
  


  
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-muted  rounded-lg shadow-lg items-start min-h-screen">
        <div className="grid gap-4 md:col-span-2 border-b ">
          <CarImage url={image} />
          {id}
          <CarDetailsContent />
          <CarFeatures />
          <hr className="  border-[#5f5f5f] pb-8" />
          <ReservationDetails />
        </div>
        <CarBookingForm carId={id} />
      </div>
    </Container>
  );
};

export default CarDetails;
