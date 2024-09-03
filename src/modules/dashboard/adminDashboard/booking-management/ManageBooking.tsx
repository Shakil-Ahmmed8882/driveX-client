import { useState } from "react";
import { useGetAllBookingsQuery } from "../../../../redux/features/user/booking.api";
import { Badge } from "antd";
import CarHeaders from "../car-management/compoents/CarHeaders";
import ReusableTable from "../../../../shared/tables/DTable";
import StatusModal from "./components/StatusModal";
import { DSpinner } from "../../../../shared/ui/loading/DSpinner";


const ManageBookings = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);

  const { data, isLoading } = useGetAllBookingsQuery([
    { name: "searchTerm", value: searchValue },
  ]);

  if (isLoading) return <DSpinner/>;

  const columns = [
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
      title: "Start date",
      dataIndex: "pick-up-date",
      key: "pick-up-date",
    },
    {
      title: "End date",
      dataIndex: "drop-off-date",
      key: "drop-off-date",
    },
    {
      title: "Start time",
      dataIndex: "pick-up-time",
      key: "pick-up-time",
    },
    {
      title: "End time",
      dataIndex: "drop-off-time",
      key: "drop-off-time",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item:string, record:any, index:number) => (
        <div
          onMouseEnter={() => setHoveredRowIndex(index)}
          onMouseLeave={() => setHoveredRowIndex(null)}
          style={{ position: "relative" }}
        >
          <Badge
            className={`${
              item === "approved"
                ? "bg-gradient-to-r from-[#0158019c] to-[#0080003d]"
                : "bg-gradient-to-r from-[#50124a9c] to-[#7662703d]"
            } p-1 px-3 rounded-full text-white`}
          >
            {item}
          </Badge>

          {hoveredRowIndex === index && (
            <StatusModal show={true} bookingId={record._id} />
          )}
        </div>
      ),
    },
  ];

  return (
    <section>
      <CarHeaders
        onChangeValue={setSearchValue}
        title={"All Bookings"}
        description={"Drivex provides wide range of high quality vehicles."}
      />
      

      <ReusableTable
        columns={columns}
        fetchData={() => ({ data, isFetching: isLoading })}
        showActions={false}
        searchValue={""}
      />

      
    </section>
  );
};

export default ManageBookings;
