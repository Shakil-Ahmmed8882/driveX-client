import React, { useState, useEffect, useRef } from 'react';
import car from '../../../assets/images/home/featured/car1.png';
import { useSSLPayAndReturnCarMutation } from '../../../redux/features/user/payment.api';

const bookings = [
  {
    bookingId: '123',
    carDetails: {
      make: 'Toyota',
      model: 'Corolla',
      year: '2022',
      image: car,
    },
    totalCost: 120.00,
  }
];

const ReturnAndPaymentPage: React.FC = () => {



  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);


  // hooks 
  const [SSLPayement] = useSSLPayAndReturnCarMutation()

  const handleReturnCar = async(booking: any) => {
    setSelectedBooking(booking);
    setIsModalVisible(true);
  };

  const handlePay = async() => {
    if (!paymentMethod) {
      setError('Payment method is required.');
      return;
    }

    // send all data => keep and store some 
    // why some? cause from SSL success url you can't send body
    // so from here intially store data in mongodb 
    // those what are depended on payment like , transaction id , isPaid, 
    // update them just recieving from success url params will be hitted once succed
    
    const res = await SSLPayement({price:100})
    if(res?.data?.url){
      window.location.replace(res?.data?.url)
    }


    setIsModalVisible(false);
    setError(null);
  };

  const handleCancel = () => {
    console.log('Payment canceled.');
    setIsModalVisible(false);
    setError(null);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCancel();
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalVisible]);

  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg text-center">
      <h2 className="text-xl mb-4">Return and Pay</h2>

      <div className="flex flex-wrap gap-4 justify-center">
        {bookings.map(booking => (
          <div key={booking.bookingId} className="bg-gray-800 text-white rounded-lg p-4 flex items-center w-full max-w-md">
            <img src={booking.carDetails.image} alt={`${booking.carDetails.make} ${booking.carDetails.model}`} className="w-32 h-auto rounded-lg mr-4" />
            <div className="flex-1">
              <p><strong>Car:</strong> {booking.carDetails.make} {booking.carDetails.model} ({booking.carDetails.year})</p>
              <p><strong>Booking ID:</strong> {booking.bookingId}</p>
              <p><strong>Total Cost:</strong> ${booking.totalCost.toFixed(2)}</p>
              <button
                onClick={() => handleReturnCar(booking)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
              >
                Return Car
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div ref={modalRef} className="bg-gray-700 text-white p-5 rounded-lg w-80 text-center">
            <h3 className="text-lg mb-2">Complete Payment</h3>
            <p className="mb-4">Do you want to proceed with the payment?</p>
            <div className="flex flex-col mb-4">
              <label htmlFor="paymentMethod" className="text-gray-400 mb-2">Payment Method:</label>
              <input
                id="paymentMethod"
                placeholder="Enter payment method (e.g., Credit Card)"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="bg-gray-600 text-white p-2 border border-gray-500 rounded"
              />
              {error && <span className="text-red-400 text-sm mt-2">{error}</span>}
            </div>
            <div className="flex justify-center gap-2">
              <button onClick={handlePay} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Pay ${selectedBooking?.totalCost.toFixed(2) || 0}
              </button>
              <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnAndPaymentPage;