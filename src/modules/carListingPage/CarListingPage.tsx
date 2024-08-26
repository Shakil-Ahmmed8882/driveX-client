import Container from "../../shared/layouts/Container";

const carData = [
  {
    name: "Toyota Camry",
    type: "Sedan | Automatic",
    price: "$50/day",
    img: "https://i.pinimg.com/564x/04/62/4b/04624b122fdf2d108491602221f2f92c.jpg",
  },
  {
    name: "Honda Accord",
    type: "Sedan | Automatic",
    price: "$45/day",
    img: "https://i.pinimg.com/564x/04/62/4b/04624b122fdf2d108491602221f2f92c.jpg",
  },
  {
    name: "Ford Mustang",
    type: "Coupe | Manual",
    price: "$70/day",
    img: "https://i.pinimg.com/564x/04/62/4b/04624b122fdf2d108491602221f2f92c.jpg",
  },
  {
    name: "Ford Mustang",
    type: "Coupe | Manual",
    price: "$70/day",
    img: "https://i.pinimg.com/564x/04/62/4b/04624b122fdf2d108491602221f2f92c.jpg",
  },
  // Add more cars as needed
];

const CarListingPage = (): JSX.Element => {
  return (
    <div>
      <section className="bg-[url('https://i.pinimg.com/564x/58/63/53/58635398eab1b0d3ec768ba1384d12a2.jpg')] bg-cover bg-center h-[380px] max-w-6xl mx-auto flex flex-col justify-center items-center  gap-6 ">
          <h1 className="text-3xl font-bold text-white text-center sm:text-4xl md:text-5xl pb-8">
            Find Your Perfect Ride
          </h1>
          <div className="md:bg-[#252525c3] rounded-lg shadow-lg w-full max-w-5xl flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6">
            <div className="flex-1 sm:w-[80%] w-[90%]">
              <input
                className="bg-[#1b1b1bcc] focus-within:outline-none flex h-10 rounded-md px-3 py-2 text-sm border-none placeholder:text-muted-foreground focus-visible:ring-1 ring-primaryColor w-full"
                placeholder="Search by location"
                type="text"
              />
            </div>
            <div className="flex-1 sm:w-[80%] w-[90%]">
              <button
                className="bg-[#1b1b1bcc] focus-within:outline-none flex h-10 rounded-md px-3 py-2 text-sm border-none w-full justify-between"
                type="button"
              >
                <span className="text-[gray] w-full">Select Dates</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width={18} height={18} x={3} y={4} rx={2} />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </button>
            </div>
            <button className="inline-flex items-center w-1/2 md:w-auto bg-[#640be1] md:bg-[#000] text-[#fff] justify-center text-sm font-medium h-11 rounded-md px-8">
              Search
            </button>
          </div>
        </section>

    <Container className="py-0">
      <div className="w-full">
      <div className="mt-16">
        <h3 className=" text-[22px] sm:text-2xl md:text-3xl mb-8">Available Cars</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {carData.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={car.img}
                alt={`Image of ${car.name}`}
                className="w-full  h-36  object-cover"
              />
              <div className="p-4 bg-[#1f1f1f] text-white">
                <h3 className=" md:text-xl font-bold mb-2">{car.name}</h3>
                {/* <p className="mb-4 text-[#c1c1c1]">{car.type}</p> */}
                <div className="flex items-center justify-between">
                  <span className="text-1xl text-[#c1c1c1] ">{car.price}</span>
                  <button className="inline-flex items-center justify-center text-sm font-medium border bg-[#36363603] border-none h-9 rounded-md px-3">
                    view
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
      </div>
    </Container>
    </div>
    
  );
};

export default CarListingPage;
