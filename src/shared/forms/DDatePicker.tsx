import { Form, DatePicker } from "antd";
import { Controller } from "react-hook-form";
import React from "react";
import dayjs, { Dayjs } from "dayjs";

type TDatePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string; // Make defaultValue optional
};

const DDatePicker: React.FC<TDatePickerProps> = ({ name, label, defaultValue }) => {
  // Convert the defaultValue string to a Dayjs object if provided
  const defaultDate: Dayjs | undefined = defaultValue ? dayjs(defaultValue) : undefined;

  return (
    <Form.Item className="mb-5">
      <Controller
        name={name}
        render={({ field }) => (
          <DatePicker
            defaultValue={defaultDate} // Use the Dayjs object or undefined
            className="custom-picker-placeholder-style p-2 bg-[#343434be] border-none text-white placeholder:text-[#8f8f8f] hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be]"
            style={{ width: "100%" }}
            size="large"
            {...field}
            id={name}
            placeholder={label}
          />
        )}
      />
    </Form.Item>
  );
};

export default DDatePicker;
