import { useState } from "react";
import { useGetAllBookingsQuery } from "../../../../redux/features/user/booking.api";
import Card from "../../../userDashboard/manageBooking/component/Card";
import ReusableTable from "../../../../shared/tables/DTable";
import { Badge, Button } from "antd";



const ManageBookings = (): JSX.Element => {
  
  const { data, isLoading } = useGetAllBookingsQuery([]);

  if (isLoading) return <>Loading...</>;

  const columns = [
    {
      title: "Booking ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Car",
      dataIndex: ["car", "name"],
      key: ["car", "name"],
    },
    {
      title: "Customer",
      dataIndex: "name",
      key: "name",
    },
   
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Status",
      dataIndex: "isPaid",
      key: "isPaid",
      render: (item) => {


        console.log(item)
        return <div
        >
          <Badge
            className={`${
              item === false
                ? "bg-gradient-to-r from-[#0158019c] to-[#0080003d]"
                : "bg-gradient-to-r from-[#50124a9c] to-[#7662703d]"
            } p-1 px-3 rounded-full text-white`}
          >
            {item === true ?"Paid": "not yet"}
          </Badge>

        
        </div>
      }
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




  return (
    <section>
      <Card/>
      <ReusableTable
  columns={columns}
  fetchData={() => ({ data, isFetching: isLoading })}
  searchValue={""}
  actions={{
    edit: (record) => console.log("Edit", record),
    delete: (record) => console.log("Delete", record),
  }}
  customActionRender={(record) => (
    <div>
      {/* Custom action buttons */}
      <Button className="bg-primaryColor/20 hover:!bg-primaryColor !text-white border-none" onClick={() => console.log("Custom Action 1", record)}>
        Return 
      </Button>
   </div>
  )}
/>


      {/* <DModal setOpen={setIsOpen} open={open}>
        <EditCarForm carId={carId} />
      </DModal>
      <DModal setOpen={setIsDelete} open={isDelete}>
        <DeleteCar {...{ setIsDelete, carId }} />
      </DModal> */}
    </section>
  );
};

export default ManageBookings;
