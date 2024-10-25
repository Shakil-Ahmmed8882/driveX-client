import React from 'react';
import SlideUpModal from "../../../shared/modals/SlideUpModal";


// Define the interface for booking information
interface BookingInfo {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  "pick-up-date"?: string;
  "drop-off-date"?: string;
  "pick-up-time"?: string;
  "drop-off-time"?: string;
}

// Define the props interface for ConfirmationModal
interface ConfirmationModalProps {
  handleCancel: () => void;
  isModalVisible: boolean;
  bookingInfo: BookingInfo;
  handleConfirmBooking: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  handleCancel,
  isModalVisible,
  bookingInfo,
  handleConfirmBooking,
}) => {
  return (
    <section className='relative z-50'>
      {/* Confirmation Modal */}
      <SlideUpModal
        className="w-[500px]"
        isVisible={isModalVisible}
        onClose={handleCancel}
      >
        <div className="text-left">
          <h3 className="text-3xl  mb-2 font-bold ">Confirm Your Booking</h3>
          <p className='mb-5 text-gray-500'>Ensure that all of your infomation are accurate. This is essential to get you for the rentals.</p>
          
          <div className="mb-4 description space-y-3">
            <p>
              <span className="text-primaryColor text-[17px]">Full Name:</span>{" "}
              {bookingInfo.name}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">Email:</span>{" "}
              {bookingInfo.email}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">Phone:</span>{" "}
              {bookingInfo.phone}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">Address:</span>{" "}
              {bookingInfo.address}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">
                Pick-up Date:
              </span>{" "}
              {bookingInfo["pick-up-date"]}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">
                Drop-off Date:
              </span>{" "}
              {bookingInfo["drop-off-date"]}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">
                Pick-up Time:
              </span>{" "}
              {bookingInfo["pick-up-time"]}
            </p>
            <p>
              <span className="text-primaryColor text-[17px]">
                Drop-off Time:
              </span>{" "}
              {bookingInfo["drop-off-time"]}
            </p>
          </div>
          <div className="flex justify-end gap-2 pt-8">
            <button
              onClick={handleCancel}
              className="   bg-gray-100  px-4 py-2 rounded hover:bg-gray-200"
            >
              Edit Details
            </button>
            <button
              onClick={handleConfirmBooking}
              className="bg-primaryColor text-white px-4 py-2 rounded hover:bg-primaryColor/90"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </SlideUpModal>
    </section>
  );
};

export default ConfirmationModal;