import { Link, NavLink } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";
import Logo from "../ui/Logo";
import DrawerNavigation from "./DrawerNavigation";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Container from "../layouts/Container";
import { ROLE } from "../constants/global";
import SearchIcon from "../ui/search/ui/SearchIcon";
import SearchResultLayout from "../ui/search/SearchResultLayout";
import { setSearchClick } from "../../redux/features/global/global.slice";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispach = useAppDispatch();
  

  // search
  const handleSearchClick = () => {
    dispach(setSearchClick(true))
  }
  


  return (
    <Container className="pb-0 pt-3">
      <header className="md:h-24 border-b pb-4 relative border-[#676767] z-50 items-center  flex justify-between ">
        <article className="flex gap-3  items-center  ">
          <Logo />
          <article className=" text-[#a6a5a5] hidden md:flex gap-3 pl-8">
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
          <div className="hidden md:flex items-center gap-6">
            <div className="flex ">
              <SearchIcon onClick={handleSearchClick}/>
              <SearchResultLayout/>
            </div>

            {user ? (
              <div className="primaryGradient p-[2px] active:p-5 rounded-lg">
              <button
                onClick={() => dispach(logout())}
                className="text-[white] text-sm bg-[#171919]  p-2 rounded-lg px-5"
              >
                Logout
              </button>
                </div>
            ) : (
              <Link to={"/sign-up"}>
                <div className="primaryGradient p-[2px] active:p-5 rounded-lg">
                <button className="text-[white] text-sm bg-[#171919]  p-2 rounded-lg px-5">
                  Sign up
                </button>

                </div>
              </Link>
            )}
          </div>
          {/* <div className="hidden md:flex">
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
