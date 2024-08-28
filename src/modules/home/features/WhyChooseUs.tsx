import React from "react";
import FeatureItem from "../components/whyChooseUs/FeatureItem";
import featuresData from "../data";
import Container from "../../../shared/layouts/Container";


const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-[#1e1e1e]">
    <Container>
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Drivex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </Container>
    </section>
  );
};

export default WhyChooseUs;
