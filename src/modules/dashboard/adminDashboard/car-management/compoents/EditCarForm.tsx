import { toast } from "sonner";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../../../../redux/features/cars/carsApi";
import CarForm from "../features/CarEditForm";
import { extractErrorMessage } from "../../../../../types";

const EditCarForm = ({
  carId,
  setIsOpen,
}: {
  carId: string;
  setIsOpen: (param: boolean) => void;
}): JSX.Element => {
  const { data } = useGetSingleCarQuery(carId);
  const [updateCar] = useUpdateCarMutation();

  const singleCarData = data?.data;

  const handleEditForm = async (updatedData: any) => {
    if (!singleCarData) return; // Ensure singleCarData is available

    // Replace empty, undefined, or null fields in updatedData
    //with corresponding values from singleCarData
    // keeping existing field as default and updatte with new that were changed
    const updatedCar = Object.keys(singleCarData).reduce((acc, key) => {
      acc[key] =
        updatedData[key] === undefined ||
        updatedData[key] === null ||
        updatedData[key] === ""
          ? singleCarData[key]
          : updatedData[key];
      return acc;
    }, {} as typeof singleCarData);

    // Remove _id field if it's present
    // remove features cause we don't created form for it yet
    // in backend expect featurs as array of string so Ommit it for now
    const { _id, features,...carDataWithoutId } = updatedCar;

    try {

      console.log(carDataWithoutId)
      // Pass carDataWithoutId to updateCar mutation
      const res = await updateCar({ data: carDataWithoutId, carId }).unwrap();
        console.log(res)
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
