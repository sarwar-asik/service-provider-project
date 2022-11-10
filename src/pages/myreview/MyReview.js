import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../myhooks/useTitle";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const isDelete = window.confirm("Do you want Delete");

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast("deleted");
        const remaining = review.filter((rv) => rv._id !== id);
        setReview(remaining);
      });
  };

  console.log(review);

  return (
    <div className="mx-auto" style={{ maxWidth: "80%" }}>
      <div class="row">

        {review.length === 0 && <h2 className="text-danger text-center mt-3">No reviews were added</h2>}



        {review?.map((rev) => {
          return (
            <div class="col-sm-6 col-md-4 col-lg-4 my-2">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">{rev.review}</p>
                  <h5 class="card-title text-muted">{rev.serviceName}</h5>
                  <p>Email: {rev.email}</p>
                  <img className="w-25 rounded" src={rev.photo} alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center px-2 py-3">
                  {/* update */}

                  <Link
                    to={`/review/${rev._id}`}
                    className="btn btn-outline-info"
                  >
                    Update
                  </Link>

                  {/* delete review */}
                  <div className="">
                    <button
                      onClick={() => handleDelete(rev._id)}
                      className="btn btn-outline-danger"
                      style={{ fontSize: "70%" }}
                    >
                      Delete Review{" "}
                    </button>
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
