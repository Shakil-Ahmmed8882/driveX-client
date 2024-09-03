import React, { useState } from "react";
import DModal from "../../../../../shared/modals/DModal";
import CarForm from "../features/CarEditForm";
import { Button } from "antd";
import { useAddCarMutation } from "../../../../../redux/features/cars/carsApi";
import { extractErrorMessage } from "../../../../../types";
import { toast } from "sonner";


const AddCar: React.FC = (): JSX.Element => {
  const [open, setIsOpen] = useState(false);
  const [addCar] = useAddCarMutation();


  const handleAddCar = async (data: any) => {

    const car = {
        ...data,
        pricePerHour: Number(data.pricePerHour),
        isElectric:true,
    }

    
    try {
      const res = await addCar(car).unwrap();
     
      if(res.success){
        toast.success("Car is created successfully.")
      }
      setIsOpen(false)
    } catch (error) {
      const errorMessage = extractErrorMessage(error)
      toast.error(errorMessage)
    }      
  };

  return (
    <div>
      <div className="text-end pb-8">
        <Button
          onClick={() => setIsOpen(true)}
          className="primaryGradient border-none text-white w-1/6"
        >
          Add Car
        </Button>
      </div>
      <DModal setOpen={setIsOpen} open={open}>
        <CarForm isUpdateForm={false} onSubmit={handleAddCar} />
      </DModal>

    </div>
  );
};

export default AddCar;