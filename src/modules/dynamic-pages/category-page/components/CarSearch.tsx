import { Select } from "antd";
import SearchBar from "../../../../shared/ui/SearchBar";
import { useNavigate } from "react-router-dom";
import { categoryType } from "../../../../constants";

const { Option } = Select;


interface CarSearchProps {
    setSearchValue: (value: string) => void;
  }
  
  export default function CarSearch({ setSearchValue }: CarSearchProps) {

    const navigate = useNavigate()
    const handleDropdownCategory = (category: string) => {
      const reshapedCategory = category.split(" ").join("+");
      navigate(`/filter?category=${reshapedCategory}`);
    };
  
  
  return (
    <div className="mb-8 md:flex justify-between items-center pt-3">
      <SearchBar onChange={setSearchValue}/>
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleDropdownCategory}>
        <Option value="All">All Categories</Option>
        
        {
          categoryType?.map(item => (<Option value={item.value}>{item.label}</Option>))
        }
        
      </Select>
    </div>
  );
}
