import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="d-flex justify-content-between">
          <p>©2025 Horizon UI. All Rights Reserved.</p>
          <div>
            <Link className="text-decoration-none px-2">Support</Link>
            <Link className="text-decoration-none px-2">License</Link>
            <Link className="text-decoration-none px-2">Terms os Use</Link>
            <Link className="text-decoration-none px-2">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
