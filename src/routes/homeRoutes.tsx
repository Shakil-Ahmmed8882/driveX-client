import About from "../modules/about/About";
import Contact from "../modules/contact/Contact";
import HomePageLayout from "../modules/home/HomePageLayout";
import UserDashboard from "../modules/userDashboard/dashboard/UserDashboard";
import UserBookings from "../modules/userDashboard/manageBooking/UserBookings";
import PickupAndReturn from "../modules/userDashboard/pickupAndReturn/PickupAndReturn";

export const homeRoutes = [
  {
    name: "Home",
    path: "/",
    element: <HomePageLayout />,
  },
  {
    name: "About us",
    path: "about",
    element: <About />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <h1>Bookings</h1>,
  },
  // blog
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];

export const userDashboardPaths = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <UserDashboard />,
  },
  //   food
  {
    name: "Bookings",
    path: "booking",
    element: <UserBookings />,
  },
  //   faq
  {
    name: "Pick up & Return",
    path: "pickup-and-return",
    element: <PickupAndReturn />,
  },
];
