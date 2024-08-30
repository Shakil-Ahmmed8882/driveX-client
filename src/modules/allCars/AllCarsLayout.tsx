import { useGetAllCarsQuery } from "../../redux/features/cars/carsApi";
import Container from "../../shared/layouts/Container";
import Car from "./compoents/Car";
import { TCar } from "./type";


export default function AllCarsLayout() {

  const {data:cardData} = useGetAllCarsQuery(undefined)





  return (
    <Container>
      <div className="relative h-[300px] flex items-center justify-center z-10 ">
        {/* <img
          className="w-full h-full absolute object-cover"
          src="https://i.pinimg.com/564x/77/39/8c/77398c36340a4e48172dab6012ea9b59.jpg"
          alt="Background"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050202] to-[#242525] mix-blend-multiply"></div>
        <div className="relative z-20 flex flex-col w-1/2 text-center space-y-4">
          <h1 className="text-4xl pt-8">All Cars</h1>
          <p className="description mt-2 pb-3">Drivex provides wide ransge of high quality vehicles.</p>
          <input
            placeholder="Search cars..."
            type="text"
            className=" w-full h-11 px-3 focus-within:outline-none  rounded-lg bg-[#eaeaea22]"
          />
        </div>
      </div>
      <div className="min-h-screen grid sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-16 py-8 ">
      {
        cardData?.data?.map((car:TCar) => <Car key={car?._id} car={car}/>)

      } 

      </div>
    </Container>
  );
}