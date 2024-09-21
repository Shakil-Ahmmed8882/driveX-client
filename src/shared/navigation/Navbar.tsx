
import { Link } from "react-router-dom";
import Logo from "../ui/Logo"; // Your custom Logo component
import { homePaths } from "../../routes/homeRoutes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { setSearchClick } from "../../redux/features/global/global.slice";

import { SearchIcon } from "lucide-react";
import SearchResultLayout from "../ui/search/SearchResultLayout";

import DrawerNavigation from "./DrawerNavigation";
import Container from "../layouts/Container";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispach = useAppDispatch();

  // search
  const handleSearchClick = () => {
    dispach(setSearchClick(true));
  };

  return (
    <header className=" !bg-transparent top-0 sticky right-0 left-0  z-50">
      <Container className="!p-0 !py-8">
        <div className="">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/" title="Home">
                <Logo /> {/* Use your Logo component */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden ml-10 mr-auto space-x-8   lg:flex md:items-center md:justify-start ">
              {homePaths?.map((item) => (
                <Link to={item.path} key={item.name}>
                  <a className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>

            <div className="">
              <div className="flex  items-center gap-3 md:mr-5  ">
                <SearchIcon
                  className="size-6 text-[#bdbdbd] cursor-pointer hover:text-white"
                  onClick={handleSearchClick}
                />{" "}
                <SearchResultLayout />
                {/* Mobile Menu Button */}
                <DrawerNavigation />
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="relative hidden lg:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px primaryGradient group-hover:shadow-lg"></div>
              {user ? (
                <button
                  onClick={() => dispach(logout())}
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                >
                  Sign out
                </button>
              ) : (
                <Link
                  to="/sign-up"
                  className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                >
                  Sign up
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
