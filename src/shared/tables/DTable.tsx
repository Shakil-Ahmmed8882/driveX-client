import React, { useState } from "react";
import { Table, Pagination } from "antd";
import { Query } from "../../utils/index";
import "./table.css";
import { createActionColumn } from "./CreateActionColumn";


interface ReusableTableProps {
  columns: any[];
  fetchData: (query: any) => { data: any; isFetching: boolean };
  actions?: {
    edit?: (record: any) => void;
    delete?: (record: any) => void;
  };
  searchValue: string;
  showActions?: boolean;
  customActionRender?: (record: any) => React.ReactNode; // Optional custom render for actions
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  fetchData,
  actions,
  searchValue,
  showActions = true,
  customActionRender,
}) => {
  const [page, setPage] = useState(6);
  const { data, isFetching } = fetchData(Query(page, searchValue));

  const tableData = data?.data?.result || data?.data || [];
  const meta = data?.data?.meta || {};

  // Conditionally include the action column
  const updatedColumns = showActions
    ? [...columns, createActionColumn(actions, customActionRender)]
    : columns;

  return (
    <>
      <Table
        className="dark-theme-table"
        loading={isFetching}
        columns={updatedColumns}
        dataSource={tableData}
        onChange={(pagination, filters) => {
          // Handle table change events if needed
        }}
        pagination={false}
      />
      <div className="flex justify-start my-3 mr-6">
        <Pagination
          className="dark-theme-table"
          onChange={(value) => setPage(value)}
          total={meta?.total}
          pageSize={meta?.limit}
          current={3}
        />
      </div>
    </>
  );
};

export default ReusableTable;
