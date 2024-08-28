import Banner from "./features/Banner";
import FeaturedCars from "./features/FeaturedCars";
import TestimonialsList from "./features/TestimonialsList";
import WhyChooseUs from "./features/WhyChooseUs";

const HomePageLayout = (): JSX.Element => {
  return (
    <>
      <Banner />
      <FeaturedCars/>
      <WhyChooseUs/>
      <TestimonialsList/>
    </>
  );
};

export default HomePageLayout;
