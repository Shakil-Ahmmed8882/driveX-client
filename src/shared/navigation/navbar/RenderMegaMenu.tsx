import { Col, Menu, Row } from "antd";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate to handle routing

export const renderMegaMenu = (item: any, children: any) => {
  const navigate = useNavigate();

  const handleDropdownCategory = (category: string) => {
    const reshapedCategory = category.split(" ").join("+");
    navigate(`/filter?category=${reshapedCategory}`);
  };

  const half = Math.ceil(children.length / 2); // Split children into two halves

  return (
    <Menu
      className="relative z-[9999] overflow-hidden"
      style={{ width: "900px", padding: "24px" }}
    >
      <div className="ml-3 pb-2">
        <h2 className="text-5xl  font-bold pb-2 ">
          {item.name === "Fleet" ? <>Our <span className="text-[#e6e6e6]">Fleet</span> </> :  <>Our <span className="text-[#e6e6e6]">Services</span> </> }
        </h2>
        <p className="pb-6 w-2/3 text-gray-500 text-lg">
           {item.description }
        </p>
      </div>
      <Row
        gutter={[24, 24]}
        align="top"
        justify="space-between"
        style={{ display: "flex" }}
        className="pt-5"
      >
        {/* First half of the children */}
        <Col span={7}>
          {children.slice(0, half).map((childItem: any, index: number) => (
            <Menu.Item
              key={childItem.path}
              className="!bg-transparent hover:!bg-[#efefef] transition-all duration-300"
            >
              <div
                onClick={() => handleDropdownCategory(childItem.name)}
                className="flex gap-4 items-center cursor-pointer"
              >
                <img
                  className="w-16 h-16 rounded-lg object-cover"
                  src={childItem.image}
                  alt={childItem.name}
                />
                <span className="text-lg">{childItem.name}</span>
              </div>
            </Menu.Item>
          ))}
        </Col>

        {/* Car image in the middle */}
        <Col span={7} className=" w-full text-center">
          <Link to={"/about"} className="w-full block">
            <img
              className="w-full h-56  object-cover rounded-lg"
              src="https://images.pexels.com/photos/19963481/pexels-photo-19963481/free-photo-of-orange-lamborghini-huracan-evo-behind-the-glass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Car"
            />
          </Link>
        </Col>

        {/* Second half of the children */}
        <Col span={7}>
          {children.slice(half).map((childItem: any, index: number) => (
            <Menu.Item
              key={childItem.path}
              className="!bg-transparent hover:!bg-[#efefef] transition-all duration-300"
            >
              <div
                onClick={() => handleDropdownCategory(childItem.name)}
                className="flex gap-4 items-center cursor-pointer"
              >
                <img
                  className="w-16 h-16 rounded-lg object-cover"
                  src={childItem.image}
                  alt={childItem.name}
                />
                <span className="text-lg">{childItem.name}</span>
              </div>
            </Menu.Item>
          ))}
        </Col>
      </Row>
    </Menu>
  );
};
