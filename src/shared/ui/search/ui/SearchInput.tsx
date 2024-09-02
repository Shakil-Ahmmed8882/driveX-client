import { motion } from "framer-motion";
import { SearchIcon } from "lucide-react";

const SearchInput = ({
  setSearchValut,
}: {
  setSearchValut: (param: string) => void;
}): JSX.Element => {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
      className="bg-lightGray transition-all duration-500  shadow-md rounded-full px-6 py-2 flex items-center  gap-2 text-white"
    >
        <SearchIcon/>
      <input
        onChange={(e) => setSearchValut(e.target.value)}
        placeholder="Search cars"
        type="text"
        className="bg-transparent py-3 w-full focus-within:outline-none"
      />
    </motion.div>
  );
};

export default SearchInput;
