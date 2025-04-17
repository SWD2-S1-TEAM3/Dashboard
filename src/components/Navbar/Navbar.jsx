import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-dark-subtle px-3 shadow-sm">
        <div className="d-flex flex-column">
          <div className="logo d-flex flex-wrap">
            <ul className="d-flex flex-column list-unstyled p-3">
              <li>
                <NavLink to={""} className="text-decoration-none p-2">
                  Main Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"NFTMarketplace"}
                  className="text-decoration-none p-2"
                >
                  NFT Marketplace
                </NavLink>
              </li>
              <li>
                <NavLink to={"DataTables"} className="text-decoration-none p-2">
                  Data Tables
                </NavLink>
              </li>
              <li>
                <NavLink to={"Profile"} className="text-decoration-none p-2">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"SignIn"} className="text-decoration-none p-2">
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
