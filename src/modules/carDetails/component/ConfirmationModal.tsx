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
    <section>
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
    </section>
  );
};

export default ConfirmationModal;