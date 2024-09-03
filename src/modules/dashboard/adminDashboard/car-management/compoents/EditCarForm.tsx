import { toast } from "sonner";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../../../../redux/features/cars/carsApi";
import CarForm from "../features/CarEditForm";
import { extractErrorMessage } from "../../../../../types";
import { TCar } from "../../../../allCars/type";

const EditCarForm = ({
  carId,
  setIsOpen,
}: {
  carId: string;
  setIsOpen: (param: boolean) => void;
}): JSX.Element | null => {
  const { data } = useGetSingleCarQuery(carId);
  const [updateCar] = useUpdateCarMutation();

  const singleCarData = data?.data as TCar | undefined;

  // Ensure singleCarData is available before proceeding
  if (!singleCarData) return null;

  const handleEditForm = async (updatedData: any) => {
    const updatedCar: TCar = Object.keys(singleCarData).reduce((acc, key) => {
      const typedKey = key as keyof TCar;

      acc[typedKey] =
        updatedData[typedKey] === undefined ||
        updatedData[typedKey] === null ||
        updatedData[typedKey] === ""
          ? singleCarData[typedKey]
          : updatedData[typedKey];

      return acc;
    }, {} as Partial<TCar>) as TCar;

    const { _id, features, ...carDataWithoutId } = updatedCar;

    try {
      const res = await updateCar({ data: carDataWithoutId, carId }).unwrap();
      if (res.success) {
        toast.success("Car is updated successfully.");
      }
      setIsOpen(false);
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  return <CarForm isUpdateForm={true} onSubmit={handleEditForm} />;
};

export default EditCarForm;
