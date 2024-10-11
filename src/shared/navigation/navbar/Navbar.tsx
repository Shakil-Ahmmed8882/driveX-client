const Navbar: React.FC = () => {


  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleSearchClick = () => {
    dispatch(setSearchClick(true));
  };


  return (
    <AnimatePresence>
      {
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
                  {navItems.map((item) =>
                    item.children ? (
                      <Dropdown
                        key={item.name}
                        overlay={renderMegaMenu(item, item.children)}
                        placement="bottomCenter"
                        overlayStyle={{ marginTop: "10px" }}
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
                  )}
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
      }
    </AnimatePresence>
  );
};

export default Navbar;

// imports
import { Link} from "react-router-dom";
import { Layout, Dropdown, Space } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { logout, selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { setSearchClick } from "../../../redux/features/global/global.slice";
import Logo from "../../ui/Logo";
import SearchResultLayout from "../../ui/search/SearchResultLayout";
import DrawerNavigation from "../DrawerNavigation";
import Container from "../../layouts/Container";
import { navItems } from "../constants";
import { renderMegaMenu } from "./RenderMegaMenu";

const { Header } = Layout;
