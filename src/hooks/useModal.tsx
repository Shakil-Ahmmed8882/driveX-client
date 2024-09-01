import { useState } from "react";

interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  type: "success" | "error";
}

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });

  const showSuccess = (title: string, message: string) => {
    setModalState({
      isOpen: true,
      title,
      message,
      type: "success",
    });
  };

  const showError = (title: string, message: string) => {
    setModalState({
      isOpen: true,
      title,
      message,
      type: "error",
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return {
    modalState,
    showSuccess,
    showError,
    closeModal,
  };
};

export default useModal;
