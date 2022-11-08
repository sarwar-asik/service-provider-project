import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-3 mx-auto" style={{ maxWidth: "90%" }}>
      <h1>Services {services.length}</h1>
      <div class="card-group row ">
        {services.map((service) => {
          return (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
