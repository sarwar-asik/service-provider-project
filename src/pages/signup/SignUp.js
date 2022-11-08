import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import app from "../../firebase/firebase.config";
import useTitle from "../../myhooks/useTitle";

const auth = getAuth(app);

const SignUp = () => {
  useTitle('Sign Up')
  const [error, setError] = useState("");

  const { createUser, loader, setloader } = useContext(AuthContext);

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
    const img = form.img.value;
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
          photoURL: img,
        })
          .then(() => {
            toast("added name");
            setloader(false);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);

        // ..
      });
    setError("");
  };

  return (
    <div
      className=" mx-auto h-100 bg-light my-5 py-5 px-3 shadow"
      style={{ maxWidth: "50%" }}
    >
      {loader && (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Form onSubmit={signInUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Paste Your Photo</Form.Label>
          <Form.Control type="text" name="img" placeholder="paste url" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
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
            required
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
