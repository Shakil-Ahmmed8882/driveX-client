import { toast } from "sonner";
import { useDeleteCarMutation } from "../../../../../redux/features/cars/carsApi";
import DeleteConfirmationModal from "../../../../../shared/modals/ConfirmModal";
import { extractErrorMessage } from "../../../../../types";

type deleteCarProps = {
  setIsDelete: (isOpen: boolean) => void;
  carId: string;
  setIsOpen: (param: boolean ) => void
};
const DeleteCar = ({ setIsDelete, carId, setIsOpen }: deleteCarProps): JSX.Element => {
  const [deleteCar] = useDeleteCarMutation();

  const handleConfirm = async () => {


    // Delete a car
    try {
      const res = await deleteCar(carId).unwrap();
      if(res.success){
        toast.success("Car is deleted successfully.")
      }
      setIsOpen(false)
    } catch (error) {
      
      const errorMessage = extractErrorMessage(error)
      toast.error(errorMessage)
    }
    
    


        
  };

  return (
    <DeleteConfirmationModal
      setIsDelete={setIsDelete}
      onConfirm={handleConfirm}
      onCancel={() => setIsDelete(false)}
      title="Are you sure?"
      description="Once deleted, this item cannot be reverted."
    />
  );
};

export default DeleteCar;
