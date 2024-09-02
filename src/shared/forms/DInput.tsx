import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
};

const DInput = ({ type, name, label, className, defaultValue }: TInputProps) => {
  const { theme } = { theme: "dark" };

  return (
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
              ${
                theme === "dark"
                  ? "bg-[#343434be] shadow placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3f99] focus-within:bg-[#343434be]  text-[white] p-2"
                  : ""
              }
              text-xl`}
            {...field}
            type={type}
            id={name}
          />
        )}
      />
    </Form.Item>
  );
};

export default DInput;
