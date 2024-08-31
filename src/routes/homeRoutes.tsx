import About from "../modules/about/About";
import AllCarsLayout from "../modules/allCars/AllCarsLayout";
import BookingLayout from "../modules/booking/BookingLayout";
import BookingFormPage from "../modules/bookingFormPage/BookingFormPage";
import CarDetails from "../modules/carDetails/CarDetails";
import Contact from "../modules/contact/Contact";
import HomePageLayout from "../modules/home/HomePageLayout";

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
    name: "All Cars",
    path: "all-cars",
    element: <AllCarsLayout />,
  },

  // Details page
  {
    path: "cars/:id",
    element: <CarDetails />,
  },
  // Booking form
  {
    path: "booking-form/:carId",
    element: <BookingFormPage />,
  },
];
