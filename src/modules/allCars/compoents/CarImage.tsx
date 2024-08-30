import { motion } from 'framer-motion';

const CarImage = ({ url }: { url: string }): JSX.Element => {
  return (
    <>
      <img
        src={url || "https://i.pinimg.com/236x/6d/d3/81/6dd3813d2c31ea48d9b746ddfd380858.jpg"}
        alt="Ford Focus"
        className="w-full h-[340px] rounded-lg absolute object-center inset-0 object-cover"
      />
      <motion.div
        className="h-[340px] rounded-lg w-full absolute inset-0 bg-gradient-to-t from-[#1f1f1f] to-[#ff000000]"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1}}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-[340px] bg-[#232323] rounded-lg w-full absolute inset-0"
        style={{ background: 'linear-gradient(to top,#232323,  #0000000a)' }}
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CarImage;
