import React from "react";
import styles from "./SignIn.module.css"
function SignIn() {
  return (
    <>
      
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left side - Form */}
        < div className= "col-lg-6 d-flex flex-column justify-content-center align-items-center bg-white ">
          <div className="w-75">
            <a href="MainDashboard" className={ ` small d-inline-block text-decoration-none mt-4 ${styles.footercolor}`}>
              <i class="fa-solid fa-chevron-left"></i>  Back to Dashboard
            </a>
            <div className={styles.spacer}></div>

           
            <h1 className={` mb-3 ${styles.fontsizesign}`}>Sign In</h1>
            <p className={` mb-4 ${styles.footercolor}`}>Enter your email and password to sign in!</p>

            <button className="btn btn-light w-100 mb-3 border d-flex align-items-center justify-content-center ">
              <img 
                src="https://img.icons8.com/color/48/000000/google-logo.png" 
                alt="Google" 
                className="me-2" 
                style={{ width: '24px' }} 
              />
              Sign In with Google
            </button>

            <div className="d-flex align-items-center mb-3">
              <hr className="flex-grow-1" />
              <span className="px-2 text-muted">or</span>
              <hr className="flex-grow-1" />
            </div>

            <form>
              <div className="mb-3">
                <label className={`form-label ${styles.fontlabel}`}>Email*</label>
                <input type="email" className="form-control" placeholder="mail@simmple.com" />
              </div>
              <div className="mb-3">
                <label className={`form-label ${styles.fontlabel}`}>Password*</label>
                <input type="password" className="form-control" placeholder="Min. 8 characters" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="keepLoggedIn" />
                  <label className="form-check-label" htmlFor="keepLoggedIn">Keep me logged In</label>
                </div>
                <a href="#" className={`${styles.forgotPassword} small  `}>Forgot Password?</a>
              </div>
              <button type="submit" className={`btn w-100 ${styles.signInButton}`}>Sign In</button>
            </form>

            <p className={`${styles.fontlabel} mt-3`}>
              Not registered yet? <a href="#" className={styles.forgotPassword}>Create an account</a>
            </p>
            <p className={`ps-3 pt-4 ${styles.footercolor}`}>©2025 Horizon UI. All Rights Reserved.</p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className={`col-lg-6 d-none d-lg-flex position-relative ${styles.image}`}>
        <ul className={`text-white d-flex justify-content-around position-absolute bottom-0 start-0  w-50 ${styles.links} `}>
            <li className="list-unstyled">
              <a href="#" className="text-white text-decoration-none">Support</a>
            </li>
            <li className="list-unstyled">
              <a href="#" className="text-white text-decoration-none">License</a>
            </li>
            <li className="list-unstyled">
              <a href="#" className="text-white text-decoration-none">Terms os Use</a>
            </li>
            <li className="list-unstyled">
              <a href="#" className="text-white text-decoration-none">Blog</a>
            </li>
          </ul>

        </div>

      </div>
      <button 
        className={`btn btn-primary position-fixed rounded-circle border-0  ${styles.darkmode}`}>
        <i class="fa-solid fa-moon"></i>
      </button>

    </div>
    </>
  );
}

export default SignIn;
