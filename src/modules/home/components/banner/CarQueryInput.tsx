import { BiLocationPlus } from "react-icons/bi";
import { SearchIcon } from "../../../../assets/icons/Icons";
import { MdDateRange } from "react-icons/md";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useClickOutside from "../../../../hooks/useClickOutside";


const CarQueryInput = ({
  setSearchValue,
}: {
  setSearchValue: (param: string) => void;
}): JSX.Element => {
  const [search, setSearch] = useState<string | null>(null);
  const [isClickOutside, setIsClickOutside] = useState<boolean>(true);

  const queryRef = useRef<HTMLDivElement | null>(null);

  const handleSearchByName = () => {
    setIsClickOutside(false);
    setSearch(search === "search" ? null : "search");
  };

  const handleSearchByLocation = () => {
    setIsClickOutside(false);
    setSearch(search === "location" ? null : "location");
  };

  const handleSearchDateRange = () => {
    setIsClickOutside(false);
    setSearch(search === "date" ? null : "date");
  };

  const handleClickOutside = () => {
    setSearch(null);
    setIsClickOutside(true);
  };

  useClickOutside(queryRef, handleClickOutside);

  const inputVariants = {
    hidden: { opacity: 0, x: 50, position: "absolute" as const },
    visible: { opacity: 1, x: 0, position: "absolute" as const },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -10, position: "absolute" as const },
    visible: { opacity: 1, y: 0, position: "absolute" as const },
  };

  return (
    <div className=" hidden lg:flex items-center justify-center lg:justify-start relative">
      <div className="flex justify-center lg:justify-start gap-4 items-center">
        <SearchIcon />
        <BiLocationPlus onClick={handleSearchByLocation} className="size-6" />
        <MdDateRange onClick={handleSearchDateRange} className="size-6" />

        {isClickOutside && ( // Show only on initial load and when clicking outside
          <motion.button
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -top-2 left-32 transform -translate-x-1/2 px-4 py-2 bg-[#621fcd] text-white rounded-lg shadow-lg"
          >
            Book Now
          </motion.button>
        )}
      </div>

      <div
        ref={queryRef}
        className="relative w-[250px] sm:w-[400px] flex items-center"
      >
        {search === "search" && (
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={inputVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#1e1e1ea1] lg:bg-[#1e1e1e] w-[80%] rounded-lg px-6 py-2"
          >
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search cars"
              type="text"
              className="bg-transparent w-full focus-within:outline-none"
            />
          </motion.div>
        )}

        {search === "location" && (
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={inputVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#1e1e1ea1] lg:bg-[#1e1e1e] w-[80%] rounded-lg px-6 py-2 "
          >
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Cars by Location"
              type="text"
              className="bg-transparent w-full focus-within:outline-none"
            />
          </motion.div>
        )}

        {search === "date" && (
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={inputVariants}
            transition={{ duration: 0.5 }}
            className="bg-[#1e1e1ea1] lg:bg-[#1e1e1e] w-[80%] rounded-lg px-6 py-2 w-full"
          >
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Cars on Date"
              type="text"
              className="bg-transparent w-full focus-within:outline-none"
            />
          </motion.div>
        )}
      </div>

      {search !== null && (
        <motion.button
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={buttonVariants}
          transition={{ duration: 0.5 }}
          className="absolute -top-2 left-3/4 transform -translate-x-1/2 px-4 py-2 bg-[#621fcd] text-white rounded-lg shadow-lg"
        >
          Book Now
        </motion.button>
      )}
    </div>
  );
};

export default CarQueryInput;
