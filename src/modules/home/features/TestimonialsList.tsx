import React from "react";
import TestimonialCard from "../components/testimonials/TestimonialsCard";
import { testimonialsData } from "../data";
import Container from "../../../shared/layouts/Container";

const TestimonialsList: React.FC = () => {
  return (

    <section className="bg-[#2525257a]">
    <Container>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center mb-4 ">
          Testimonials
        </h2>
        <p className="text-[#d0d0d0] text-lg">
          You are alwaWelcome in our drivers good luck for you
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            position={testimonial.position}
            image={testimonial.image}
            text={testimonial.text}
          />
        ))}
      </div>
    </Container>

    </section>
  );
};

export default TestimonialsList;
