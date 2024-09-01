import React, { useState, useEffect, useRef } from "react";
import placeholder from "../../../assets/images/home/featured/bg-car3.jpg";
import { useSSLPayAndReturnCarMutation } from "../../../redux/features/user/payment.api";
import { useGetMyAllBookingsQuery } from "../../../redux/features/user/booking.api";
import { Tbooking, TCar, TUser } from "../../../types/booking.type";
import { handleError } from "../../carDetails/component/CarImage";

const ReturnAndPaymentPage: React.FC = () => {
  const { data, isLoading } = useGetMyAllBookingsQuery(undefined);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedBooking, setSelectedBooking] = useState<Tbooking | null>(null);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // hooks
  const [SSLPayment] = useSSLPayAndReturnCarMutation();

  const handleReturnCar = (booking: Tbooking) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const handlePay = async () => {
    if (!selectedBooking) {
      setError("Booking information is missing.");
      return;
    }

    const paymentData = {
      bookingId: selectedBooking._id,
      price: selectedBooking?.car?.pricePerHour,
    };

    const res = await SSLPayment(paymentData);
    if (res?.data?.url) {
      window.location.replace(res?.data?.url);
    }

    setIsModalVisible(false);
    setError(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setError(null);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCancel();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  if (isLoading) return <>...</>;

  const allUserBookings = data?.data?.result;

  return (
    <div className="text-white p-5 rounded-lg ">

      <div className="md:grid lg:grid-cols-2 gap-8 pt-11 lg:justify-center">
        {allUserBookings?.map((booking: Tbooking) => {
          const { car, user } = booking || {};
          return (
            <ReturnBookingCard
              {...{ car, user, booking, handleReturnCar }}
              key={booking.bookingId}
            />
          );
        })}
      </div>

      {isModalVisible && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-gray-700 text-white p-5 rounded-lg w-80 text-center"
          >
            <h3 className="text-lg mb-2">Complete Payment</h3>
            <p className="mb-4">Proceed with the payment for the total cost?</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={handlePay}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Pay ${selectedBooking?.car?.pricePerHour}
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnAndPaymentPage;

const ReturnBookingCard: React.FC<{
  car: TCar;
  user: TUser;
  booking: Tbooking;
  handleReturnCar: (booking: Tbooking) => void;
}> = ({ car, user, booking, handleReturnCar }) => {
  return (
    <div className="overflow-hidden bg-[#2B2B2B] rounded-lg p-4 flex items-center w-full shadow-lg transition-all duration-500 hover:-translate-y-2">
      <div className="flex-1 w-1/2">
        <img
          src={car?.image || placeholder}
          alt={`${car?.name}`}
          className="w-full h-40 object-cover rounded-lg"
          onError={handleError}
        />
      </div>
      <div className="flex-1 ml-4 text-right ">
        <h3 className="text-lg    font-semibold mb-1">Car: {car?.name}</h3>
        <p className="text-lg   description   mt-4"><span className="text-green">Booked Name:</span> {booking?.name}</p>

        <button
          disabled={booking.isPaid}
          onClick={() => handleReturnCar(booking)}
          className={`
          ${
            booking.isPaid
              ? "bg-gradient-to-r cursor-not-allowed  from-[#a7aea97d] to-[#9a9c9ac7] text-white"
              : "bg-primaryColor  text-sm rounded-lg hover:bg-primaryColor/90 "
          }    transition-colors rounded-lg duration-200 px-5 mt-6 py-3`}
        >
          Return Car
        </button>
      </div>
    </div>
  );
};
