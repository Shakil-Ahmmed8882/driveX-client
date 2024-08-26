import { FieldValues, SubmitHandler } from "react-hook-form";
import DForm from "../../../shared/forms/DForm";
import DInput from "../../../shared/forms/DInput";
import { Button } from "antd";
import DDatePicker from "../../../shared/forms/DDatePicker";
import DTimePicker from "../../../shared/forms/DTimePicker";


const CarBookingForm = () => {
  const handleSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid gap-4 md:gap-8 sticky top-0 py-6 px-3 rounded-b-lg  bg-[#35353579]">
      <div className="grid gap-2">
        <h2 className="text-2xl font-bold">Book Your Rental</h2>
        <p className="description mt-2">
          Fill out the form below to reserve your car.
        </p>
      </div>
      <DForm onSubmit={handleSubmit}>
        <DInput type="text" name="name" label="Full Name:" />
        <DInput type="text" name="email" label="Email:" />
        <DInput type="number" name="phone" label="Phone:" />
        <DInput type="text" name="address" label="Address:" />
        <DDatePicker name={'pick-up-date'} label={"Pick-up date"}/>
        <DDatePicker name={'drop-off-date'} label={"Drop-off date"}/>
        <DTimePicker name={"pick-up-time"} label={"Pick-up time"}/>
        <DTimePicker name={"drop-off-time"} label={"Drop-off time"}/>
        <Button className="bg-primaryColor border-none text-white mt-5" htmlType="submit">Reserve Now</Button>
      </DForm>
    </div>
  );
};

export default CarBookingForm;
