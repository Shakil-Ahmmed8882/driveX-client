import SunRays from "../../shared/animations/SunRays";
import Container from "../../shared/layouts/Container";
import CarBookingForm from "./component/CarBookingForm";
import CarDetailsContent from "./component/CarDetailsContent";
import CarFeatures from "./component/CarFeatures";
import CarImage from "./component/CarImage";
import ReservationDetails from "./component/ReservationDetails";


const CarDetails = (): JSX.Element => {
  return (
    
    <Container>
        {/* <SunRays/> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-muted  rounded-lg shadow-lg items-start min-h-screen">
        <div className="grid gap-4 md:col-span-2 border-b ">
          <CarImage />
          <CarDetailsContent />
          <CarFeatures />
          <hr className="  border-[#5f5f5f] pb-8" />
          <ReservationDetails/>
        </div>
        <CarBookingForm />
      </div>
    </Container>

    
  );
};

export default CarDetails;
