import UserDashboard from "../modules/userDashboard/dashboard/UserDashboard";
import UserBookings from "../modules/userDashboard/manageBooking/UserBookings";
import PickupAndReturn from "../modules/userDashboard/pickupAndReturn/PickupAndReturn";




export const userDashboardPaths = [
    {
      name: "Dashboard",
      path: "user/dashboard",
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
  