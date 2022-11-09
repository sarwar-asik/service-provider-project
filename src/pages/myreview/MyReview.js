import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  //// for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ////modal close////

  useTitle("My Reviews"); //// title the page ////

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    toast("updatas");
  };

  return (
    <div className="mx-auto" style={{ maxWidth: "80%" }}>
      <h2>total review {review.length}</h2>
      <div class="row">
        {review.map((rev) => {
          return (
            <div class="col-sm-6 col-md-4 col-lg-4 my-2">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">{rev.review}</p>
                  <h5 class="card-title text-muted">{rev.serviceName}</h5>
                </div>

                <div className="d-flex justify-content-between align-items-center px-2 py-3">
                  <div className=" w-50 ">
                    <Button variant="primary" onClick={handleShow}>
                      Update
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={handleUpdate}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                          <Button onClick={handleClose} variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button> */}
                        <Button variant="primary" onClick={handleClose}>
                          Update Change
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>

                  <div className="">
                    <button className="btn btn-outline-danger">Delete</button>
                  </div>
                </div>

                {/* close body */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReview;
