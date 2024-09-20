import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import { TFormSelectProps } from "./types";
import { MapPinIcon } from "lucide-react";


const DSelect = ({
  label,
  name,
  options,
  defaultValue,
  disabled,
  className,
  placeholder
}: TFormSelectProps): JSX.Element => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item>
          <Select
            className={`${className} custom-select !text-white`} // Apply the custom class
            disabled={disabled}
            defaultValue={defaultValue}
            style={{ width: "100%" }}
            {...field}
            options={options}
            clearIcon={true
              
            }
            size="large"
            placeholder={placeholder}
            // dropdownStyle={{backgroundColor:'#715BE6/', color:"#fff"}}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}

        </Form.Item>
      )}
    />
  );
};

export default DSelect;
