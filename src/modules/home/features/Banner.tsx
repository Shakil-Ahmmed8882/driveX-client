import Container from "../../../shared/layouts/Container";
import { MoveUp } from "../../../shared/wrapper/MoveUp";
import FilterAvaialbeCar from "../components/banner/FilterAvaialbeCar";

const Banner = () => {
  return (
    <MoveUp>
      <section className="pt-48 pb-24 -mt-16 relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/08/51/97/15/1000_F_851971514_8A8gORcwVMu5WekUfPgEtZCT7DDHgTrU.jpg')" }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#ffffff9f] opacity-100"></div>

        <Container className="relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-normal sm:text-5xl lg:text-6xl xl:text-7xl text-black">
              Travel the world
            </h1>
            <p className="mt-4 text-lg font-normal w-1/2 mx-auto sm:mt-8 text-black">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit offic Amet minim mollit non 
            </p>
          </div>
          <FilterAvaialbeCar />
        </Container>
      </section>
    </MoveUp>
  );
};

export default Banner;
