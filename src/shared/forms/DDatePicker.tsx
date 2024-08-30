import { Form, DatePicker } from "antd";
import { Controller } from "react-hook-form";
import React from "react";
import { Dayjs } from "dayjs";

type TDatePickerProps = {
  name: string;
  label?: string;
};

const DDatePicker: React.FC<TDatePickerProps> = ({ name, label }) => {

  return (
    <Form.Item
      className="mb-5" // Tailwind class for margin-bottom
    >
      <Controller
        name={name}
        render={({ field }) => (
          <DatePicker
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
