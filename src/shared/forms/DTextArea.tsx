import { Input } from "antd";
const { TextArea } = Input;
import { Controller } from "react-hook-form";

type TTextAreaProps = {
  name: string;
  placeholder: string;
};
const DTextArea = ({ name, placeholder }: TTextAreaProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextArea {...field} id={name} placeholder={placeholder} rows={4} />
      )}
    />
  );
};

export default DTextArea;
