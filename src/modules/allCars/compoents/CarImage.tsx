import { motion } from 'framer-motion';
import placeholderImg from '../../../assets/images/home/featured/bg-car.jpg'
import { handleError } from '../../carDetails/component/CarImage';


const CarImage = ({ url }: { url: string }): JSX.Element => {
  return (
    <>
      <img
        src={url|| placeholderImg}
        alt="Ford Focus"
        className="w-full h-[340px] rounded-lg absolute object-center inset-0 object-cover"
        onError={handleError}
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
