import { Link, NavLink } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";
import Logo from "../ui/Logo";
import DrawerNavigation from "./DrawerNavigation";

const Navbar = () => {
  return (
    <header className="h-24 border-b border-[#676767] items-center max-w-6xl mx-auto  flex justify-between ">
      <article className="flex gap-3  items-center  ">
        <Logo/>
        <article className=" text-[#a6a5a5] hidden sm:flex gap-3 pl-8">
          {homePaths?.map((route) => (
            <NavLink to={route.path}>{route?.name}</NavLink>
          ))}
        </article>
      </article>

      {/* lg */}
      <div>
      <div className="hidden sm:flex">
        <Link to={'/sign-up'}>
      <button className="text-[white] text-sm bg-primaryColor  uppercase p-2 rounded-lg px-5">Sign Up</button>
        </Link>
      </div>
      {/* <div className="hidden sm:flex">
      <button className="text-[white] text-sm bg-[#313030]  uppercase p-2 rounded-lg px-5">Sign Up</button>
      </div> */}

      </div>

      {/* sm */}
      <DrawerNavigation/>


    </header>
  );
};

export default Navbar;
