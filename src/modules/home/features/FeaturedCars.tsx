// import { useState } from "react";
// import CarCard from "../../shared/ui/CarCard";
// import Tabs from "../components/featuredCars/Tabs";
// import Container from "../../../shared/layouts/Container";
// import { cars } from "../data";
// import { motion, AnimatePresence } from "framer-motion";

// const FeaturedCars = () => {
//   const [activeTab, setActiveTab] = useState("Popular");

//   const filteredCars = cars.filter(
//     (car) => activeTab === "" || car.status === activeTab
//   );

//   return (
//       <div className="!bg-[white]">
//     <Container>
//         <h2 className="text-3xl font-bold mb-6">Featured Cars</h2>
//         <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
//         <motion.div
//           className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8" layout>
//           <AnimatePresence>
//             {filteredCars.map((car, index) => (
//               <CarCard key={`${car.name}-${index}`} car={car} />
//             ))}
//           </AnimatePresence>
//         </motion.div>
//     </Container>
//       </div>
//   );
// };

// export default FeaturedCars;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Tabs, Badge, Button, Typography, Space } from "antd";
import { CarOutlined, DollarOutlined, ThunderboltOutlined, UserOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

// Assuming the cars data structure
interface CarType {
  name: string;
  image: string;
  price: number;
  status: string;
  fuel: string;
  transmission: string;
  capacity: number;
}
const cars: CarType[] = [
  {
    name: "Tesla Model 3",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: 100,
    status: "Popular",
    fuel: "Electric",
    transmission: "Automatic",
    capacity: 5
  },
  {
    name: "BMW X5",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: 150,
    status: "New",
    fuel: "Gasoline",
    transmission: "Automatic",
    capacity: 5
  },
  {
    name: "Mercedes-Benz C-Class",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: 130,
    status: "Popular",
    fuel: "Hybrid",
    transmission: "Automatic",
    capacity: 5
  },
  {
    name: "Audi A4",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: 120,
    status: "New",
    fuel: "Gasoline",
    transmission: "Automatic",
    capacity: 5
  }
];

const FeaturedCars: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const filteredCars = cars.filter(
    (car) => activeTab === "All" || car.status === activeTab
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Title level={2} className="text-center mb-8">
          Featured Cars
        </Title>
        <Tabs
          centered
          activeKey={activeTab}
          onChange={setActiveTab}
          className="mb-8"
        >
          <TabPane tab="All" key="All" />
          <TabPane tab="Popular" key="Popular" />
          <TabPane tab="New" key="New" />
        </Tabs>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredCars.map((car, index) => (
              <motion.div
                key={`${car.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  cover={
                    <img
                      alt={car.name}
                      src={car.image}
                      className="h-48 object-cover"
                    />
                  }
                  actions={[
                    <Button type="primary" key="rent">
                      Rent Now
                    </Button>,
                  ]}
                >
                  <Badge.Ribbon text={car.status} color={car.status === "Popular" ? "blue" : "green"}>
                    <Title level={4}>{car.name}</Title>
                  </Badge.Ribbon>
                  <Space direction="vertical" size="small" className="w-full">
                    <Space>
                      <DollarOutlined />
                      <Text strong>${car.price}/day</Text>
                    </Space>
                    <Space>
                      <ThunderboltOutlined />
                      <Text>{car.fuel}</Text>
                    </Space>
                    <Space>
                      <CarOutlined />
                      <Text>{car.transmission}</Text>
                    </Space>
                    <Space>
                      <UserOutlined />
                      <Text>{car.capacity} People</Text>
                    </Space>
                  </Space>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCars;