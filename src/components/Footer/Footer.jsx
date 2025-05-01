import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between">
          <p>©2025 Horizon UI. All Rights Reserved.</p>
          <div className="link">
            <Link className="btn text-decoration-none px-2">Support</Link>
            <Link className="text-decoration-none px-2 btn">License</Link>
            <Link className="text-decoration-none px-2 btn">Terms os Use</Link>
            <Link className="text-decoration-none px-2 btn">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
