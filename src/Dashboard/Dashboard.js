import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { FaShoppingCart, FaUsers, FaDollarSign } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import SideNav from "../SideNav/SideNav";

const Dashboard = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);

  const data = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 700 },
    { name: "May", sales: 600 },
  ];

  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NavBar toggleSideNav={toggleSideNav} />
            <SideNav sideNavOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
            <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
              {/* <h1 className="text-center mb-4">Dashboard</h1> */}

              <div className="row g-4 mt-5">
                <div className="col-md-4">
                  <Card className="text-center shadow-lg p-3 rounded">
                    <CardBody>
                      <FaDollarSign size={30} className="mb-2 text-primary" />
                      <CardTitle tag="h5">Total Sales</CardTitle>
                      <CardText className="fs-4 fw-bold">₹ 1,20,000</CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className="text-center shadow-lg p-3 rounded">
                    <CardBody>
                      <FaShoppingCart size={30} className="mb-2 text-success" />
                      <CardTitle tag="h5">Orders</CardTitle>
                      <CardText className="fs-4 fw-bold">320</CardText>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className="text-center shadow-lg p-3 rounded">
                    <CardBody>
                      <FaUsers size={30} className="mb-2 text-warning" />
                      <CardTitle tag="h5">Customers</CardTitle>
                      <CardText className="fs-4 fw-bold">85</CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-12">
                  <h3 className="text-center mb-3">Sales Overview</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" stroke="#333" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sales" fill="#007bff" barSize={50} radius={[10, 10, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
