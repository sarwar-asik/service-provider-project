import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetail = () => {
  const service = useLoaderData();
//   console.log(service);
  return (
    <div className="mx-auto my-5 text-center " style={{ maxWidth: "70%" }}>
      <h1>
        My Service <span className="text-warning">{service.name}</span>{" "}
      </h1>

      <div class="card mx-auto w-50 shadow">
        <img
          src={service.img}
          className="mx-auto"
          class="card-img-top"
          alt="..."
          style={{ maxHeight: "250px", maxWidth: "90%" }}
        />
        <div class="card-body">
          <div className="">
            <p> Price: {service.price}</p>
            <p>Rating : {service.rating}</p>
          </div>

          <h3 className="text-warning">Service Full Details </h3>
          <p className="fs-3 fw-bold" class="card-text">
            {service.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
