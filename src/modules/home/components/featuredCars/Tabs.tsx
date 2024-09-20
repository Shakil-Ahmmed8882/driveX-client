import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabStyle = (isActive: boolean) =>
    `w-[150px] px-2 py-4 rounded-full transition-colors duration-300 ${
      isActive ? 'border-b border-b-[3px] border-primaryColor text-[#000] font-bold' : 'text-gray-400 bg-transparent'
    }`;

  return (
    <div className="mb-8 flex space-x-6 w-[1000px]">
      {['Popular', 'Best Sellers', 'Upcoming'].map((tab) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={tabStyle(activeTab === tab)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab}
        </motion.button>
      ))}
      <motion.div
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="self-center"
      >
        <Link
          to={'/all-cars'}
          className="text-gray-400 hover:text-primaryColor transition-colors duration-300"
        >
          See all
        </Link>
      </motion.div>
    </div>
  );
};

export default Tabs;