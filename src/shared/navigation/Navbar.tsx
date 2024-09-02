import { Link, NavLink } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";
import Logo from "../ui/Logo";
import DrawerNavigation from "./DrawerNavigation";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Container from "../layouts/Container";
import { ROLE } from "../constants/global";
import { motion } from "framer-motion";
import SearchIcon from "../ui/search/ui/SearchIcon";
import SearchResultLayout from "../ui/search/SearchResultLayout";
import { useState } from "react";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispach = useAppDispatch();
  const [isSearchClick, setSearchClick] = useState(false)
  

  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Container className="pb-0">
      <header className="h-24 border-b pb-4 relative border-[#676767] z-50 items-center  flex justify-between ">
        <article className="flex gap-3  items-center  ">
          <Logo />
          <article className=" text-[#a6a5a5] hidden sm:flex gap-3 pl-8">
            {homePaths?.map((route) => (
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                {route?.name}
              </NavLink>
            ))}

            {/* Dashboard */}
            {user && (
              <NavLink
                to={
                  user?.role == ROLE.USER
                    ? "/user/dashboard"
                    : "/admin/dashboard"
                }
                className={({ isActive }) =>
                  isActive ? "text-white" : " -ml-4"
                }
              >
                Dashboard
              </NavLink>
            )}
          </article>
        </article>

        {/* lg */}
        <div>
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex ">
              <SearchIcon onClick={setSearchClick}/>
              <SearchResultLayout {...{isSearchClick, setSearchClick}}/>
            </div>

            {user ? (
              <button
                onClick={() => dispach(logout())}
                className="text-[white] text-sm primaryGradient  p-2 rounded-lg px-5"
              >
                Logout
              </button>
            ) : (
              <Link to={"/sign-up"}>
                <button className="text-[white] text-sm primaryGradient  uppercase p-2 rounded-lg px-5">
                  Sign up
                </button>
              </Link>
            )}
          </div>
          {/* <div className="hidden sm:flex">
      <button className="text-[white] text-sm bg-[#313030]  uppercase p-2 rounded-lg px-5">Sign Up</button>
      </div> */}
        </div>

        {/* sm */}
        <DrawerNavigation />
      </header>
    </Container>
  );
};

export default Navbar;
