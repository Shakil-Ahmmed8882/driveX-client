import ProtectedRoute from "../layout/ProtectedRoute";
import About from "../modules/about/About";
import AllCarsLayout from "../modules/allCars/AllCarsLayout";
import BookingLayout from "../modules/booking/BookingLayout";
import BookingFormPage from "../modules/bookingFormPage/BookingFormPage";
import CarDetails from "../modules/carDetails/CarDetails";
import Contact from "../modules/contact/Contact";
import FAQ from "../modules/faq/FAQ";
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
    name: "FAQ",
    path: "faq",
    element: <FAQ />,
  },
  {
    name: "Bookings",
    path: "bookings",
    element: <BookingLayout />,
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
    element: (
      <ProtectedRoute role="user">
        <CarDetails />
      </ProtectedRoute>
    ),
  },
  // Booking form
  {
    path: "booking-form/:carId",
    element: <ProtectedRoute role="user">
      <BookingFormPage />
    </ProtectedRoute>,
  },
];
