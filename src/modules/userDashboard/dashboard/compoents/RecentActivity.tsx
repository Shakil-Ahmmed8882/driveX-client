import React from 'react';

// Define props type
interface RecentActivityProps {
  activities: { description: string; time: string }[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => (
  <section className="bg-gradient-to-r from-[#2d2d2d] to-[#2B2B2B] shadow-2xl p-7 rounded-lg mb-10">
    <h2 className="text-3xl font-semibold mb-6">Recent Activities</h2>
    <ul className="space-y-4">
      {activities.map((activity, index) => (
        <li key={index} className="flex text-[#b8b8b8] justify-between">
          <p>{activity.description}</p>
          <span className="text-gray-400">{activity.time}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default RecentActivity;
