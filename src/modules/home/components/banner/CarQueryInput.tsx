import { BiLocationPlus } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { useAppDispatch } from "../../../../redux/hooks";
import { setSearchClick } from "../../../../redux/features/global/global.slice";

const CarQueryInput = (): JSX.Element => {
  const navigate = useNavigate();
  const dispach = useAppDispatch()

  
    const handleClick = () => {
      dispach(setSearchClick(true))
    }
    
  return (
    <div className=" hidden lg:flex items-center justify-center lg:justify-start relative">
      <div className="flex justify-center lg:justify-start gap-4 items-center">
        <BiLocationPlus onClick={handleClick} className="size-6 cursor-pointer" />
        <MdDateRange onClick={handleClick} className="size-6 cursor-pointer" />
        <SearchIcon onClick={handleClick} className="size-6 cursor-pointer" />
        <motion.button
          onClick={() => navigate("/bookings")}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" px-4 py-2  primaryGradient text-white rounded-lg shadow-lg"
        >
          Book Now
        </motion.button>
      </div>
    </div>
  );
};

export default CarQueryInput;
