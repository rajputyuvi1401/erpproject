import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemMasterQuery.css"
const ItemMasterQuery = () => {
    const [key, setKey] = useState("query");

  return (
    <div className="container mt-4">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="query" title="Query">
        <div className="p-3">
          {/* Query content goes here */}
          <h4>Query</h4>
          <p>Enter your query here...</p>
        </div>
      </Tab>
      <Tab eventKey="result" title="Result">
        <div className="p-3">
          {/* Result content goes here */}
          <h4>Result</h4>
          <p>The result of the query will be displayed here...</p>
        </div>
      </Tab>
    </Tabs>
  </div>
  )
}

export default ItemMasterQuery
