import React from 'react';

// Define props type
interface NotificationProps {
  notifications: { message: string; time: string }[];
}

const Notification: React.FC<NotificationProps> = ({ notifications }) => (
  <section className="bg-gradient-to-r from-[#2d2d2d] to-[#2B2B2B] shadow-2xl p-7 rounded-lg mb-10">
    <h2 className="font-semibold mb-6 text-3xl">Notifications</h2>
    <ul className="space-y-4">
      {notifications.map((notification, index) => (
        <li key={index} className="flex text-[#b8b8b8] justify-between">
          <p>{notification.message}</p>
          <span className="text-gray-400">{notification.time}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Notification;
