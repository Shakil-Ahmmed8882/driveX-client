import {  NavLink } from "react-router-dom";
import Logo from "../shared/ui/Logo";
import { adminPath } from "../routes/adminRoutes";
import { userDashboardPaths } from "../routes/userDashboardRoutes";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { ROLE } from "../shared/constants/global";
import {
  navbarState,
  setNavbarState,
} from "../redux/features/global/global.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Close } from "../assets/icons/Icons";

const DashboardSidebar = (): JSX.Element => {
  const user = useSelector(selectCurrentUser);
  const isMenuOpen = useAppSelector(navbarState);
  const dispach = useAppDispatch();
  


  let routes;
  switch (user?.role) {
    case ROLE.USER:
      routes = userDashboardPaths;
      break;
    case ROLE.ADMIN:
      routes = adminPath;
  }

  return (
    <div
      className={`
        
        bg-[#2B2B2B] ${
          isMenuOpen
            ? "visible w-[400px] translate-x-0"
            : " invisible md:visible md:-translate-x-0 w-0 md:w-[400px] -translate-x-32"
        } fixed !text-[#bebebe] sm:static z-50 top-0 bottom-0 transition-all duration-300 transform 
    `}
    >
      <div className="py-3">
        <button
          onClick={() => dispach(setNavbarState())}
          className="cursor-pointer md:hidden block absolute right-5 top-8"
        >
          <Close />
        </button>
        <div className="flex py-3 items-center px-6 ">
          <Logo />
        </div>
      </div>
      <nav className="grid items-start text-sm space-y-4 mt-2 font-medium ">
        {routes?.map((route) => {
          return (
            <NavLink
              to={`${route.path === "user/dashboard" ? "" : route.path}`}
              
              className={`py-3 px-4 transition-all duration-300 cursor-pointer text-lg hover:bg-[#3a3a3a]`}
            >
              {route.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
