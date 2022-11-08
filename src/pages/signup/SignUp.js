import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const SignUp = () => {
  const [check, setcheck] = useState(true);
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  const [show, setshow] = useState(false);

  const handleShow = () => {
    return setshow(!show);
  };

  const signInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast("registered");
        console.log(user);
        setError("");
        form.reset();

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: "shorturl.at/krJMU",
        })
          .then(() => {
            // toast('added name')
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);

        // ..
      });
    setError("");
  };

  return (
    <div
      className=" mx-auto h-100 bg-light py-5 px-3 shadow"
      style={{ maxWidth: "70%" }}
    >
      <Form onSubmit={signInUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

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
    </div>
  );
};

export default SignUp;