import React from "react";

import Container from "../../../../../shared/layouts/Container";
import DForm from "../../../../../shared/forms/DForm";
import DInput from "../../../../../shared/forms/DInput";
import { Button } from "antd";
import DSelect from "../../../../../shared/forms/DSelect";
import { carStatusOptions } from "../../../../../shared/constants/global";
import { CarFormProps, CarFormValues } from "../../../../../types/car.type";

const CarForm: React.FC<CarFormProps> = ({ isUpdateForm, onSubmit }) => {
  const handleSubmit = (formData: CarFormValues) => {
    const formattedData: CarFormValues = {
      name: formData.name,
      type: formData.type,
      description: formData.description,
      color: formData.color,
      isElectric: formData.isElectric,
      status: formData.status,
      pricePerHour: formData.pricePerHour,
      image: formData.image,
    };
    onSubmit(formattedData);
  };

  return (
    <Container className="max-w-[1100px]">
      <div className="grid gap-4 md:gap-8 py-8 px-6 rounded-b-lg bg-[#35353579]">
        <h2 className="text-3xl font-bold">
          {isUpdateForm ? "Edit Car" : "Add New Car"}
        </h2>
        <DForm
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 items-center"
        >
          <DInput name="name" type="text" label="Car Name:" />
          <DInput name="type" type="text" label="Car Type:" />
          <DInput name="description" type="text" label="Description:" />
          <DInput name="color" type="text" label="Color:" />
          <DSelect name="status" label="Status:" options={carStatusOptions} />
          <DInput name="pricePerHour" type="number" label="Price Per Hour:" />
          <DInput name="image" type="text" label="Image URL:" />
          <Button
            className="bg-primaryColor border-none mt-3 md:-mt-5 text-white"
            htmlType="submit"
          >
            {isUpdateForm ? "Update Car" : "Add Car"}
          </Button>
        </DForm>
      </div>
    </Container>
  );
};

export default CarForm;
