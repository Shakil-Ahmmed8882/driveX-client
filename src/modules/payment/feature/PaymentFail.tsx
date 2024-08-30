
import { useNavigate } from 'react-router-dom';
import crossIcon from "../../../assets/icons/img/cross1.png"
import Container from '../../../shared/layouts/Container';

const PaymentFailed = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/checkout'); // Adjust this route based on your application structure
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center  justify-center bg-gradient-to-r  from-[#9e2222] to-[#5a49b7c7] text-white">
    <Container>
      <div className="bg-[#272727d5] p-10 py-16  relative rounded-lg shadow-lg text-center max-w-md">
        <div className='bg-[#720303d7] mx-auto size-20 md:size-24 flex items-center justify-center rounded-full'>
        <img src={crossIcon} className='p-4 md:p-7'/>
        </div>
        <h1 className=" text-2xl md:text-3xl font-extrabold mt-6 md:pt-5 text-white pb-3 md:mb-2">Payment Failed</h1>
        <p className="text-[#b0afaf] text-sm md:text-lg mb-8">
          We were unable to process your payment. Please try again or contact your payment provider for assistance.
        </p>
        <div className="sm:flex justify-center sm:space-x-4 space-y-3 sm:space-y-0 pt-4">
          
        <button
            onClick={handleRetry}
            className="bg-gradient-to-r  from-[#0bd43d7d] to-[#055015c7] text-white w-full text-sm md:text-md md:text-white px-6 py-2 rounded-md hover:from-[#02651b7d] hover:to-[#07721ec7] transform transition-all duration-500  "
          >
            Retry Payment
          </button>
          <button
            onClick={handleGoHome}
            className="bg-[#4b4b4b74] text-white w-full px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300 transform hover:scale-105"
          >
            Go to Home
          </button>
        </div>
        
      </div>
    </Container>
    </div>
  );
};

export default PaymentFailed;