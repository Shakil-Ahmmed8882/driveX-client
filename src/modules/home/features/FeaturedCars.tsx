import { useState } from "react";
import CarCard from "../../shared/ui/CarCard";
import Tabs from "../components/featuredCars/Tabs";
import Container from "../../../shared/layouts/Container";
import { cars } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const FeaturedCars = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const filteredCars = cars.filter(
    (car) => activeTab === "" || car.status === activeTab
  );

  return (
    <Container>
      <div className="">
        <h2 className="text-3xl font-bold mb-6">Featured Cars</h2>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6" layout>
          <AnimatePresence>
            {filteredCars.map((car, index) => (
              <CarCard key={`${car.name}-${index}`} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Container>
  );
};

export default FeaturedCars;
