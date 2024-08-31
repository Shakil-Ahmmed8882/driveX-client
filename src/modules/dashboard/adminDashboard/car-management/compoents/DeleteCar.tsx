import { useDeleteCarMutation } from "../../../../../redux/features/cars/carsApi";
import DeleteConfirmationModal from "../../../../../shared/modals/ConfirmModal";

type deleteCarProps = {
  setIsDelete: (isOpen: boolean) => void;
  carId: string;
};
const DeleteCar = ({ setIsDelete, carId }: deleteCarProps): JSX.Element => {
  const [deleteCar] = useDeleteCarMutation();

  const handleConfirm = async () => {
    console.log("ok");

    const res = await deleteCar(carId);
    console.log(res);
        
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
