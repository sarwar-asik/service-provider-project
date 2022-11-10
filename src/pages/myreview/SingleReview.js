import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const SingleReview = () => {
  const reviews = useLoaderData();

  const submitReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const rev = form.rev.value;
    const img = form.img.value;


    toast("update");


    fetch(`http://localhost:5000/reviews/${reviews._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({rev,img}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="my-5 mx-auto py-3 shadow rounded px-1" style={{'maxWidth':'60%'}}>
      <h1 className="text-center bg-secondary my-3 py-5 text-light"> Update Your Review  </h1>

      <form onSubmit={submitReview} className='px-2'>
        <label for="exampleInputText" class="form-label">
          Update Image
        </label>

        <input
          type="text"
          class="form-control"
          id="exampleInputText"
          name="img"
          placeholder="paste img url"
        />

        <label for="exampleInputEmail1" class="form-label">
          Write Your Review
        </label>
        <textarea
          type="text"
          name="rev"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          defaultValue={reviews.review}
        ></textarea>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SingleReview;
