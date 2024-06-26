import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import logo from "../assets/logo-dark.png";

function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { email, password };

    try {
      const response = await fetch(
        "http://13.201.136.34:8000/Erp_admin/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login error:", errorData);
        throw new Error("Login failed");
      }

      const responseData = await response.json();
      console.log("Login successful:", responseData);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="home-login">
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4">
            <div className="home-form">
              <form onSubmit={handleSubmit}>
                <img className="logo" src={logo} alt="logo" />
                <p>
                  Enter your email address and <br /> password to access admin
                  panel.
                </p>
                <div className="form1">
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      email
                    </label>
                    <input
                      placeholder="user name"
                      type="email"
                      className="form-control"
                      id="emailInput"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">
                      Password
                    </label>
                    <input
                      placeholder="Enter your password"
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
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
      </div>
    </div>
  );
}

export default Home;
