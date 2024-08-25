import { homeRoutes } from "../../routes/homeRoutes";
import logo from "../../assets/images/shared/logo.png";
import DrawerNavigation from "./DrawerNavigation";

const Navbar = () => {
  return (
    <header className="h-24 border-b border-[#676767] items-center max-w-6xl mx-auto  flex justify-between">
      <article className="flex gap-3  items-center ">
        <img src={logo} className="size-12" />

        <p className="text-[white]">DRIVEX</p>
        <article className=" text-[#a6a5a5] hidden sm:flex gap-3">
          {homeRoutes?.map((route) => (
            <p>{route?.name}</p>
          ))}
        </article>
      </article>

      {/* lg */}
      <div className="hidden sm:flex">
      <button className="bg-[white]  uppercase p-1 rounded-lg px-5">Register</button>
      </div>

      {/* sm */}
      <DrawerNavigation/>


    </header>
  );
};

export default Navbar;
