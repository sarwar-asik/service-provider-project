import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';





const Login = () => {
    
    const [show, setshow] = useState(false);
  const [error, setError] = useState("");

const {login,loader,setloader} = useContext(AuthContext)

  const handleShow = () => {
    return setshow(!show);
  };

const logInUser =event=>{
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      toast(user);
      setError("");
      form.reset();
      console.log(user.email);
      // added a token //
      setloader(false)

    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });

  setError("");

}
    return (
        <div
      className=" mx-auto h-100 bg-light py-5 my-auto px-3 shadow"
      style={{ maxWidth: "60%" }}
    >
        {loader &&
         <div class="text-center">
         <div class="spinner-border" role="status">
           <span class="visually-hidden">Loading...</span>
         </div>
       </div>
        }
       
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
    </div>
    );
};

export default Login;