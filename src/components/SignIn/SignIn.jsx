import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="SignIn">
      <div className="container-fluid vh-100">
        <div className="row h-100">
          {/* Left side - Form */}
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center  my-5">
            <div className="container w-50">
              <div className="row">
                <div className="align-item-start d-flex mb-5">
                  <Link
                    to={"/"}
                    className=" small d-inline-block text-decoration-none mt-4 footercolor"
                  >
                    <i className="fa-solid fa-chevron-left"></i> Back to
                    Dashboard
                  </Link>
                </div>
                <h1 className=" mb-3 footercolor">Sign In</h1>
                <p className=" mb-4 footercolor">
                  Enter your email and password to sign in!
                </p>
                <button className="btn btn-light w-100 mb-3 border d-flex align-items-center justify-content-center signBtn">
                  <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    alt="Google"
                    className="me-2"
                    style={{ width: "24px" }}
                  />
                  Sign In with Google
                </button>

                <div className="d-flex align-items-center mb-3">
                  <hr className="flex-grow-1" />
                  <span className="px-2 footercolor">or</span>
                  <hr className="flex-grow-1" />
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fontlabel">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="mail@simmple.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fontlabel">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control password"
                      placeholder="Min. 8 characters"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="keepLoggedIn"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="keepLoggedIn"
                      >
                        Keep me logged In
                      </label>
                    </div>
                    <Link to={""} className="forgotPassword">
                      Forgot Password?
                    </Link>
                  </div>
                  <button type="submit" className="btn w-100 signInButton">
                    Sign In
                  </button>
                </form>

                <p className="fontlabel mt-3">
                  Not registered yet?{" "}
                  <Link to={""} className="forgotPassword">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-lg-6 d-none d-lg-flex position-relative image">
            <ul className="d-flex justify-content-end w-50 align-items-end m-5 gap-4 links ">
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none text-light">
                  Support
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none text-light">
                  License
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none text-light">
                  Terms os Use
                </Link>
              </li>
              <li className="list-unstyled">
                <Link to={""} className="text-decoration-none text-light">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="btn btn-primary position-fixed bottom-0 end-0 m-3 rounded-circle border-0  darkmode"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa fa-moon"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default SignIn;
