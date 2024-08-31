import { useState } from "react";
import { useGetMyAllBookingsQuery } from "../../../redux/features/user/booking.api";
import DModal from "../../../shared/modals/DModal";
import ReusableTable from "../../../shared/tables/DTable";
import Card from "./component/Card";
import EditBookedCarForm from "./component/EditBookedCarForm";
import DeleteModel from "./component/DeleteModel";

const UserBookings = (): JSX.Element => {
  // Fetch bookings data from API
  const { data, isLoading } = useGetMyAllBookingsQuery(undefined);
  const [open,setIsOpen] = useState(false)
  const [bookingId,setBookingId] = useState("")
  const [isDelete,setIsDelete] = useState(false)
  // Handle loading state
  if (isLoading) return <>Loading...</>;

  // Define columns
  const columns = [
    {
      title: "Name",
      dataIndex: ["car", "name"], // Nested data structure
      key: "name",
    },
    {
      title: "image",
      dataIndex: ["car", "image"], // Nested data structure
      key: "email",
      render: (item) => {
        return <img src={item} className="size-8 rounded-full " alt="" />
      }
    },
    {
      title: "Status",
      dataIndex: "status", // Direct data structure
      key: "status",
    },
    {
      title: "Car Name",
      dataIndex: ["car", "name"], // Nested data structure
      key: "carName",
    },
  ];

  

  // Define actions
  const actions = {
    edit: (record) => {
      const selectedBookingId = record?._id; // Get the car ID directly from the record
      setBookingId(selectedBookingId); // Update the state
      console.log(selectedBookingId)
      setIsOpen(true); // Open the modal
      
    },
    delete: (record) => {
      const selectedBookingId = record?._id; // Get the car ID directly from the record
      setBookingId(selectedBookingId); // Update the state
      console.log("Deleting record:", record);
      setIsDelete(true)

    },
  };
  
  
console.log(data)

  // 

  // Pass the data directly to ReusableTable
  return (
    <section >
     <Card/>

      <ReusableTable
        columns={columns}
        fetchData={() => ({ data, isFetching: isLoading })}
        actions={actions}
        searchValue={""}
      />

      <DModal setOpen={setIsOpen} open={open}>
        <EditBookedCarForm bookingId={bookingId}/>
      </DModal>
      <DModal setOpen={setIsDelete} open={isDelete}>
        <DeleteModel {...{setIsDelete,bookingId}}/>
      </DModal>


    </section>
  );
};

export default UserBookings;
