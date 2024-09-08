import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

const SearchInput = ({
  setSearchValue,
  className =''
}: {
  setSearchValue: (param: string) => void;
  className?:string
}): JSX.Element => {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      className={`${className} w-full bg-[white] border-none transition-all duration-500  shadow-md rounded-lg   sm:px-6 sm:py-1 flex items-center  gap-2 text-white`}
    >
        <SearchIcon className="text-[black]"/>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search cars"
        type="text"
        className={`text-black bg-transparent py-3 w-full focus-within:outline-none`}
      />
    </motion.div>
  );
};

export default SearchInput;
