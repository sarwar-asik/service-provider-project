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
    <div className="my-5 mx-auto w-50">
<h2 className="bg-info  py-3 text-muted rounded my-3"> My Service Review </h2>
      <Row xs={1} md={3} className="g-4">
        {reviews.map((review) => (
          <Col className="py-3 shadow  "  style={{'borderTopRightRadius':'60%'}}>
            <div className="d-flex gap-1 w-50 ">
              <img
                className="w-50 h-50 rounded-pill"
                src={review.photo}
                alt=""
              />
              <p>
                <h5> 
                {review.review?.length <= 20 ?review.review:review.review.slice(0,20) +'......' }
                </h5>
              </p>
            </div>
            <p>
            {review.name}
            </p>
            <p>{review.reviewTime}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllReview;
