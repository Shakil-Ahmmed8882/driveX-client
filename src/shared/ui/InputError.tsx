import AnimateUp from "../animations/AnimateUp";



const InputError = ({ errorText }: { errorText: string | undefined}) => {
  return <AnimateUp className="absolute w-full"><small className="text-[#ff003c] font-bold tracking-widest left-1 -mt-8  absolute bottom-0">{errorText}</small>;</AnimateUp>
};

export default InputError;
