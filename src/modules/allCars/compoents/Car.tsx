import { Link } from "react-router-dom";
import { MarkedFavorite } from "../../../assets/icons/Index";
import Ratings from "../../../components/ui/Ratings";
import CarImage from "./CarImage";
import { motion } from "framer-motion";

const Car = ({ car }: { car: any }): JSX.Element => {
  //   const { _id,name,description,color,isElectric,status,features,pricePerHour,isDeleted,image,createdAt,updatedAt,__v
  //   } = car || {}
  const { _id, name, description, status, pricePerHour, image } = car || {};
  return (
    <Link to={`/cars/${_id}`}>
      <motion.div
        className="h-[340px] group  relative  bg-[#202020] text-white rounded-lg w-full  inset-0"
        style={{ background: "linear-gradient(to top, #000, #000)" }}
        initial={{ y: -0 }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <div className="p-1 ">
          <MarkedFavorite
            className="absolute 
          
          group-hover:opacity-100 opacity-0 transition-all duration-300
          translate-y-8 group-hover:translate-y-0
          z-20 right-3 top-3 text-[#dbdbdb] size-6 cursor-pointer"
          />
          <span
            className={`${
              status === "available"
                ? "bg-[#01cd0142] text-green-500"
                : "bg-[#8c0d0d2b] text-[red] "
            } absolute left-3 top-4 z-20 rounded-full text-sm px-3 py-1
          group-hover:opacity-100 opacity-0 transition-all duration-300
          translate-x-8 group-hover:translate-x-0
          
          `}
          >
            {status}
          </span>
          <CarImage url={image} />

          <article className="p-3 pt-28 relative z-20">
            <div className="flex items-center justify-between  pt-1 pb-2">
              <h2 className="text-2xl  font-semibold mb-1">
                {name.split(" ").slice(0, 1)}
              </h2>
              <div
                className="flex group-hover:opacity-100 opacity-0 transition-all duration-300
          -translate-y-4 group-hover:-translate-y-0 delay-100"
              >
                <Ratings times={[1]} unfilled={false} />
                <span className="text-sm text-green-400">4.8 (352)</span>
              </div>
            </div>

            <p className="text-md text-[#d0d0d0] mt-2 mb-4">{description}</p>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-sm">
                <div className="mr-1" />
                <span>Hatchback</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="mr-1" />
                <span>Manual</span>
              </div>
              <div className="flex items-center text-sm gap-3">
                <span
                  className={`w-4 h-4 bg-[#1998f2] rounded-full mr-1`}
                ></span>
                <span>Diesel</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="mr-1" />
                <span>5</span>
              </div>
            </div>
            <div className="text-[18px] font-bold text-[#F09903] text- pt-4">
              $ {pricePerHour}
              <span className="text-sm font-normal text-gray-400"> /hour</span>
            </div>
          </article>
        </div>
      </motion.div>
    </Link>
  );
};

export default Car;
