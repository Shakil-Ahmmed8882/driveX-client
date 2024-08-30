import { FieldValues, SubmitHandler } from "react-hook-form";
import DForm from "../../../shared/forms/DForm";
import DInput from "../../../shared/forms/DInput";
import { Button } from "antd";
import DDatePicker from "../../../shared/forms/DDatePicker";
import DTimePicker from "../../../shared/forms/DTimePicker";
import moment from "moment";
import { useBookCarMutation } from "../../../redux/features/user/booking.api";

const CarBookingForm = ({carId}) => {
  const [bookCar] = useBookCarMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Formatting the date and time using moment.js
    const formattedData = {
      ...data,
      carId,
      "pick-up-date": moment(data["pick-up-date"]).format("YYYY-MM-DD"),
      "drop-off-date": moment(data["drop-off-date"]).format("YYYY-MM-DD"),
      "pick-up-time": moment(data["pick-up-time"]).format("HH:mm:ss"),
      "drop-off-time": moment(data["drop-off-time"]).format("HH:mm:ss"),
      
    };

    
    
    
    try {
      // Send the data to the backend using axios
      // const res = await bookCar(formattedData)
       await bookCar(formattedData)
    
      // navigate("/payment");
    } catch (error) {
      console.error("Error during booking:", error);
      // Handle error appropriately (e.g., show a message to the user)
    }
  };

  return (
    <div className="grid gap-4 md:gap-8  py-8 px-6 rounded-b-lg  bg-[#35353579]">
      <div className="grid gap-2">
        <h2 className="text-3xl font-bold">Book Your Rental</h2>
        <p className="description mt-2 pb-3">
          Fill out the form below to reserve your car.
        </p>
      </div>
      <DForm onSubmit={handleSubmit} className="grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 items-center">
        <DInput defaultValue="shakil ahmmed" type="text" name="name" label="Full Name:" />
        <DInput defaultValue="shakil@gmail.com" type="text" name="email" label="Email:" />
        <DInput defaultValue="123456" type="number" name="phone" label="Phone:" />
        <DInput defaultValue="address" type="text" name="address" label="Address:" />
        <DDatePicker name={"pick-up-date"} label={"Pick-up date"} />
        <DDatePicker name={"drop-off-date"} label={"Drop-off date"} />
        <DTimePicker name={"pick-up-time"} label={"Pick-up time"} />
        <DTimePicker name={"drop-off-time"} label={"Drop-off time"} />
        <Button
          className="bg-primaryColor   border-none mt-3 md:-mt-5 text-white"
          htmlType="submit"
        >
          Reserve Now
        </Button>
      </DForm>
    </div>
  );
};

export default CarBookingForm;
