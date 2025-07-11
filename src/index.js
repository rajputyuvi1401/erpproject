import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
