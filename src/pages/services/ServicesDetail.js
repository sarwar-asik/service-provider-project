import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetail = () => {
  const service = useLoaderData();
  console.log(service.reviews);
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
          style={{ maxHeight: "250px", maxWidth: "100%" }}
        />
        <div class="card-body ">
          <div className="d-flex justify-content-between fw-bold text-muted">
            <p> Price: {service.price}</p>
            <p>Rating : {service.rating}</p>
          </div>

          <h3 className="text-warning">Service Full Details </h3>
          <p className="fs-4 fw-bold " class="card-text">
            {service.detail}
          </p>
        </div>
      </div>

      <div className="card mx-auto my-3 w-50 shadow">
        <h1> Total Review </h1>
        {service.reviews.map((rev) => {
     return <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
        <img className="img-fluid" src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
          <div class="card-header">{rev.name}</div>
    
          <p class="card-text">
              <span className="text-muted fw-bold">User review : </span><br />
              <span className="text-warning  fw-bold fs-5">{rev.review}</span>
                  </p>
          
          </div>
        </div>
      </div>
    </div>
        })}
      </div>

      


    </div>
  );
};

export default ServicesDetail;
