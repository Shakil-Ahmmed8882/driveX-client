import { Button } from "antd";
import DForm from "../../../../shared/forms/DForm";
import DInput from "../../../../shared/forms/DInput";
import Container from "../../../../shared/layouts/Container";

import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import DDatePicker from "../../../../shared/forms/DDatePicker";
import DTimePicker from "../../../../shared/forms/DTimePicker";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "../../../../redux/features/user/booking.api";
import { toast } from "sonner";
import { extractErrorMessage } from "../../../../types";
import formatBookingData from "../../../shared/utils";
import Spinner from "../../../../shared/ui/Spinner";


const EditBookedCarForm = ({
  bookingId,
  setOpen,
}: {
  bookingId: string;
  setOpen: (param: boolean) => void;
}): JSX.Element => {
  const { data, isLoading } = useGetSingleBookingQuery(bookingId);
  const [updateBooking] = useUpdateBookingMutation();

  if (isLoading) return <Spinner/>;

  const {
    "pick-up-date": pickUpDate,
    "drop-off-date": dropOffDate,
    "pick-up-time": pickUpTime,
    "drop-off-time": dropOffTime,
    name,
    email,
    phone,
    address,
  } = data?.data || {};

  const handleSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    


    const bookingData = formatBookingData(data, bookingId,{isEditForm: true} )
    try {
      const res = await updateBooking({ bookingId, formattedData:bookingData }).unwrap();

      if (res.success) {
        toast.success("Booking is updated successfully.");
        setOpen(false);
      }
    } catch (error) {
      const message = extractErrorMessage(error);
      toast.error(message);
    }
  };

  return (
    <Container className="max-w-[1100px]">
      <div className="grid gap-4 md:gap-8 py-8 px-6 rounded-b-lg bg-[#35353579]">
        <div className="grid gap-2">
          <h2 className="text-3xl font-bold">Edit booking</h2>
          <p className="description mt-2 pb-3">
            Fill out the form below to reserve your car.
          </p>
        </div>
        <DForm
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 items-center"
        >
          <DInput
            defaultValue={name}
            type="text"
            name="name"
            label="Full Name:"
          />
          <DInput
            type="text"
            defaultValue={email}
            name="email"
            label="Email:"
          />
          <DInput
            defaultValue={Number(phone)}
            type="number"
            name="phone"
            label="Phone:"
          />
          <DInput
            type="text"
            defaultValue={address}
            name="address"
            label="Address:"
          />
          <DDatePicker
            defaultValue={pickUpDate}
            name={"pick-up-date"}
            label={"Pick-up date"}
          />
          <DDatePicker
            defaultValue={dropOffDate}
            name={"drop-off-date"}
            label={"Drop-off date"}
          />
          <DTimePicker
            defaultValue={pickUpTime}
            name={"pick-up-time"}
            label={"Pick-up time"}
          />
          <DTimePicker
            defaultValue={dropOffTime}
            name={"drop-off-time"}
            label={"Drop-off time"}
          />
          <Button
            className="primaryGradient border-none mt-3 md:-mt-5 text-white"
            htmlType="submit"
          >
            Reserve Now
          </Button>
        </DForm>
      </div>
    </Container>
  );
};

export default EditBookedCarForm;
