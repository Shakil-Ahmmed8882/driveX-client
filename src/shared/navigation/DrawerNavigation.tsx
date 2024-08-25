// @ts-nocheck
import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { homeRoutes } from "../../routes/homeRoutes";
import { NavLink } from "react-router-dom";

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
      <Space className="block sm:hidden ml-auto my-3">
        <Button  className="bg-primaryColor" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <article className=" flex flex-col items-start gap-2">
          {homeRoutes?.map((route) => {
            if (route && route.name) {
              return (
                <p
                  onClick={onClose}
                  key={route.name}
                  className={`
                            ${route?.className}
                            p-2 px-5  transition-all duration-700 rounded-full`}
                  // to={route?.path}
                >
                  {route.name}
                </p>
              );
            }
          })}
        </article>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
