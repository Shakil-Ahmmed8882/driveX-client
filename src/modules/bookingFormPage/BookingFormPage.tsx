import { useParams } from "react-router-dom";
import CarBookingForm from "../carDetails/component/CarBookingForm";
import Container from "../../shared/layouts/Container";


const BookingFormPage= (): JSX.Element => {
    const {carId} = useParams()
  return (
    <Container>
        <CarBookingForm carId={carId}/>
    </Container>
  );
};

export default BookingFormPage; 