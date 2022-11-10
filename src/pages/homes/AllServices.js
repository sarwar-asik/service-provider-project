import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Blogs from "../blogs/Blogs";
import Login from "../login/Login";
import Services from "../services/Services";

const Section3 = () => {
  return (
    <div className="my-3 shadow">
        <h1 className="bg-info mt-5 p-3 text-light fw-bold"> Visit My All  </h1>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="All" title="Blogs">
          <Blogs />
        </Tab>
        <Tab eventKey="profile" title="All Services">
          <Services />
        </Tab>
        <Tab eventKey="longer-tab" title="Log In ">
          <Login />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Section3;
