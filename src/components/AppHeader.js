import React from "react";
import logo from "../assets/logo.svg";
import logoMobile from "../assets/logo-mobile.svg";
import { DrawerMenu } from "./DrawerMenu";
import { Link } from "react-router-dom";
export const AppHeader = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <div
      className="navigation-container"
      style={{
        position: "sticky",
        top: "0",
        background: "white",
      }}
    >
      <div className="upper-container">
        <div className="logo-and-menu">
          {/* for mobile */}
          <i
            className="drawer-menu-icon uil uil-bars"
            onClick={() => setShowDrawer(!showDrawer)}
          ></i>
          {/* for web */}
          <i
            className="logo uil uil-bars tx-24"
            onClick={() => setShowDrawer(!showDrawer)}
          ></i>
          <Link to="/">
            <img className="h4 logo-short logo-size-mobile" src={logoMobile} />
          </Link>
          <Link to="/">
            <img className="h4 logo logo-size" src={logo} />
          </Link>
        </div>
        {/* <div className="navigation-link-container">
          <a className="navigation-link" href="#">
            Motors
          </a>
          <a className="navigation-link" href="#">
            Propellor
          </a>
          <a className="navigation-link" href="#">
            Reciever
          </a>
          <a className="navigation-link" href="#">
            Battery
          </a>
        </div> */}
        <div className="search-container-big">
          <i className="search-icon uil uil-search"></i>
          <input
            placeholder="Search here..."
            className="search-input-big"
            type="text"
          />
        </div>

        <div className="nav-icon-container">
          <a href="#">
            <div className="badge-container">
              <i className="badge-icon uil uil-history"></i>
              <i className="badge">5</i>
            </div>
          </a>
          <a href="#">
            <i className="badge-icon uil uil-user-circle"></i>
          </a>
        </div>
      </div>
      <div className="search-container-small">
        <i className="search-icon uil uil-search"></i>
        <input
          placeholder="Search products here..."
          className="search-input-small"
          type="text"
        />
      </div>
      {showDrawer && <DrawerMenu onClick={() => setShowDrawer(!showDrawer)} />}
    </div>
  );
};
