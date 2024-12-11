import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";
import { loginUser } from "../Service/Erpsetting.jsx"; 

const Login = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call the loginUser function
      const data = await loginUser(username, password);

      if (data.message === "Login successful") {
        // Store permissions and other relevant info
        localStorage.setItem("permissions", JSON.stringify(data.permissions));
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert(data.message || "Login failed");
      }
    }  catch (error) {
      alert(error || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="home-login">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="home-form">
            <form onSubmit={handleSubmit}>
              <h6>Produlink</h6>
              <p>
                Enter your Username and <br /> Password to access the
                admin panel.
              </p>
              <div className="form1">
                <div className="mb-3">
                <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
                </div>
                <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
              </div>
              <div className="mb-3">
                <button type="submit" className="homebtn w-100" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
            <div className="outer text-center">
              <p>Powered by Clumpcoder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
