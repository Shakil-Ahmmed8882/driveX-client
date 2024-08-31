import React, { ReactNode, useState } from "react";
import { Table, Pagination, Button } from "antd";
import { Query } from "../../utils/index";
import "./table.css"; // Import your custom CSS
import { Delete } from "../../assets/icons/Icons";
import { Edit2 } from "lucide-react";

const ReusableTable = ({ columns, fetchData, actions, searchValue }) => {
  const [params, setParams] = useState(undefined);
  const [page, setPage] = useState(6);
  const { data, isFetching } = fetchData(Query(page, searchValue));


  
  const tableData = data?.data?.result || data?.data || [];
  const meta = data?.data?.meta || {};

  const handleAction = (actionType, record) => {
    if (actions && actions[actionType]) {
      actions[actionType](record);
    }
  };

  const actionColumn = {
    title: "Action",
    key: "action",
    render: (text, record:ReactNode) => (
      <div className="flex gap-3 hover:bg-[redd]">
        {actions && actions.edit && (
          <Button className="relative bg-transparent border-none hover:!bg-[#282828]" onClick={() => handleAction("edit", record)}><Edit2 className="text-primaryColor size-5"/></Button>
        )}
        {actions && actions.delete && (
          <Button className="bg-transparent border-none hover:!bg-[#282828]" onClick={() => handleAction("delete", record)}><Delete/></Button>
        )}
      </div>
    ),
    width: "1%",
  };

  const updatedColumns = [...columns, actionColumn];

  return (
    <>
      <Table
        className="dark-theme-table "
        loading={isFetching}
        columns={updatedColumns}
        dataSource={tableData}
        onChange={(pagination, filters) => {
         
          const queryParams = [];

          Object.keys(filters).forEach((key) => {
            if (filters[key]) {
              filters[key].forEach((value) => {
                queryParams.push({ name: key, value });
              });
            }
          });

          setParams(queryParams);
        }}
        pagination={false}
      />
      <div className="flex justify-start my-3 mr-6">
        <Pagination
          className="dark-theme-table"
          onChange={(value) => setPage(value)}
          total={meta?.total}
          pageSize={meta?.limit }
          current={3}
        />
      </div>
    </>
  );
};

export default ReusableTable;
