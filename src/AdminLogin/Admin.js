import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Admin.css";
import logo from "../assets/logo-dark.png";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { email, password };

    try {
      const response = await fetch(
        "http://13.201.136.34:8000/vendor/login/", // Ensure this URL is HTTPS
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
        console.error("Vender Login error:", errorData);
        throw new Error("Vender Login failed");
      }

      const responseData = await response.json();
      console.log("Vender Login successful:", responseData);
      navigate("/"); // Navigate to the dashboard page
    } catch (error) {
      console.error("Vender Login error:", error);
    }
  };

  return (
    <div className="Admin-login">
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4">
            <div className="Admin-form">
              <form onSubmit={handleSubmit}>
                <img className="Adminlogo" src={logo} alt="logo" />

                <p>
                  Enter your email address and <br /> password to access the
                  admin panel.
                </p>
                <div className="Adminform1">
                  <h6 style={{ textAlign: "center" }}>Vender Login</h6>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      Email
                    </label>
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      id="emailInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                </div>
                <div className="mb-3">
                  <button type="submit" className="Adminbtn">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="Adminouter">
        <p>Powered by clumpcoder</p>
      </div>
    </div>
  );
};

export default Admin;
