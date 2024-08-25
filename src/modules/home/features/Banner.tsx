import React from "react";

const cars = [
  {
    name: "Lamborghini",
    imageUrl:
      "https://i.pinimg.com/564x/bf/9b/f9/bf9bf91af1e2c772c840027e5e50ac16.jpg", // replace with actual image URL
    count: 6,
  },
  {
    name: "McLaren",
    imageUrl:
      "https://i.pinimg.com/564x/80/21/7b/80217b4570eedb28d4e7cdc25cc4adab.jpg", // replace with actual image URL
    count: 3,
  },
];

const Banner = () => {
  return (
    <section className=" text-white max-w-6xl mx-auto py-16">
      <div className="md:flex gap-3   items-end">
        <article className="flex-2 w-full h-72 flex flex-col items-center justify-center md:w-2/3 absolute md:static top-32 z-20">
          <div className="pb-8 w-full text-center md:text-left md:items-start">
            <h2 className="text-xl leading-snug font-bold mb-4 md:mb-8">
              Elevate Your Travel Experience
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <div className="bg-[#1e1e1ea1] md:bg-[#1e1e1e] rounded-lg px-6 py-2 w-[80%] md:w-2/3">
                <input
                  placeholder="search cars"
                  type="text"
                  className="bg-transparent w-full focus-within:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="gap-6 items-end pt-8 hidden md:flex">
            {cars.map((car, index) => (
              <div key={index} className="relative grid-rows-2">
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="h-40 object-cover w-[300px] rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span>{car.count}</span>
                    <span className="w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/*  */}
        <article className="flex-2  absolute md:static top-32 ">
          <div className="relative grid-rows-2">
            <img
              src={
                "https://i.pinimg.com/564x/86/66/d2/8666d2f83d0928c482efe1955b0cea04.jpg"
              }
              className=" object-cover h-72 md:h-96 w-[700px] rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold text-lg">Name</h3>
              <div className="flex items-center space-x-2">
                <span>{43}</span>
                <span className=" w-4 h-4 bg-white rounded-full text-black flex items-center justify-center"></span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/*  */}
    </section>
  );
};

export default Banner;

const CallToAction = () => {
  return (
    <section className=" text-white p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        {/* Text Content */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Luxury Meets Performance
          </h2>
          <p className="text-lg">
            Discover the perfect solution for all your business transportation
            needs, indulge in a luxurious wedding getaway experience, or embark
            on an unforgettable thrill — experience excellence with our
            unmatched service.
          </p>
        </div>
        {/* Button */}
        <div className="flex-shrink-0"></div>
      </div>
    </section>
  );
};
