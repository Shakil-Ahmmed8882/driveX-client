// // import { Form, TimePicker } from "antd";
// // import { Controller, useFormContext } from "react-hook-form";
// // import dayjs, { Dayjs } from "dayjs"; // Import dayjs type for date handling

// // // Define the props type for DTimePicker
// // type TTimePickerProps = {
// //   name: string;
// //   label?: string;
// //   defaultValue?: string; // Expecting a time string in "HH:mm:ss" format
// // };

// // const DTimePicker = ({ name, label, defaultValue }: TTimePickerProps) => {
// //   const { control } = useFormContext(); // Use useFormContext to get the control object

// //   // Convert defaultValue to a dayjs object if it's a valid time string
// //   const defaultDate: Dayjs | null = defaultValue 
// //     ? dayjs(`1970-01-01T${defaultValue}`, 'YYYY-MM-DDTHH:mm:ss', true) 
// //     : null;

// //   return (
// //     <Form.Item
// //     //   label={label}
// //       style={{ marginBottom: "20px" }}
// //     >
// //       <Controller
// //         name={name}
// //         control={control}
// //         render={({ field }) => (
// //           <TimePicker
// //           className="custom-picker-placeholder-style p-2 bg-[#343434be] placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be] !text-[white]"
// //           defaultValue={defaultDate} // Use `value` to set the initial time
// //             style={{ width: "100%" }}
// //             size="large"
// //             {...field}
// //             id={name}
// //             format="HH:mm"
// //             placeholder={label}
// //             onChange={(time, timeString) => {
// //               // Handle the time change event
// //               console.log(time, timeString);
// //               field.onChange(timeString); // Ensure field.onChange is called with the new value
// //             }}
// //           />
// //         )}
// //       />
// //     </Form.Item>
// //   );
// // };

// // export default DTimePicker;




// import { Form, TimePicker } from "antd";
// import { Controller, useFormContext } from "react-hook-form";
// import dayjs, { Dayjs } from "dayjs";

// type TTimePickerProps = {
//   name: string;
//   label?: string;
//   defaultValue?: string; // Expecting a time string in "HH:mm:ss" format
// };

// const DTimePicker = ({ name, label, defaultValue }: TTimePickerProps) => {
//   const { control } = useFormContext();

//   // Convert defaultValue to a valid Dayjs object if it's a valid time string
//   const defaultDate: Dayjs | null = defaultValue
//     ? dayjs(defaultValue, "HH:mm:ss", true)
//     : null;

//   return (
//     <Form.Item style={{ marginBottom: "20px" }}>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <TimePicker
//             className="custom-picker-placeholder-style p-2 bg-[#343434be] placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3fbe] focus-within:bg-[#343434be] !text-[white]"
//             value={field.value ? dayjs(field.value, "HH:mm:ss") : null} // Ensure the value is correctly formatted
//             style={{ width: "100%" }}
//             size="large"
//             format="HH:mm"
//             placeholder={label}
//             onChange={(time) => {
//               if (time) {
//                 const formattedTime = time.format("HH:mm:ss");
//                 field.onChange(formattedTime);
//               } else {
//                 field.onChange(null); // Clear the time if no selection is made
//               }
//             }}
//           />
//         )}
//       />
//     </Form.Item>
//   );
// };

// export default DTimePicker;



import { Form, TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type TTimePickerProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const DTimePicker = ({ name, label, defaultValue }: TTimePickerProps) => {
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
    </Form.Item>
  );
};

export default DTimePicker;