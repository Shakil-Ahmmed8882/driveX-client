import { Link } from "react-router-dom";
import Logo from "../shared/ui/Logo";
import { adminPath } from "../routes/adminRoutes";
import { userDashboardPaths } from "../routes/userDashboardRoutes";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { ROLE } from "../shared/constants/global";

const DashboardSidebar = (): JSX.Element => {
  const user = useSelector(selectCurrentUser);

  let routes;
  switch (user?.role) {
    case ROLE.USER:
      routes = userDashboardPaths;
      break;
    case ROLE.ADMIN:
      routes = adminPath;
  }

  return (
    <div className="bg-[#2B2B2B]">
      <div className="flex py-3 items-center px-6">
        <Logo />
      </div>
      <nav className="grid items-start text-sm space-y-4 mt-2 font-medium ">
        {routes?.map((route) => {
          return (
            <Link
              to={`${route.path === "user/dashboard" ? "" : route.path}`}
              className="py-3 px-4 transition-all duration-300 cursor-pointer text-lg hover:bg-[#3a3a3a]"
            >
              {route.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
