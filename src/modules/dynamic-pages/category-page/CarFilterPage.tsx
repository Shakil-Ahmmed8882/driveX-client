import { useState } from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";

import Container from "../../../shared/layouts/Container";
import { navItems } from "../../../shared/navigation/constants";
import CarBanner from "./components/CarBanner";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import { carListings } from "./components/mockData";

const { Content } = Layout;

export default function CarFilterPage() {
  const location = useLocation();
  const [filter, setFilter] = useState("All");

  const getCategoryFromUrl = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("category") || "";
  };

  const category = getCategoryFromUrl();

  const filteredCars =
    filter === "All"
      ? carListings
      : carListings.filter((car) => car.category === filter);

  const getBannerImage = () => {
    for (const item of navItems) {
      const foundChild = item.children?.find(
        (child) => child.name === category
      );
      if (foundChild) {
        return foundChild.image;
      }
    }
    return "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"; // Default image
  };

  const bannerImage = getBannerImage();

  return (
    <Layout className="min-h-screen mt-11">
      <Content>
        <CarBanner bannerImage={bannerImage} category={category} />
        <Container>
          <CarSearch setFilter={setFilter} />
          <CarList cars={filteredCars} />
        </Container>
      </Content>
    </Layout>
  );
}
