import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import AuthToken from "../../JWT/AuthToken";
import useTitle from "../../myhooks/useTitle";

const Login = () => {
  useTitle("Log In ");

  const [show, setshow] = useState(false);
  const [error, setError] = useState("");

  const { login, loader, setloader, googleSignIn } = useContext(AuthContext);

  const handleShow = () => {
    return setshow(!show);
  };

  const logInUser = (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        toast(user, "log in ");
        setError("");
        form.reset();
        setloader(false);

        ///get jwt token ///


        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {


            console.log(data);

            
            localStorage.setItem("sh-travel-token", data.token);
          });




          // close jwt
      })
      .catch((error) => {
        setError(error.message);
        setloader(true)
      });

    setError("");
  };
  return (
    <div
      className=" mx-auto h-100 bg-light py-5 my-auto px-3 shadow"
      style={{ maxWidth: "60%" }}
    >
      {loader && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <Form onSubmit={logInUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div className="d-flex justify-content-between item-center">
            <Form.Label>Password</Form.Label>
            <p className="fs-4" onClick={handleShow}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
          <Form.Control
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check   type="checkbox" label="Check me out" />
        </Form.Group> */}
        <p className="text-danger ">{error}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="my-1 text-muted">
        Are you a new user . please <Link to={"/signup"}>Sign Up...</Link>
      </p>
      <div
        onClick={googleSignIn}
        className="btn btn-outline-primary w-100 mt-2 "
      >
        <h2 className="text-yellow-800">
          Sign with <br />{" "}
          <span className="text-3xl text-yellow-700 font-semibold">
            {" "}
            Google
          </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Login;
