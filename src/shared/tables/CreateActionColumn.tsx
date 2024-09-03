
// Define a reusable function to generate the action column
import React from "react";
import { Button } from "antd";
import { Delete } from "../../assets/icons/Icons";
import { Edit2 } from "lucide-react";

// Define a reusable function to generate the action column
export const createActionColumn = (
  actions?: { edit?: (record: any) => void; delete?: (record: any) => void },
  customRender?: (record: any) => React.ReactNode // Optional custom render function
) => {
  return {
    title: "Action",
    key: "action",
    render: (record: any) => { // Removed 'text' since it's not used
      if (customRender) {
        return customRender(record); // Use the custom render function if provided
      }

      return (
        <div className="flex gap-3">
          {actions?.edit && (
            <Button
              className="relative bg-transparent border-none hover:!bg-[#282828]"
              onClick={() => actions.edit && actions.edit(record)}
            >
              <Edit2 className="text-primaryColor size-5" />
            </Button>
          )}
          {actions?.delete && (
            <Button
              className="bg-transparent border-none hover:!bg-[#282828]"
              onClick={() => actions.delete && actions.delete(record)}
            >
              <Delete />
            </Button>
          )}
        </div>
      );
    },
    width: "1%",
  };
};
