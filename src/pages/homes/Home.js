import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";
import ServiceCard from "../services/ServiceCard";
import Services from "../services/Services";
import Section3 from "./AllServices";
import MyExtra from "./MyExtra";
import Sliders from "./Sliders";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    fetch("https://sh-tourist-server.vercel.app/serviceslimit")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setloader(false);
      });
  }, []);

  return (
    <div className="bg-light mx-auto text-center">
      <Sliders></Sliders>

      <MyExtra></MyExtra>
      {/* for services */}
      {loader && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="my-3 mx-auto" style={{ maxWidth: "90%" }}>
        <h1 hidden={loader || false}>Total Services {services.length}</h1>
        <div class="card-group row ">
          {services.map((service) => {
            return (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            );
          })}
        </div>

        <Link
          to={"/services"}
          className="btn btn-primary px-3 py-2"
          hidden={loader || false}
        >
          See All{" "}
        </Link>
      </div>

      <Section3></Section3>
    </div>
  );
};

export default Home;
