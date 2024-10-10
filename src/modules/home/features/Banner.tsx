// /* eslint-disable @typescript-eslint/no-unused-vars */

import Container from "../../../shared/layouts/Container";

import { MoveUp } from "../../../shared/wrapper/MoveUp";
import FilterAvaialbeCar from "../components/banner/FilterAvaialbeCar";

const Banner = () => {
  return (
    <MoveUp>
      <section className=" pb-44 pt-32 overflow-hidden bg-black  ">
        <Container className="relative">
          <div className="">
            <div className="">
              <div className=" relative !z-30  text-white text-center">
                <h1 className="text-4xl  font-normal sm:text-5xl lg:text-6xl xl:text-7xl">
                  Travel the world
                </h1>
                <p className="mt-4 text-lg font-normal text-[#c9c9c9] sm:mt-8">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit offic
                </p>
              </div>
            </div>
          </div>
          <FilterAvaialbeCar />
        </Container>
      </section>
    </MoveUp>
  );
};

export default Banner;
