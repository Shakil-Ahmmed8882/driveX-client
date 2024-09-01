import { Button } from "antd";
import { useState } from "react";
import { useDeleteBookingMutation } from "../../../../redux/features/user/booking.api";

interface DeleteModalProps {
  setIsDelete: (isOpen: boolean) => void;
  bookingId: string; // Assuming bookingId is a string, adjust type if needed
}

const DeleteModal = ({
  setIsDelete,
  bookingId,
}: DeleteModalProps): JSX.Element => {
  const [isDeleteConfirm, setIsDeleteConfirm] = useState<boolean>(false);
  const [deleteBooking] = useDeleteBookingMutation();

  const handleDelete = async () => {
    try {
      deleteBooking(bookingId);
      // You can add success notification or callback here

      console.log(bookingId);
    } catch (error) {
      console.error("Failed to delete item:", error);
      // Optionally, handle the error (show notification, etc.)
    } finally {
      setIsDelete(false); // Close the modal after operation
    }
  };

  return (
    <div className="modal flex h-screen  items-center justify-center flex-col ">
      <div className="w-1/2 grid justify-center text-center">
        <h1 className=" text-2xl md:text-5xl leading-loose">
          Are you sure you?
        </h1>
        <p className="description text-[20px] mt-3">
          Once deleted this item can not be reverted
        </p>
        <div className="flex gap-3 items-center  justify-center mt-8">
          <Button
            type="primary"
            className="px-20 py-5"
            danger
            onClick={() => {
              if (isDeleteConfirm) {
                handleDelete();
              } else {
                setIsDeleteConfirm(true);
              }
            }}
          >
            {isDeleteConfirm ? "Confirm" : "Ok"}
          </Button>
          <Button className="px-20 py-5" onClick={() => setIsDelete(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
