import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

function Layout() {
  return (
    <>
      <div>
        <SideBar />
        <div style={{ marginLeft: "220px", padding: "1rem" }}>
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
