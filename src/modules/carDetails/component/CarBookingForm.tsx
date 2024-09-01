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

  // const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   // Parsing and formatting the time values with moment.js
  //   const pickUpTime = moment(data["pick-up-time"], "HH:mm:ss");
  //   const dropOffTime = moment(data["drop-off-time"], "HH:mm:ss");
  
  //   const formattedData = {
  //     ...data,
  //     carId,
  //     "pick-up-date": moment(data["pick-up-date"]).format("YYYY-MM-DD"),
  //     "drop-off-date": moment(data["drop-off-date"]).format("YYYY-MM-DD"),
  //     "pick-up-time": pickUpTime.isValid() ? pickUpTime.format("HH:mm:ss") : null,
  //     "drop-off-time": dropOffTime.isValid() ? dropOffTime.format("HH:mm:ss") : null,
  //   };
  
  //   try {
  //     // Send the data to the backend
  //     await bookCar(formattedData);
  //     // Handle successful booking
  //   } catch (error) {
  //     console.error("Error during booking:", error);
  //     // Handle error appropriately (e.g., show a message to the user)
  //   }
  // };
  


  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Pick-up time raw:", data["pick-up-time"]);
    console.log("Drop-off time raw:", data["drop-off-time"]);
  
    const formattedData = {
      ...data,
      carId,
      "pick-up-date": moment(data["pick-up-date"]).format("YYYY-MM-DD"),
      "drop-off-date": moment(data["drop-off-date"]).format("YYYY-MM-DD"),
      "pick-up-time": moment(data["pick-up-time"], "HH:mm").format("HH:mm:ss"),
      "drop-off-time": moment(data["drop-off-time"], "HH:mm").format("HH:mm:ss"),
    };
  
    console.log("Formatted data to send:", formattedData);
  
    try {
      await bookCar(formattedData);
    } catch (error) {
      console.error("Error during booking:", error);
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
