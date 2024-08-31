import { Search } from "lucide-react";

const CarHeaders = ({ title, description, onChangeValue }): JSX.Element => {
  return (
    <div className="bg-gradient-to-r  from-primaryColor to-indigo-800 h-60 flex justify-center w-full my-16 rounded-lg">
      <div className="relative z-20 flex flex-col w-1/2 text-center space-y-4">
        <h1 className="text-4xl pt-8">{title}</h1>
        <p className="description mt-2 pb-3">{description}</p>
        <div className="flex items-center rounded-lg bg-[#eaeaea22] px-3">
          <Search />
          <input
            onChange={(e) => onChangeValue(e.target.value)}
            placeholder="Search cars..."
            type="text"
            className=" w-full h-11 px-3 focus-within:outline-none  bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default CarHeaders;
