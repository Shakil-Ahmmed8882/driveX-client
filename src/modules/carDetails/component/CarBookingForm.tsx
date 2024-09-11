import { FieldValues, SubmitHandler } from "react-hook-form";
import DForm from "../../../shared/forms/DForm";
import DInput from "../../../shared/forms/DInput";
import { Button } from "antd";
import DDatePicker from "../../../shared/forms/DDatePicker";
import DTimePicker from "../../../shared/forms/DTimePicker";
import moment from "moment";
import { useBookCarMutation } from "../../../redux/features/user/booking.api";
import { toast } from "sonner";
import { extractErrorMessage } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SlideUpModal from "../../../shared/modals/SlideUpModal";
import { fieldsValidation } from "./utils";
import InputError from "../../../shared/ui/inputError";

const CarBookingForm = ({ carId }: { carId: string | undefined }) => {
  const [bookCar] = useBookCarMutation();
  const navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormReset, setIsFormReset] = useState(false);
  const [errorObj, setError] = useState<{ error?: string; message?: string} >(
    {}
  );

  interface BookingInfo {
    name?: string;
    email?: string;
    phone?: string;
    carId?: string;
    address?: string;
    "pick-up-date"?: string;
    "drop-off-date"?: string;
    "pick-up-time"?: string;
    "drop-off-time"?: string;
  }

  // Utility function to check for empty fields
  // const areFieldsFilled = (data: FieldValues) => {
  //   return Object.values(data).every(
  //     (value) => value !== undefined && value !== ""
  //   );
  // };

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formattedData: BookingInfo = {
      ...data,
      carId,
      "pick-up-date": moment(data["pick-up-date"]).format("YYYY-MM-DD"),
      "drop-off-date": moment(data["drop-off-date"]).format("YYYY-MM-DD"),
      "pick-up-time": moment(data["pick-up-time"], "HH:mm").format("HH:mm:ss"),
      "drop-off-time": moment(data["drop-off-time"], "HH:mm").format(
        "HH:mm:ss"
      ),
    };

    // Check if all fields are filled
    try {
      fieldsValidation(data);
      setError({}); // Clear error if validation passes

      // open modal & don't reset before final api hit
      setIsFormReset(false);
      setBookingInfo(formattedData);
      setIsModalVisible(true);
    } catch (error: any) {
      setError(error);
    }
  };

  const handleConfirmBooking = async () => {
    try {
      const res = await bookCar(bookingInfo);
      if (res?.data) {
        setIsFormReset(true);
        toast.success("Car is booked successfully.");
        setIsModalVisible(false); // Close modal after success
        navigate("/all-cars");
      }
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);

      console.log({ error });
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close modal without booking
  };

  

  return (
    <div className="grid gap-4 md:gap-8 py-8 px-6 rounded-b-lg bg-thickGray2">
      <div className="grid gap-2">
        <h2 className="text-3xl font-bold">Book Your Rental</h2>
        <p className="description mt-2 pb-3">
          Fill out the form below to reserve your car.
        </p>
      </div>
      <DForm
        isReset={isFormReset}
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3 items-center"
      >
        
          <DInput type="text" name="name" label="Full Name:" {...{errorObj}}/>
          <DInput type="text" name="email" label="Email:" {...{errorObj}}/>
          <DInput type="number" name="phone" label="Phone:" {...{errorObj}}/>
          <DInput type="text" name="address" label="Address:" {...{errorObj}}/>
          <DDatePicker name={"pick-up-date"} label={"Pick-up date"} {...{errorObj}}/>
          <DDatePicker name={"drop-off-date"} label={"Drop-off date"} {...{errorObj}}/>
          <DTimePicker name={"pick-up-time"} label={"Pick-up time"} {...{errorObj}}/>
          <DTimePicker name={"drop-off-time"} label={"Drop-off time"} {...{errorObj}}/>
          <Button
            className="primaryGradient border-none mt-3 md:-mt-5 text-white"
            htmlType="submit"
          >
            Reserve Now
          </Button>
        
        </DForm>
            



      {/* Confirmation Modal */}
      <SlideUpModal
        className="w-[500px]"
        isVisible={isModalVisible}
        onClose={handleCancel}
      >
        <div className="text-left">
          <h3 className="text-3xl mb-3">Confirm Your Booking</h3>
          <div className="mb-4 description">
            <p>
              <strong className="text-[green] text-[17px]">Full Name:</strong>{" "}
              {bookingInfo.name}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">Email:</strong>{" "}
              {bookingInfo.email}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">Phone:</strong>{" "}
              {bookingInfo.phone}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">Address:</strong>{" "}
              {bookingInfo.address}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">
                Pick-up Date:
              </strong>{" "}
              {bookingInfo["pick-up-date"]}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">
                Drop-off Date:
              </strong>{" "}
              {bookingInfo["drop-off-date"]}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">
                Pick-up Time:
              </strong>{" "}
              {bookingInfo["pick-up-time"]}
            </p>
            <p>
              <strong className="text-[green] text-[17px]">
                Drop-off Time:
              </strong>{" "}
              {bookingInfo["drop-off-time"]}
            </p>
          </div>
          <div className="flex gap-2 pt-8">
            <button
              onClick={handleConfirmBooking}
              className="bg-[#313030] text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Confirm Booking
            </button>
            <button
              onClick={handleCancel}
              className="bg-[#313030] text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Edit Details
            </button>
          </div>
        </div>
      </SlideUpModal>
    </div>
  );
};

export default CarBookingForm;











