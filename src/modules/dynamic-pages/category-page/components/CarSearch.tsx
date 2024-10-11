import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;


interface CarSearchProps {
    setFilter: (value: string) => void; // Specify that setFilter returns void
  }
  
  export default function CarSearch({ setFilter }: CarSearchProps) {
    const handleFilterChange = (value: string) => {
      setFilter(value);
    };
  
  return (
    <div className="mb-8 flex justify-between items-center">
      <Input placeholder="Search cars..." prefix={<SearchOutlined />} style={{ width: 300 }} />
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleFilterChange}>
        <Option value="All">All Categories</Option>
        <Option value="Sedan">Sedan</Option>
        <Option value="SUV">SUV</Option>
        <Option value="Sports">Sports</Option>
        <Option value="Electric">Electric</Option>
        <Option value="Compact">Compact</Option>
      </Select>
    </div>
  );
}
