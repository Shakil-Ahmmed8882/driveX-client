import { Link } from "react-router-dom";
import Logo from "../shared/ui/Logo";
import { userDashboardPaths } from "../routes/homeRoutes";

const DashboardSidebar = (): JSX.Element => {
  const role = "customer";
  let routes;

  switch (role) {
    case "customer":
      routes = userDashboardPaths;
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
              to={`/dashboard/${route.path === "/dashboard" ? "" : route.path}`}
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
