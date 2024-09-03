// @ts-nocheck
import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { homePaths } from "../../routes/homeRoutes";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";

const DrawerNavigation = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space className="block md:hidden ml-auto my-3">
        <Button  className="!bg-transparent border-none text-white hover:!text-primaryColor " onClick={showDrawer}>
          <Menu/>
        </Button>
      </Space>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className="!bg-[#1e1e1e] text-white"
      >


        <div className="pl-4 pb-8">
        <Logo className="size-8"/>
        </div>
        <article className=" flex flex-col items-start gap-4">
          {homePaths?.map((route) => {
            if (route && route.name) {
              return (
                <Link
                  onClick={onClose}
                  key={route.name}
                  className={`
                            ${route?.className}
                             p-4 hover:bg-[#26262A] hover:text-white w-full  transition-all duration-700 `}
                  to={route?.path}
                >
                  {route.name}
                </Link>
              );
            }
          })}
        </article>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
