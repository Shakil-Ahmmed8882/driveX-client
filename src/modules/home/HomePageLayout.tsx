import Banner from "./features/Banner";
import FeaturedCars from "./features/FeaturedCars";
import WhyChooseUs from "./features/WhyChooseUs";

const HomePageLayout = (): JSX.Element => {
  return (
    <>
      <Banner />
      <FeaturedCars/>
      <WhyChooseUs/>
    </>
  );
};

export default HomePageLayout;
