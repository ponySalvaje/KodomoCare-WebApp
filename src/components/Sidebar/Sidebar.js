import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar">
      <div
        className="sidebar-background"
      />
      <div className="sidebar-wrapper">
        <div className="logo sidebar-center align-items-center justify-content-start">
          <div className="logo-img">
            <img
              src={require("assets/img/logo/logo_komodocare_blue.png").default}
              alt="..."
            />
          </div>
        </div>
        <Nav className={"sidebar-center"}>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active logout-session"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <div className="tab-icon">
                      <img
                        src={prop.tabIcon}
                        alt="..."
                      />
                    </div>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
