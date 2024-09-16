// /* eslint-disable @typescript-eslint/no-unused-vars */

import { ArrowRightIcon, CalendarIcon, CheckCircleIcon, MapPinIcon } from "lucide-react";
import Container from "../../../shared/layouts/Container";
import DForm from "../../../shared/forms/DForm";
import DSelect from "../../../shared/forms/DSelect";
import DDatePicker from "../../../shared/forms/DDatePicker";
import { Button } from "antd";

// import CarQueryInput from "../components/banner/CarQueryInput";
// import { motion } from "framer-motion";
// import Container from "../../../shared/layouts/Container";
// import car1 from "../../../assets/images/home/banner/car1.png";
// import car2 from "../../../assets/images/home/banner/car2.png";
// import car3 from "../../../assets/images/home/banner/car10.png";

// const cars = [
//   {
//     name: "Lamborghini",
//     imageUrl:
//       car1,
//     count: 6,
//   },
//   {
//     name: "McLaren",
//     imageUrl:car2,
//     count: 3,
//   },
// ];

// const imageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Banner = () => {
//   return (
//     <section className="bg-[black]">
    
//     <Container className="">
//       <div className="lg:flex gap-3 items-end">
//         <article className="flex-2 w-full h-72 lg:h-auto flex flex-col items-center justify-center lg:w-2/3 absolute lg:static top-32 z-20">
//           <div className="pb-8 w-full text-center lg:text-left lg:items-start">
//             <h2 className="text-3xl md:pb-2 sm:text-[30px] md:text-[35px] leading-snug font-bold mb-2 md:mb-4 lg:mb-8 lg:text-[48px]">
//               Elevate Your Travel Experience.
//             </h2>
//             {/* for large device */}
//             <CarQueryInput />

//             {/* for small device */}
//             <p className="text-lg block lg:hidden">
//               Lorem ipsum dolor sit amet consectetur adipisicing{" "}
//             </p>
//           </div>

//           <div className="gap-6 items-end pt-5 hidden lg:flex">
//             {cars.map((car, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={imageVariants}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 className="relative grid-rows-2"
//               >
//                 <img
//                   src={car.imageUrl}
//                   alt={car.name}
//                   className="h-52 object-cover w-[300px] rounded-lg"
//                 />
//                 <div className="absolute bottom-4 left-4 text-white flex justify-between w-[90%]">
//                   <h3 className="font-semibold p-1 px-3 bg-[#ededed] rounded-full text-[#000] text-sm">
//                     {car.name}
//                   </h3>
//                   <div className="flex items-center space-x-2">
//                     <span>{car.count}</span>
//                     <span className="w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </article>

//         <article className=" flex-2 lg:static  top-32">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={imageVariants}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="relative grid-rows-2 h-72 lg:h-auto"
//           >
//             <img
//               src={
//                 car3
//               }
//               className="object-cover  h-full lg:h-96 w-[800px] md:w-[1000px]  lg:w-[700px] lg:rounded-lg"
//             />

//             <div className="absolute bottom-4 left-4 text-white hidden lg:flex justify-between w-[90%]">
//               <h3 className="font-semibold p-1 px-3 bg-[#ededed] rounded-full text-[#000] text-sm">
//                 {" "}
//                 Vorolionaion Europ
//               </h3>
//               <div className="flex items-center space-x-2">
//                 <span>4</span>
//                 <span className="w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
//               </div>
//             </div>
//           </motion.div>
//         </article>
//       </div>
//     </Container>
//     </section>
//   );
// };

// export default Banner;





const Banner = () => {
  return (
    <section className="bg-[url('https://i.pinimg.com/564x/7f/f6/92/7ff692671716716dd84ec58773b26946.jpg')] pt-32 -mt-32 bg-no-repeat !w-full h-full bg-cover object-top min-h-[600px] relative">
      <div className="bg-gradient-to-tr from-[#0d0016] to-[#000000b2] absolute  inset-0 "></div>
    <Container className="relative">
      <div className="absolute -top-44 -left-32">
      <Gradient/>
        </div>
        
        
        <div className="relative container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-11">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
                Drive Your <span className="text-indigo-400">Dreams</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 sm:mt-6">
                Unlock the road to adventure with our premium car rental service.
              </p>
              <ul className="mt-8 space-y-3">
                {["Wide range of vehicles", "24/7 customer support", "Flexible rental options"].map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-indigo-400 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <button className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0">
            <div className="backdrop-blur-sm bg-white/10 border-white/20 shadow-2xl rounded-lg">
              <div className="p-6 sm:p-10">
                <h2 className="text-2xl font-bold mb-6">Find Your Perfect Ride</h2>
                <DForm className="space-y-6">
                  
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-white">Category</label>
                    <DSelect placeholder="Pick category" className="custom-select-no-bg" name="category" label="Category" options={[{label: "Electronic",value:"electronic"}]}/>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-white">Location</label>
                    <div className="relative">
                      <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                      <DSelect placeholder="Pick Location" className="custom-select-no-bg " name="category"  options={[{label: "Bangladesh",value:"🚩bangladesh"}]}/>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">

                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                       
                        <DDatePicker name="pick-up-date" label="Pick-up Date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                        <DDatePicker name="drop-off-date" label="Return date"/>
                      </div>
                    </div>
                  </div>
                  <Button  className="w-full primaryGradient hover:bg-indigo-500 border-none p-[1px] text-white rounded-md">Search Available Cars
                  </Button>
                </DForm>
              </div>
            </div>
          </div>
        </div>
        
   

    </Container>
    </section>
  );
};

export default Banner;





const Gradient = () => {
  return (
    <div className="absolute top-0 -z-10 left-0 bg-gradient-to-r from-[#240941] to-[#06000f] w-[1000px] h-[600px] filter blur-3xl"></div>
  )
}