import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const AddServices = () => {
  const [error, setError] = useState("");

  const addServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const detail = form.details.value;
    const review = form.review.value;

    const services = {
      name,
      img,
      rating,
      price,
      detail,
      time : new Date().toLocaleTimeString(),
      reviews: [{ review ,reviewTime:new Date().toLocaleTimeString()}],
    };
    console.log(services);

    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Services Added");
        form.reset();
      });
  };
  return (
    <div
      className=" mx-auto h-100 bg-light py-5 px-3 shadow"
      style={{ maxWidth: "70%" }}
    >
      <Form onSubmit={addServices}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Services Name </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Service Name"
            required
          />
        </Form.Group>
        {/* input */}
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Services Image </Form.Label>
          <Form.Control
            name="img"
            type="text"
            placeholder="Paste Image"
            required
          />
        </Form.Group>
        {/* input */}
        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Services Rating </Form.Label>
          <Form.Control
            name="rating"
            type="text"
            placeholder="Enter rating"
            required
          />
        </Form.Group>
        {/* input */}
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Services Price </Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder="Enter Price"
            required
          />
        </Form.Group>
        {/* input */}
        <Form.Group className="mb-3" controlId="formBasicDetails">
          <Form.Label>Services Detail</Form.Label>
          <Form.Control
            name="details"
            type="text"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        {/* input */}
        <Form.Group className="mb-3" controlId="formBasicReview">
          <Form.Label>Review </Form.Label>
          <Form.Control
            name="review"
            type="text"
            placeholder="Review"
            required
          />
        </Form.Group>
        {/* input */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddServices;
