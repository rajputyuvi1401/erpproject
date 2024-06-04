// src/Home.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Home.css";
import logo from "../assets/logo-dark.png";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4">
            <div className="home-form">
              <form>
                <img className="logo" src={logo} alt="logo" />
                <p>
                  Enter your email address and <br /> password to access admin
                  panel.
                </p>
                <div className="form1">
                  <div className="mb-3">
                    <label for="exampleInputemail" className="form-label">
                      Email address
                    </label>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className="form-control"
                      id="exampleInputemail"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputcity" className="form-label">
                      Password
                    </label>
                    <input
                      placeholder="Enter your password"
                      type="text"
                      className="form-control"
                      id="exampleInputcity"
                      aria-describedby="cityHelp"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn">
                    Log In
                  </button>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="outer">
        <p>Powered by clumpcoder</p>

        {/* <p>
          Don't have an account?{" "}
          <span>
            <Link to={{}} className="outer-link">
              Sign Up
            </Link>
          </span>
        </p>
        <p>
          2015 - 2024 &copy; UBold theme by{" "}
          <span style={{ color: "wheat" }}>Coderthemes</span>
        </p> */}
      </div>
    </div>
  );
}

export default Home;
