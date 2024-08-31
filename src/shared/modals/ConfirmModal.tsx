import { Button } from "antd";
import { useState } from "react";

interface DeleteModalProps {
  setIsDelete: (isOpen: boolean) => void;
  onConfirm: () => void; // Callback when the user confirms
  onCancel: () => void; // Callback when the user cancels
  title: string; // Title for the confirmation dialog
  description: string; // Description for the confirmation dialog
}

const DeleteConfirmationModal = ({
  setIsDelete,
  onConfirm,
  onCancel,
  title,
  description,
}: DeleteModalProps): JSX.Element => {
  const [isDeleteConfirm, setIsDeleteConfirm] = useState<boolean>(false);

  const handleConfirm = () => {
    onConfirm(); // Notify parent of successful confirmation
    setIsDelete(false); // Close the modal after operation
  };

  const handleCancel = () => {
    setIsDelete(false); // Close the modal
    onCancel(); // Notify parent of cancellation
  };

  return (
    <div className="modal flex h-screen items-center justify-center flex-col">
      <div className="w-1/2 grid justify-center text-center">
        <h1 className="text-2xl md:text-5xl leading-loose">{title}</h1>
        <p className="description text-[20px] mt-3">{description}</p>
        <div className="flex gap-3 items-center justify-center mt-8">
          <Button
            type="primary"
            className="px-20 py-5"
            danger
            onClick={() => {
              if (isDeleteConfirm) {
                handleConfirm();
              } else {
                setIsDeleteConfirm(true);
              }
            }}
          >
            {isDeleteConfirm ? "Confirm" : "Ok"}
          </Button>
          <Button className="px-20 py-5" onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
