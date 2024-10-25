import { FieldValues, SubmitHandler } from "react-hook-form";
import DForm from "../../../shared/forms/DForm";
import DInput from "../../../shared/forms/DInput";
import { Button } from "antd";
import DDatePicker from "../../../shared/forms/DDatePicker";
import DTimePicker from "../../../shared/forms/DTimePicker";
import { useBookCarMutation } from "../../../redux/features/user/booking.api";
import { toast } from "sonner";
import { extractErrorMessage } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fieldsValidation } from "../../../shared/ui/validations";
import ConfirmationModal from "./ConfirmationModal";
import formatBookingData from "../../shared/utils";
import { DarkGradient } from "../../../shared/animations/grident/DarkGradient";
import { BookingInfo } from "../../allCars/type";

const CarBookingForm = ({ carId }: { carId: string | undefined }) => {
  const [bookCar] = useBookCarMutation();
  const navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFormReset, setIsFormReset] = useState(false);
  const [errorObj, setError] = useState<{ error?: string; message?: string }>(
    {}
  );

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const bookingData = formatBookingData(data, carId, { isEditForm: false });

    try {
      fieldsValidation(data); // Validate all fields
      setError({});

      // Show the confirmation modal before final API call
      setBookingInfo(bookingData);
      setIsFormReset(false);
      setIsModalVisible(true); // Open modal with the filled-in form
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
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close modal without booking
  };

  return (
    <section>
      <div className="grid gap-4 md:gap-8 mt-20  relative z-20 bg-[#fff] py-8 my-11 mt20 px-6 rounded-b-lg ">
        <div className="grid gap-2">
          <h2 className="text-3xl font-bold">Book Your Rental</h2>
          <p className="description mt-2 pb-3 text-gray-400">
            Fill out the form below to reserve your car.
          </p>
        </div>

        {/*  */}
        <DForm
          isReset={isFormReset}
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 gap-3 lg:grid-cols-3 items-center"
        >
          <DInput
            type="text"
            name="name"
            label="Full Name:"
            {...{ errorObj }}
          />
          <DInput type="text" name="email" label="Email:" {...{ errorObj }} />
          <DInput type="number" name="phone" label="Phone:" {...{ errorObj }} />
          <DInput
            type="text"
            name="address"
            label="Address:"
            {...{ errorObj }}
          />
          <DDatePicker
            name={"pick-up-date"}
            label={"Pick-up date"}
            {...{ errorObj }}
          />
          <DDatePicker
            name={"drop-off-date"}
            label={"Drop-off date"}
            {...{ errorObj }}
          />
          <DTimePicker
            name={"pick-up-time"}
            label={"Pick-up time"}
            {...{ errorObj }}
          />
          <DTimePicker
            name={"drop-off-time"}
            label={"Drop-off time"}
            {...{ errorObj }}
          />
          <Button
            className="bg-primaryColor border-none mt-3 md:-mt-5 text-white"
            htmlType="submit"
          >
            Reserve Now
          </Button>
        </DForm>

        <ConfirmationModal
          {...{
            handleCancel,
            handleConfirmBooking,
            bookingInfo,
            isModalVisible,
          }}
        />
      </div>
      <DarkGradient />
    </section>
  );
};

export default CarBookingForm;
