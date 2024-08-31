import ManageBooking from "../modules/dashboard/adminDashboard/booking-management/ManageBooking";
import ManageCar from "../modules/dashboard/adminDashboard/car-management/ManageCar";
import AdminDashboard from "../modules/dashboard/adminDashboard/dashboard/AdminDashboard";
import ManageReturnCar from "../modules/dashboard/adminDashboard/return-car-management/ManageReturnCar";

export const adminPath = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Cars",
    path: "manage-car",
    element: <ManageCar />,
  },

  {
    name: "Manage Bookings",
    path: "manage-booking",
    element: <ManageBooking />,
  },
  {
    name: "Manage Return",
    path: "manage-return-car",
    element: <ManageReturnCar />,
  },
];
