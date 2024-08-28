import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type TCar = {
  name: string;
  price: string;
  imageUrl: string;
};

type CarCardProps = {
  car: TCar;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Link to='/cars/id'>
      <motion.div
        className="rounded-lg shadow-lg overflow-hidden"
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img
          src={car.imageUrl}
          alt={car.name}
          className="w-44 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <p className="text-lg font-medium text-gray-600">{car.price}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarCard;
