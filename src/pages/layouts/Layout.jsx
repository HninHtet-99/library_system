import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../../components/Nav";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './index.css'

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      {/* dynamic route change content */}
      <SwitchTransition>
        <CSSTransition timeout={200} classNames={"fade"} key={location.pathname}>
          <div className="p-3 mx-auto" style={{ maxWidth: "56rem" }}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
