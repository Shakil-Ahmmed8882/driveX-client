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
      console.log(bookingId)
    } catch (error) {
      console.error("Failed to delete item:", error);
      // Optionally, handle the error (show notification, etc.)
    } finally {
      setIsDelete(false); // Close the modal after operation
    }
  };

  return (
    <div className="modal">
      <h1>Are you sure you want to delete this item?</h1>
      <div className="flex gap-3 items-center">
        <Button
          type="primary"
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
        <Button onClick={() => setIsDelete(false)}>Cancel</Button>
      </div>
    </div>
  );
};

export default DeleteModal;
