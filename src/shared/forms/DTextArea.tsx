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
        <TextArea className="bg-[#343434be] shadow placeholder:text-[#8f8f8f] placeholder:text-sm border-none hover:bg-[#3f3f3f99] focus-within:bg-[#343434be]  text-[white] p-2" {...field} id={name} placeholder={placeholder} rows={4} />
      )}
    />
  );
};

export default DTextArea;
