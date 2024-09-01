import { useUpdateBookingMutation } from "../../../../../redux/features/user/booking.api";

const StatusModal = ({
  show,
  bookingId,
}: {
  show: boolean;
  bookingId: string;
}): JSX.Element => {
  const [updateBookingStatus] = useUpdateBookingMutation();

  const handleApprove = (bookingId: string) =>
    updateStatus("approved", bookingId);
  const handlePending = (bookingId: string) =>
    updateStatus("pending", bookingId);
  const handleCancel = (bookingId: string) =>
    updateStatus("canceled", bookingId);

  const updateStatus = async (newStatus: string, bookingId: string) => {
    try {
      // Send a request to the backend to update the booking status
      const res = await updateBookingStatus({
        bookingId,
        formattedData: {
          status: newStatus,
        },
      }).unwrap();

      if (res.success) {
        alert("updated");
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <div
      className={`
          bg-[#191919]  rounded shadow-lg  
          ${show ? "visible opacity-100" : "invisible opacity-0"}
          transition-all duration-300
        `}
      style={{ position: "absolute", top: "-135px", left: 0 }}
    >
      <div
        onClick={() => handleApprove(bookingId)}
        className="cursor-pointer hover:bg-[#2B2B2B] p-3 px-8"
      >
        Approve
      </div>
      <div
        onClick={() => handlePending(bookingId)}
        className="cursor-pointer hover:bg-[#2B2B2B] p-3 px-8"
      >
        Pending
      </div>
      <div
        onClick={() => handleCancel(bookingId)}
        className="cursor-pointer hover:bg-[#2B2B2B] p-3 px-8"
      >
        Cancel
      </div>
    </div>
  );
};

export default StatusModal;
