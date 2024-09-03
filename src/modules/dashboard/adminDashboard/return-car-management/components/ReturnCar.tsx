import  { useState } from "react";
import { Button } from "antd";
import { useReturnCarMutation } from "../../../../../redux/features/user/booking.api";
import { toast } from "sonner";
import { extractErrorMessage } from "../../../../../types";
import SlideUpModal from "../../../../../shared/modals/SlideUpModal";

const ReturnCar = ({ record }: { record: any }): JSX.Element => {
  const { _id: bookingId, duration } = record || {};
  const [returnCar] = useReturnCarMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleReturn = () => {
    setIsModalVisible(true);
  };

  const handleConfirmReturn = async () => {
    const returnCarData = {
      bookingId,
      duration,
    };

    try {
      const res = await returnCar(returnCarData).unwrap();
      if (res.success) {
        toast.success(res.message);
        setIsModalVisible(false); // Close modal after success
      }
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  let buttonBgColor = "";

  if (record?.isPaid) {
    buttonBgColor = "primaryGradient hover:!bg-[red]";
  }

  if (record?.isPaid && record?.isReturned) {
    buttonBgColor = "bg-[gray] cursor-not-allowed hover:!bg-[gray]";
  }

  if (!record?.isPaid) {
    buttonBgColor = "bg-[gray] cursor-not-allowed hover:!bg-[gray]";
  }

  return (
    <section>
      <Button
        className={`
          ${buttonBgColor}
          border-none !text-white
          w-20
        `}
        onClick={handleReturn}
        disabled={!record.isPaid || record.isReturned}
      >
        {record?.isReturned ? "Returned" : record.isPaid ? "Return" : "Not Paid"}
      </Button>

      {/* Modal for return confirmation */}
      <SlideUpModal isVisible={isModalVisible} onClose={handleCancel}>
        <h3 className="text-2xl mb-2">Confirm Return</h3>
        <p className="mb-4 description pb-8">
          Are you sure you want to return this car?
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={handleConfirmReturn}
            className="bg-[#313030] text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Return
          </button>
          <button
            onClick={handleCancel}
            className="bg-[#313030] text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </SlideUpModal>
    </section>
  );
};

export default ReturnCar;