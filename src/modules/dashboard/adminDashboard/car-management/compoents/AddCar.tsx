import React, { useState } from "react";
import DModal from "../../../../../shared/modals/DModal";
import CarForm from "../features/CarEditForm";
import { Button } from "antd";
import { useAddCarMutation } from "../../../../../redux/features/cars/carsApi";
import SuccessModal from "../../../../../shared/modals/SuccessModal";
import useModal from "../../../../../hooks/useModal";
import { extractErrorMessage, TError } from "../../../../../types";

interface AddCarProps {
  carId: string;
}

const AddCar: React.FC<AddCarProps> = ({ carId }): JSX.Element => {
  const [open, setIsOpen] = useState(false);
  const [addCar] = useAddCarMutation();
  const { modalState, showSuccess, showError, closeModal } = useModal();

  const handleAddCar = async (data: any) => {

    const car = {
        ...data,
        pricePerHour: Number(data.pricePerHour),
        isElectric:true,
    }

    console.log(car)
    try {
      const res = await addCar(car).unwrap();
      if(res?.success){
        showSuccess("Car Added Successfully💘",
            "The car has been added to the system.");
      }
      

    } catch (error) {
        const errorMessage = extractErrorMessage(error);
        showError(errorMessage, "There was an error adding the car. Please try again.");
    }
  };

  return (
    <div>
      <div className="text-end pb-8">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primaryColor border-none text-white w-1/6"
        >
          Add Car
        </Button>
      </div>
      <DModal setOpen={setIsOpen} open={open}>
        <CarForm onSubmit={handleAddCar} />
      </DModal>

      <SuccessModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />
    </div>
  );
};

export default AddCar;