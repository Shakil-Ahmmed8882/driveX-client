import { Link, NavLink } from "react-router-dom";
import { homePaths } from "../../routes/homeRoutes";
import Logo from "../ui/Logo";
import DrawerNavigation from "./DrawerNavigation";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Container from "../layouts/Container";
import { ROLE } from "../constants/global";

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispach = useAppDispatch();

  console.log(user)

  return (
    <Container className="pb-0">
      <header className="h-24 border-b relative border-[#676767] z-50 items-center  flex justify-between ">
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
            <NavLink
              to={ user?.role == ROLE.USER? "/user/dashboard":"/admin/dashboard"}
              className={({ isActive }) => (isActive ? "text-white" : " -ml-4")}
            >
             Dashboard
            </NavLink>
          </article>
        </article>

        {/* lg */}
        <div>
          <div className="hidden sm:flex">
            {user ? (
              <button
                onClick={() => dispach(logout())}
                className="text-[white] text-sm bg-primaryColor  p-2 rounded-lg px-5"
              >
                Logout
              </button>
            ) : (
              <Link to={"/sign-up"}>
                <button className="text-[white] text-sm bg-primaryColor  uppercase p-2 rounded-lg px-5">
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
