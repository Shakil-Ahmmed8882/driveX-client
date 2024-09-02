import { Button } from "antd";
import { useReturnCarMutation } from "../../../../../redux/features/user/booking.api";
import { toast } from "sonner";
import { extractErrorMessage } from "../../../../../types";


const ReturnCar = ({ record }: { record: any }): JSX.Element => {
  const { _id: bookingId, duration } = record || {};
  const [returnCar] = useReturnCarMutation();



  const handleReturn = async () => {
    const returnCarData = {
      bookingId,
      duration,
    };

    try {
      const res = await returnCar(returnCarData).unwrap();

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      toast.error(errorMessage);
    }

    console.log(record);
  };

  let buttonBgColor = ""

  if(record?.isPaid){
    buttonBgColor = "primaryGradient hover:!bg-[red]"
} 

if(record?.isPaid && record?.isReturned){
    buttonBgColor = "bg-[gray] cursor-not-allowed hover:!bg-[gray]"
} 
  if(!record?.isPaid){
    buttonBgColor = "bg-[gray] cursor-not-allowed hover:!bg-[gray] "
} 

  return (
    <Button

      className={`
        ${buttonBgColor}
        border-none !text-white
        w-20
        `
    }
      onClick={handleReturn}
    >
      {
        record?.isReturned? "returned":(record.isPaid?"Return":"Not Paid") 
      }
    </Button>
  );
};

export default ReturnCar;
