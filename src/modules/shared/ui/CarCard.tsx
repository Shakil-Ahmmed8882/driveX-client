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
    // <Link to={`/cars/${car}`}>
    <Link to={`/all-cars`}>
      <motion.div
        className="rounded-lg p-2 relative  shadow-lg overflow-hidden"
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div>
          <div className="flex p-2 text-clip rounded-xl">
            <div className="flex-1">
              <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="size-full h-36  object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-[16px] lg:pt-4 flex justify-between">
          {car.name}
          <AvatarGroup/>
        </div>
        <div className="mb-8 line-clamp-2 text-sm description md:mb-12 md:text-base lg:mb-9">
          $ <span className="text-primaryColor">{car.price}</span>
        </div>
        <div>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-zinc-200 text-zinc-800 hover:bg-black/80">
            Category
          </div>
        </div>

        <Crown className="absolute top-0 right-0 text-primaryYellow"/> 

      </motion.div>
    </Link>
  );
};

export default CarCard;







// Avatar
import React from 'react';
import { Avatar, Space } from 'antd';
import { Crown } from "lucide-react";

const UserList = ['Lucy', 'Tom', 'Edward'];
const srcList = ['https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?t=st=1726483963~exp=1726487563~hmac=55368ebfa5fc823cd48b6bc03040d6fd838d2aaf964c6dda03f3f02ebe637568&w=740', 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1726483963~exp=1726487563~hmac=a04a3e153c85f9bee94a68eb7511be9ebf67eaf07be2fa7f7f08bd49f39c96e1&w=740', 'https://img.freepik.com/premium-photo/banner-lead-generation_1139417-135284.jpg?w=360'];



const AvatarGroup: React.FC = () => {
  return (
    <Space >
      {UserList.map((user, index) => (
        <Avatar
          key={user}
          src={srcList[index]}
          size="small"
          className="gap-0 -ml-4"
        >
          {user}
        </Avatar>
      ))}
    </Space>
  );
};


