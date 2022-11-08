import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../services/ServiceCard";
import Services from "../services/Services";
import Sliders from "./Sliders";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://sh-tourist-server.vercel.app/serviceslimit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-light mx-auto text-center" style={{ maxWidth: "90%" }}>
      <Sliders></Sliders>
      <div className="my-3 mx-auto" style={{ maxWidth: "90%" }}>
        <h1>Services {services.length}</h1>
        <div class="card-group row ">
          {services.map((service) => {
            return (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            );
          })}
        </div>

        <Link to={'/services'} className="btn btn-primary px-3 py-2">See All </Link>
      </div>
    </div>
  );
};

export default Home;
