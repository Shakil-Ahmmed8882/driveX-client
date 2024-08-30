import About from "../modules/about/About";
import AllCarsLayout from "../modules/allCars/AllCarsLayout";
import BookingLayout from "../modules/booking/BookingLayout";
import CarDetails from "../modules/carDetails/CarDetails";
import Contact from "../modules/contact/Contact";
import HomePageLayout from "../modules/home/HomePageLayout";
import UserDashboard from "../modules/userDashboard/dashboard/UserDashboard";
import UserBookings from "../modules/userDashboard/manageBooking/UserBookings";
import PickupAndReturn from "../modules/userDashboard/pickupAndReturn/PickupAndReturn";

export const homePaths = [
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
    element: <BookingLayout/> ,
  },
  // blog
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Contact />,
  },
  {
    name: "All Cars",
    path: "all-cars",
    element: <AllCarsLayout />,
  },

  // Details page
  {
    path: "cars/:id",
    element: <CarDetails />,
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
