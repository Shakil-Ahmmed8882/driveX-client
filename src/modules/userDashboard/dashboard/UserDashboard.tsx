import React from "react";
import RadialChart from "../../../shared/charts/RadialChart";
import OverviewCard from "./compoents/OverviewCard";
import RecentActivity from "./compoents/RecentActivity";
import Notification from "./compoents/Notification";
import { DashboardData } from "./types";
import { useGetMyAllBookingsQuery } from "../../../redux/features/user/booking.api";

// Sample data
const dashboardData: DashboardData = {
  totalBookings: 12,
  pendingPayments: 408,
  totalSpendings: 1200,
  recentActivities: [
    { description: "Booked a car: BMW X5", time: "2 hours ago" },
    { description: "Payment received for booking: Audi A4", time: "1 day ago" },
    { description: "Cancelled booking: Tesla Model 3", time: "3 days ago" },
  ],
  notifications: [
    { message: "Payment reminder: $408 pending", time: "30 minutes ago" },
    {
      message: "Booking confirmed for: Mercedes-Benz C-Class",
      time: "2 days ago",
    },
    { message: "Profile updated successfully", time: "1 week ago" },
  ],
};

const CustomerDashboard: React.FC = () => {
  const { data, isLoading } = useGetMyAllBookingsQuery(undefined);


  if (isLoading) return <>...</>;

  const bookingData = data?.data?.result;
  

  const { totalSpending } = data?.data?.totalSpendings[0] || {totalSpending: 0};
  const pendingBookings = bookingData?.filter((item) => item.status === "pending").length;
  const approvedBookings = bookingData?.filter((item) => item.status === "approved").length;

  const chartData1 = {
    series: [90], // Data for the radial chart
    label: "Average Results", // Label for the chart
  };

  const chartData2 = {
    series: [40], // Data for the radial chart
    label: "Average Results", // Label for the chart
  };

  return (
    <div>
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Overview Section */}
        <section className="lg:flex gap-6 mb-10">
          <OverviewCard title="My Bookings" value={pendingBookings || 0} />
          <OverviewCard
            title="Pending Bookings"
            value={`${approvedBookings || 0}`}
          />
          <OverviewCard title="Total Spendings" value={`$${totalSpending}`} />
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#2C2C2C] p-11 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3 text-[#9e9e9e]">
              Monthly Bookings
            </h2>
            <div className="rounded-lg">
              <RadialChart
                series={chartData1.series}
                label={chartData1.label}
              />
            </div>
          </div>

          <div className="bg-[#2C2C2C] p-11 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-3 text-[#9e9e9e]">
              Monthly Bookings
            </h2>
            <div className="rounded-lg">
              <RadialChart
                series={chartData2.series}
                label={chartData2.label}
              />
            </div>
          </div>
        </section>

        {/* Recent Activities Section */}
        <RecentActivity activities={dashboardData.recentActivities} />

        {/* Notifications Section */}
        <Notification notifications={dashboardData.notifications} />
      </main>
    </div>
  );
};

export default CustomerDashboard;
