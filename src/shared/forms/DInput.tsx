import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

import AnimateUp from "../animations/AnimateUp";
type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  errorObj?: {
    error?: string;
    message?: string;
  };
};

const DInput = ({ type = 'text', name, label, className, defaultValue, errorObj }: TInputProps) => {
  

  return (
    <AnimateUp>
    <Form.Item style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Input
            autoComplete="off"
            placeholder={label}
            className={`
              ${className}
               shadow  placeholder:text-[#989898]   placeholder:text-sm border-none p-2 
              text-xl`}
            {...field}
            type={type}
            id={name}
          />
        )}
      />
      {errorObj?.error && errorObj?.error === name && <small className="text-red-500">{errorObj?.message}</small>}
    </Form.Item>
    </AnimateUp>
  );
};

export default DInput;
