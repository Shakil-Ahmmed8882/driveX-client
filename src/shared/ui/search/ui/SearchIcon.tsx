import { Search } from "lucide-react";


const SearchIcon = ({onClick}:{onClick : (param:boolean) => void}) : JSX.Element => {
  return (
    <Search
      onClick={() => onClick(true)}
      className="text-[#ababab] hover:text-white cursor-pointer size-6"
    />
  );
};

export default SearchIcon;
