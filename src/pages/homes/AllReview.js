import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AllReview = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setreviews(data);
        console.log("All review ", data);
      });
  }, []);

  // serviceName: service.name,
  // review: comment,
  // email: user.email,
  // name: user.displayName,
  // photo: user.photoURL,
  // reviewTime: new Date().toLocaleString(),

  return (
    <div className="my-5 shadow w-50 mx-auto">
      <Row xs={1} md={2} className="g-4">
        {reviews.map((review) => (
          <Col className="w-50 " style={{ maxHeight: "70%" }}>
            <div className="">
              <img
                className="w-50 h-50 rounded-pill"
                src={review.photo}
                alt=""
              />
              <p>
                <h3> {review.review}</h3>
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllReview;
