import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      {/* dynamic route change content */}
      <div className="max-w-6xl mx-auto p-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
