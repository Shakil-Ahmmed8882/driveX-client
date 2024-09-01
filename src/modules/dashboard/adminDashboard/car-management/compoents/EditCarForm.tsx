import { useGetSingleCarQuery, useUpdateCarMutation } from "../../../../../redux/features/cars/carsApi";
import CarForm from "../features/CarEditForm";

const EditCarForm = ({ carId }: { carId: string }): JSX.Element => {
  const { data } = useGetSingleCarQuery(carId);
  const [updateCar] = useUpdateCarMutation();

  const singleCarData = data?.data;

  const handleEditForm = async (updatedData: any) => {
    if (!singleCarData) return; // Ensure singleCarData is available

    // Replace empty, undefined, or null fields in updatedData with corresponding values from singleCarData
    const updatedCar = Object.keys(singleCarData).reduce((acc, key) => {
      acc[key] = (updatedData[key] === undefined || updatedData[key] === null || updatedData[key] === '')
        ? singleCarData[key]
        : updatedData[key];
      return acc;
    }, {} as typeof singleCarData);

    // Remove _id field if it's present
    const { _id, ...carDataWithoutId } = updatedCar;

    console.log({ carDataWithoutId }); // Log the cleaned data
    console.log({ updatedCar });       // Log the merged data

    try {
      // Pass carDataWithoutId to updateCar mutation
      const res = await updateCar({ data: carDataWithoutId, carId });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <CarForm onSubmit={handleEditForm} />;
};

export default EditCarForm;