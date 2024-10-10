
// import { Link } from "react-router-dom";
// import Logo from "../ui/Logo"; // Your custom Logo component
// import { homePaths } from "../../routes/homeRoutes";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
// import { setSearchClick } from "../../redux/features/global/global.slice";

// import { SearchIcon } from "lucide-react";
// import SearchResultLayout from "../ui/search/SearchResultLayout";

// import DrawerNavigation from "./DrawerNavigation";
// import Container from "../layouts/Container";

// const Navbar = () => {
//   const user = useAppSelector(selectCurrentUser);
//   const dispach = useAppDispatch();

//   // search
//   const handleSearchClick = () => {
//     dispach(setSearchClick(true));
//   };

//   return (
//     <header className=" !bg-transparent top-0 sticky right-0 left-0  z-50">
//       <Container className="!p-0 !py-8">
//         <div className="">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="shrink-0">
//               <Link to="/" title="Home">
//                 <Logo /> {/* Use your Logo component */}
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden ml-10 mr-auto space-x-8   lg:flex md:items-center md:justify-start ">
//               {homePaths?.map((item) => (
//                 <Link to={item.path} key={item.name}>
//                   <a className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
//                     {item.name}
//                   </a>
//                 </Link>
//               ))}
//             </nav>

//             <div className="">
//               <div className="flex  items-center gap-3 md:mr-5  ">
//                 <SearchIcon
//                   className="size-6 text-[#bdbdbd] cursor-pointer hover:text-white"
//                   onClick={handleSearchClick}
//                 />{" "}
//                 <SearchResultLayout />
//                 {/* Mobile Menu Button */}
//                 <DrawerNavigation />
//               </div>
//             </div>

//             {/* Sign Up Button */}
//             <div className="relative hidden lg:inline-flex group">
//               <div className="absolute transition-all duration-200 rounded-full -inset-px primaryGradient group-hover:shadow-lg"></div>
//               {user ? (
//                 <button
//                   onClick={() => dispach(logout())}
//                   className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
//                 >
//                   Sign out
//                 </button>
//               ) : (
//                 <Link
//                   to="/sign-up"
//                   className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
//                 >
//                   Sign up
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown, Space, Row, Col } from 'antd';
import { CarOutlined, UserOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { setSearchClick } from "../../redux/features/global/global.slice";
import Logo from "../ui/Logo";
import SearchResultLayout from "../ui/search/SearchResultLayout";
import DrawerNavigation from "./DrawerNavigation";
import Container from "../layouts/Container";

const { Header } = Layout;

// Example navitem route array
const navItems = [
  {
    name: 'Our Fleet',
    path: '/fleet',
    children: [
      { name: 'Luxury Sedans', path: '/fleet/luxury-sedans' },
      { name: 'Sports Cars', path: '/fleet/sports-cars' },
      { name: 'SUVs', path: '/fleet/suvs' },
      { name: 'Electric Vehicles', path: '/fleet/electric-vehicles' },
      { name: 'Convertibles', path: '/fleet/convertibles' },
      { name: 'Vans', path: '/fleet/vans' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Airport Transfers', path: '/services/airport-transfers' },
      { name: 'Chauffeur Services', path: '/services/chauffeur-services' },
      { name: 'Corporate Rentals', path: '/services/corporate-rentals' },
      { name: 'Wedding Car Hire', path: '/services/wedding-car-hire' },
      { name: 'Long-term Rentals', path: '/services/long-term-rentals' },
      { name: 'Special Events', path: '/services/special-events' },
    ],
  },
  { name: 'About Us', path: '/about' },
  { name: 'All Cars', path: '/all-cars' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearchClick = () => {
    dispatch(setSearchClick(true));
  };

  const renderMegaMenu = (children:any) => (
    <Menu className='relative z-[9999]' style={{ width: '400px', padding: '16px' }}>
      <Row gutter={[16, 16]}>
        {children.map((item:any, index:number) => (
          <Col span={12} key={index}>
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          </Col>
        ))}
      </Row>
    </Menu>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <Header className="!bg-transparent top-0 sticky right-0 left-0 z-50">
            <Container className="!p-0 !py-8">
              <div className="flex items-center justify-between">
                <div className="shrink-0">
                  <Link to="/" title="Home">
                    <Logo />
                  </Link>
                </div>

                <nav className="hidden ml-10 mr-auto space-x-8 lg:flex md:items-center md:justify-start">
                  {navItems.map((item) => (
                    item.children ? (
                      <Dropdown 
                        key={item.name}
                        overlay={renderMegaMenu(item.children)} 
                        placement="bottomCenter"
                        overlayStyle={{ marginTop: '10px' }}
                      >
                        <Link to={item.path}>
                          <Space className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                            {item.name}
                            <DownOutlined />
                          </Space>
                        </Link>
                      </Dropdown>
                    ) : (
                      <Link to={item.path} key={item.name}>
                        <a className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                          {item.name}
                        </a>
                      </Link>
                    )
                  ))}
                </nav>

                <div className="flex items-center gap-3 md:mr-5">
                  <SearchOutlined
                    className="size-6 text-[#bdbdbd] cursor-pointer hover:text-white"
                    onClick={handleSearchClick}
                  />
                  <SearchResultLayout />
                  <DrawerNavigation />
                </div>

                <div className="relative hidden lg:inline-flex group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px primaryGradient group-hover:shadow-lg"></div>
                  {user ? (
                    <button
                      onClick={() => dispatch(logout())}
                      className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                    >
                      Sign out
                    </button>
                  ) : (
                    <Link
                      to="/sign-up"
                      className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full w-full"
                    >
                      Sign up
                    </Link>
                  )}
                </div>
              </div>
            </Container>
          </Header>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;