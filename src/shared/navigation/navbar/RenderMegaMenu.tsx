import { Col, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle routing

export const renderMegaMenu = (item: any, children: any) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleDropdownCategory = (category: string) => {
    const reshapedCategory = category.split(" ").join("+");
    navigate(`/filter?category=${reshapedCategory}`); // Use navigate correctly
  };

  return (
    <Menu className="relative z-[9999]" style={{ width: "600px", padding: "16px" }}>
      <h2 className="text-4xl font-bold ml-3 pb-5">
        {item.name === "Our Fleet" ? "Our Fleet" : "Services"}
      </h2>
      <Row gutter={[16, 16]}>
        {children.map((childItem: any, index: number) => (
          <Col span={12} key={index}>
            <Menu.Item
              key={childItem.path}
              className="!bg-transparent hover:!bg-[#efefef] transition-all duration-300"
            >
              <div
                onClick={() => handleDropdownCategory(childItem.name)}
                className="flex gap-3 items-center cursor-pointer"
              >
                <img
                  className="size-20 rounded-lg object-cover"
                  src={childItem.image}
                  alt={childItem.name}
                />
                <span>{childItem.name}</span>
              </div>
            </Menu.Item>
          </Col>
        ))}
      </Row>
    </Menu>
  );
};
