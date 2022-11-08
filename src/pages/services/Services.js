import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const {loader,setloader} =useContext(AuthContext)


  useEffect(() => {
    fetch("https://sh-tourist-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
          setServices(data)
          setloader(false)
        
      });

  }, []);

  return (
    <div className="my-3 mx-auto" style={{ maxWidth: "90%" }}>
         {loader &&
         <div class="text-center">
         <div class="spinner-border" role="status">
           <span class="visually-hidden">Loading...</span>
         </div>
       </div>
        }
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
