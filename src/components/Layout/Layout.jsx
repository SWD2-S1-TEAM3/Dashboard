import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="Layout">
        <SideBar />
        <div style={{ marginLeft: "220px", padding: "1rem" }}>
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
