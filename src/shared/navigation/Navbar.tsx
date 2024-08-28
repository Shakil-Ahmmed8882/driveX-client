import { Link, NavLink } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";
import Logo from "../ui/Logo";
import DrawerNavigation from "./DrawerNavigation";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser)


  return (
    <header className="h-24 border-b border-[#676767] items-center max-w-6xl mx-auto  flex justify-between ">
      <article className="flex gap-3  items-center  ">
        <Logo/>
        <article className=" text-[#a6a5a5] hidden sm:flex gap-3 pl-8">
          {homePaths?.map((route) => (
            <NavLink to={route.path}
            
            className={({ isActive }) => (isActive ? 'text-white' : '')}

            >{route?.name}</NavLink>
          ))}
        </article>
      </article>

      {/* lg */}
      <div>
      <div className="hidden sm:flex">
        {user ?<div className="size-10 rounded-full bg-[#80808066]"></div>:  <Link to={'/sign-up'}>
      <button className="text-[white] text-sm bg-primaryColor  uppercase p-2 rounded-lg px-5">Sign up</button>
        </Link>
        
        }
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
