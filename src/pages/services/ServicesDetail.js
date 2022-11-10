import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";

const ServicesDetail = () => {
  useTitle("Service Detail");
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

const [reviews,setReviews] = useState([])

const [refresh, setRefresh] = useState([])



useEffect(()=>{
  fetch(`https://sh-tourist-server.vercel.app/reviews/${service._id}`)
  .then(res=>res.json())
  .then(data=>{
    setReviews(data)
    
  })
},[refresh])

const sortsReview =reviews.sort((a,b)=>new Date(b.reviewTime)-new Date(a.reviewTime))



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
      reviewTime: new Date().toLocaleString(),
    };

    // / post user review   ///

    fetch("https://sh-tourist-server.vercel.app/addreviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast('update comment')
        form.reset()
        setRefresh(data)
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

      
      <div class="card-group row">


        {
          sortsReview.map(review=>{
            return <div className="col-6 my-2 shadow ">
  
            <div class="card  border border-0">
                <img className=" mx-auto py-3 " src={review.photo} class="card-img-top" alt="..." style={{'width':'40%','borderTopLeftRadius':'60%'}}/>
                <div class="card-body">
                  <p class="card-text fw-bold fs-3 ">{review.review}</p>
                  <h5 class="card-title text-muted">{review.name}</h5>
                </div>
                <div class="card-footer">
                  <small>{review.email}</small>
                  <br />
                  <small class="text-muted">At {review.reviewTime}</small>
                </div>
              </div>
            </div>
          })
        }




</div>


      <div className=" bg-light my-5 py-5">
        {user?.email ? (
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
        ) : (
          <h1>
            For Add Review Please{" "}
            <Link to={"/login"} className="text-decoration-none">
              Log In ..{" "}
            </Link>{" "}
          </h1>
        )}
      </div>
    </div>
  );
};

export default ServicesDetail;
