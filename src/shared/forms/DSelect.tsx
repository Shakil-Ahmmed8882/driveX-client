import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import { TFormSelectProps } from "./types";

const DSelect = ({
  name,
  options,
  defaultValue,
  disabled,
  className,
  placeholder,
}: TFormSelectProps): JSX.Element => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item>
          <Select
            className={`${className} placeholder:text-[#555555]  `}
            disabled={disabled}
            defaultValue={defaultValue}
            style={{ width: "100%" }}
            {...field}
            options={options}
            clearIcon={true}
            size="large"
            placeholder={placeholder}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default DSelect;
