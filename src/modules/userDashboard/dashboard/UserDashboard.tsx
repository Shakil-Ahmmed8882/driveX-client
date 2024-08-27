const UserDashboard = (): JSX.Element => {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Bookings</h2>
            <p className="text-2xl mt-3">12</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
            <p className="text-2xl mt-3">3</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Pending Payments</h2>
            <p className="text-2xl mt-3">$250</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Spendings</h2>
            <p className="text-2xl mt-3">$1200</p>
          </div>
        </section>

        {/* Charts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Monthly Bookings</h2>
            <div className="h-64 bg-gray-700 rounded-lg">
              {/* Replace with a chart component */}
              <p className="flex justify-center items-center h-full">
                Chart Placeholder
              </p>
            </div>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-3">Revenue Overview</h2>
            <div className="h-64 bg-gray-700 rounded-lg">
              {/* Replace with a chart component */}
              <p className="flex justify-center items-center h-full">
                Chart Placeholder
              </p>
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="bg-gray-800 p-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <p>Booking #1234 has been confirmed.</p>
              <span className="text-gray-400 text-sm">5 minutes ago</span>
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <p>Payment of $250 has been received.</p>
              <span className="text-gray-400 text-sm">10 minutes ago</span>
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <p>New booking request from Jane Doe.</p>
              <span className="text-gray-400 text-sm">30 minutes ago</span>
            </div>
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
              <p>Profile updated successfully.</p>
              <span className="text-gray-400 text-sm">1 hour ago</span>
            </div>
          </div>
        </section>
      </main>

      {/* Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Total Bookings</h2>
          <p className="text-2xl mt-3">12</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
          <p className="text-2xl mt-3">3</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Pending Payments</h2>
          <p className="text-2xl mt-3">$250</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg">
          <h2 className="text-lg font-semibold">Total Spendings</h2>
          <p className="text-2xl mt-3">$1200</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
