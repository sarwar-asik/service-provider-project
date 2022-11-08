import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";

const ServicesDetail = () => {
  useTitle('Service Detail')
  const service = useLoaderData();
  console.log(service.reviews);
  const { user } = useContext(AuthContext);

  const submitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.name.value;

    const reviews = {
      id: service._id,
      serviceName: service.name,
      review: comment,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      reviewTime: new Date().toLocaleTimeString(),
    };

    
    // console.log(reviews);
    fetch(`http://localhost:5000/services/${service._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({service,reviews}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast('Thanks for Review')
        form.reset()

      });



  };

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
          return (
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    className="img-fluid rounded-pill"
                    src={rev.photo?rev.photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
                    alt=""
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <div class="card-header">{rev.name}</div>

                    <p class="card-text">
                      <span className="text-muted fw-bold">User review : </span>
                      <br />
                      <span className="text-warning  fw-bold fs-5">
                        {rev.review}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" bg-light my-5 py-5">
       {user?.email?
        <form onSubmit={submitReview}>
        <label for="exampleInputEmail1" class="form-label">
          Write Your Review
        </label>
        <textarea
          type="text"
          name="name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></textarea>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      :
      <h1>For Add Review Please <Link to={'/login'} className="text-decoration-none" >Log In .. </Link> </h1>

       }
      </div>
    </div>
  );
};

export default ServicesDetail;
