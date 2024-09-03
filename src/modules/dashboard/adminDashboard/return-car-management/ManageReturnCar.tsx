import { useGetAllBookingsQuery } from "../../../../redux/features/user/booking.api";
import Card from "../../../userDashboard/manageBooking/component/Card";
import ReusableTable from "../../../../shared/tables/DTable";
import { Badge } from "antd";
import ReturnCar from "./components/ReturnCar";
import { DSpinner } from "../../../../shared/ui/loading/DSpinner";

const ManageBookings = (): JSX.Element => {
  const { data, isLoading } = useGetAllBookingsQuery([]);

  if (isLoading) return <DSpinner/>;

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
      render: (item:boolean) => {
        return (
          <div>
            <Badge
              className={`${
                item === true
                  ? "bg-gradient-to-r from-[#0158019c] to-[#0080003d] "
                  : "bg-gradient-to-r from-[#50124a9c] to-[#7662703d]"
              } p-1 px-3 rounded-full text-white`}
            >
              {item === true ? "Paid" : "not yet"}
            </Badge>
          </div>
        );
      },
    },
  ];

  return (
    <section>
      <Card />
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
            <ReturnCar record={record} />
          </div>
        )}
      />
    </section>
  );
};

export default ManageBookings;
