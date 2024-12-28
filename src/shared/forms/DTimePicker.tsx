


import { Form, TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";


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
            className=" p-2 custom-date-picker placeholder:text-sm border-none placeholder:text-[#555555]"
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
      {errorObj?.error && errorObj?.error === name && <small className="text-red-500">{errorObj?.message}</small>}
    </Form.Item>
  );
};

export default DTimePicker;