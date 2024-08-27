/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CarQueryInput from "../components/banner/CarQueryInput";
import { motion } from "framer-motion";

const cars = [
  {
    name: "Lamborghini",
    imageUrl:
      "https://i.pinimg.com/564x/fd/18/0b/fd180b826f3f21fde530e8a4e38899e5.jpg",
    count: 6,
  },
  {
    name: "McLaren",
    imageUrl:
      "https://i.pinimg.com/564x/1f/62/47/1f62478782bade73d33aa4f68011ed6a.jpg",
    count: 3,
  },
];

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Banner = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="text-white max-w-6xl mx-auto py-16">
      <div className="lg:flex gap-3 items-end">
        <article className="flex-2 w-full h-72 lg:h-auto flex flex-col items-center justify-center lg:w-2/3 absolute lg:static top-32 z-20">
          <div className="pb-8 w-full text-center lg:text-left lg:items-start">
            <h2 className="text-3xl md:pb-4 sm:text-[30px] md:text-[35px] leading-snug font-bold mb-2 md:mb-4 lg:mb-8 lg:text-[48px]">
              Elevate Your Travel Experience.
            </h2>
            {/* for large device */}
            <CarQueryInput {...{ setSearchValue }} />

            {/* for small device */}
            <p className="text-lg block lg:hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </p>
          </div>

          <div className="gap-6 items-end pt-5 hidden lg:flex">
            {cars.map((car, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative grid-rows-2"
              >
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="h-52 object-cover w-[300px] rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white flex justify-between w-[90%]">
                  <h3 className="font-semibold p-1 px-3 bg-[#ededed] rounded-full text-[#000] text-sm">
                    {car.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span>{car.count}</span>
                    <span className="w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </article>

        <article className=" flex-2 lg:static  top-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative grid-rows-2 h-72 lg:h-auto"
          >
            <img
              src={
                "https://i.pinimg.com/564x/86/66/d2/8666d2f83d0928c482efe1955b0cea04.jpg"
              }
              className="object-cover h-full lg:h-96 w-[800px] md:w-[1000px] lg:w-[700px] lg:rounded-lg"
            />

            <div className="absolute bottom-4 left-4 text-white hidden lg:flex justify-between w-[90%]">
              <h3 className="font-semibold p-1 px-3 bg-[#ededed] rounded-full text-[#000] text-sm">
                {" "}
                Vorolionaion Europ
              </h3>
              <div className="flex items-center space-x-2">
                <span>4</span>
                <span className="w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default Banner;
