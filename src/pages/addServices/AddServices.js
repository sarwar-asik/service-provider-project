import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";

const AddServices = () => {
  useTitle('Add Services')
  const [loader, setloader] = useState(false);
  const { user } = useContext(AuthContext);

  console.log(user);
  const addServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const detail = form.details.value;

    const services = {
      name,
      img,
      rating,
      price,
      detail,
      time: new Date().toLocaleString(),
      reviews: [
        {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
          reviewTime: new Date().toLocaleString(),
        },
      ],
    };
    console.log(services);
    setloader(true);

    fetch("https://sh-tourist-server.vercel.app/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setloader(false);
        toast("Services Added");
        form.reset();
      });
  };
  return (
    <div
      className=" mx-auto h-100 bg-light py-5 px-3 shadow"
      style={{ maxWidth: "70%" }}
    >
      {loader && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
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
       

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddServices;
