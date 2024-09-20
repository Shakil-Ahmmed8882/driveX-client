import dayjs from "dayjs";

interface BookingInfo {
  name?: string;
  email?: string;
  phone?: string;
  car?: string;
  address?: string;
  "pick-up-date"?: string;
  "drop-off-date"?: string;
  "pick-up-time"?: string;
  "drop-off-time"?: string;
}

const formatBookingData = (
  data: any,
  carId: string | undefined,
  {isEditForm}: {isEditForm?: boolean}
): BookingInfo => {
  const formattedData: BookingInfo = {
    ...data,
    // Conditionally set car or bookingId based on isEditForm
    ...(isEditForm ? { bookingId: carId }: { car: carId } ),

    // Format pick-up and drop-off dates
    "pick-up-date": dayjs(data["pick-up-date"]).isValid()
      ? dayjs(data["pick-up-date"]).format("YYYY-MM-DD")
      : "",
    "drop-off-date": dayjs(data["drop-off-date"]).isValid()
      ? dayjs(data["drop-off-date"]).format("YYYY-MM-DD")
      : "",

    // Format pick-up and drop-off times
    "pick-up-time": dayjs(data["pick-up-time"], "HH:mm").isValid()
      ? dayjs(data["pick-up-time"], "HH:mm").format("HH:mm:ss")
      : "",
    "drop-off-time": dayjs(data["drop-off-time"], "HH:mm").isValid()
      ? dayjs(data["drop-off-time"], "HH:mm").format("HH:mm:ss")
      : "",
  };

  return formattedData;
};

export default formatBookingData;
