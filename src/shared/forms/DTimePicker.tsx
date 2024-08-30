    import { Form, TimePicker } from "antd";
    import { Controller, useFormContext } from "react-hook-form";

    import { Dayjs } from "dayjs"; // Import dayjs type for date handling

    // Define the props type for DTimePicker
    type TTimePickerProps = {
    name: string;
    label?: string;
    };

    const DTimePicker = ({ name, label }: TTimePickerProps) => {
    const { control } = useFormContext(); // Use useFormContext to get the control object

    const onChange = (date: Dayjs | null, dateString: string) => {
        console.log(date, dateString);
    };

    return (
        <Form.Item
        style={{
            marginBottom: "20px",
        }}
        >
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TimePicker
            className="custom-picker-placeholder-style p-2 bg-[#343434be] placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be]  !text-[white]"
                style={{ width: "100%" }}
                size="large"
                {...field}
                id={name}
                format={"HH:mm"}
                placeholder={label}
                
            />
            )}
        />
        </Form.Item>
    );
    };

    export default DTimePicker;
