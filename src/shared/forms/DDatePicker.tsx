import { Form, DatePicker } from "antd";
import { Controller } from "react-hook-form";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import InputError from "../ui/inputError";


type TDatePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string; // Make defaultValue optional
  errorObj?: {
    error?: string;
    message?: string;
  };
};


const DDatePicker: React.FC<TDatePickerProps> = ({ name, label, defaultValue, errorObj }) => {
  // Convert the defaultValue string to a Dayjs object if provided
  const defaultDate: Dayjs | undefined = defaultValue ? dayjs(defaultValue) : undefined;

  

  return (
    <Form.Item className="mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <DatePicker
            
            defaultValue={defaultDate} // Use the Dayjs object or undefined
            className=" p-2 custom-date-picker text-[black]  "
            style={{ width: "100%" }}
            size="large"
            {...field}
            id={name}
            placeholder={label}
          />
        )}
      />
      {errorObj?.error && errorObj?.error === name && <InputError errorText={errorObj?.message} />}
    </Form.Item>
  );
};

export default DDatePicker;
