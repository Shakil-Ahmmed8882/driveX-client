import { useState } from "react";
import ReusableTable from "../../../../shared/tables/DTable";
import DModal from "../../../../shared/modals/DModal";


import { useGetAllCarsQuery } from "../../../../redux/features/cars/carsApi";
import CarHeaders from "./compoents/CarHeaders";
import { Badge } from "antd";
import EditCarForm from "./compoents/EditCarForm";
import DeleteCar from "./compoents/DeleteCar";
import AddCar from "./compoents/AddCar";
import { TCar } from "../../../allCars/type";
import { DSpinner } from "../../../../shared/ui/loading/DSpinner";

const ManageCars = (): JSX.Element => {
  // Fetch bookings data from API
  const [searchValue, setSearchValue] = useState("");
  const [carId, setCarId] = useState("");
  const [open, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  


  const { data, isLoading } = useGetAllCarsQuery([
    { name: "searchTerm", value: searchValue },
  ]);

  
  if (isLoading) return <DSpinner/>;
  

  // Define columns
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (item:string) => (
        <img className="size-12 rounded-full" src={item} alt="" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Price/h",
      dataIndex: "pricePerHour",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item:string) => (
        <Badge
          className={`${
            item === "available"
              ? "bg-gradient-to-r from-[#0158019c] to-[#0080003d]"
              : "bg-gradient-to-r from-[#50124a9c] to-[#7662703d]"
          } p-1 px-3 rounded-full text-white`}
        >
          {item}
        </Badge>
      ),
    },
  ];

  // Define actions
  const actions = {
    edit: (record:TCar) => {
      const selectedCarId = record?._id;
      setCarId(selectedCarId);
      console.log(selectedCarId);
      setIsOpen(true);
    },
    delete: (record:TCar) => {
      const selectedCarId = record?._id; // Get the car ID directly from the record
      setCarId(selectedCarId); // Update the state
      console.log("Deleting record:", record);
      setIsDelete(true);
    },
  };


  return (
    <section>
      <CarHeaders
        onChangeValue={setSearchValue}
        title={"All Cars"}
        description={
          "Drivex provides wide ransge of high quality vehicles."
        }
      />
  <AddCar />
        

      <ReusableTable
        columns={columns}
        fetchData={() => ({ data, isFetching: isLoading })}
        actions={actions}
        searchValue={""}
      />

      <DModal setOpen={setIsOpen} open={open}>
        <EditCarForm carId={carId} setIsOpen={setIsOpen}/>
      </DModal>
      <DModal setOpen={setIsDelete} open={isDelete}>
        <DeleteCar {...{setIsDelete, setIsOpen, carId}}/>
      </DModal>
    </section>
  );
};

export default ManageCars;
