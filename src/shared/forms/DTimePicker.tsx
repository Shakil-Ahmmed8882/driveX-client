


import { Form, TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import InputError from "../ui/inputError";

type TTimePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  errorObj?: {
    error?: string;
    message?: string;
  };
};

const DTimePicker = ({ name, label, defaultValue, errorObj }: TTimePickerProps) => {
  const { control } = useFormContext();

  const defaultDate: Dayjs | null = defaultValue
    ? dayjs(defaultValue, "HH:mm:ss", true)
    : null;
    

  return (
    <Form.Item style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimePicker
            className="custom-picker-placeholder-style p-2 bg-[#343434be] placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be] !text-[white]"
            value={field.value ? dayjs(field.value, "HH:mm:ss") : null}
            style={{ width: "100%" }}
            size="large"
            format="HH:mm"
            placeholder={label}
            defaultValue={defaultDate}
            onChange={(time) => {
              if (time) {
                const formattedTime = time.format("HH:mm:ss");
                field.onChange(formattedTime);
              } else {
                field.onChange(null);
              }
            }}
          />
        )}
      />
      {errorObj?.error && errorObj?.error === name && <InputError  errorText={errorObj?.message} />}
    </Form.Item>
  );
};

export default DTimePicker;