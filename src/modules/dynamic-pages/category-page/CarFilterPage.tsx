import { useState } from "react";
import { Card, Col, Layout } from "antd";
import { useLocation } from "react-router-dom";

import Container from "../../../shared/layouts/Container";
import { navItems } from "../../../shared/navigation/constants";
import CarBanner from "./components/CarBanner";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import { carListings } from "./components/mockData";
import { useGetAllCarsQuery } from "../../../redux/features/cars/carsApi";
import CarsLoadingSkeleton from "../../../shared/ui/CarsLoadingSkeleton";
import { TCar } from "../../allCars/type";

const { Content } = Layout;

export default function CarFilterPage() {
  const location = useLocation();
  const [filter, setFilter] = useState("All");

  const [searchValue, setSearchValue] = useState("");
  const getCategoryFromUrl = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("category") || "";
  };

  const category = getCategoryFromUrl();

  const { data: carData, isLoading } = useGetAllCarsQuery([
    { name: "searchTerm", value: searchValue },
    { name: "type", value: category },
  ]);


  const cars: TCar[] = carData?.data || [];

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
          <CarSearch setSearchValue={setSearchValue} setFilter={setFilter} />
          {!isLoading ? (
            <CarsLoadingSkeleton/>
          ) : (
            <CarList cars={cars} />
          )}
        </Container>
      </Content>
    </Layout>
  );
}
