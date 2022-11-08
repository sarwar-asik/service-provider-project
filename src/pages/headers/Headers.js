import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Headers = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home" className=" ">
            <Link to={'/'} className="btn fw-bold fs-1 text-muted">SH PERSONAL TRAVEL</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <Nav>
              {user?.uid ? (
                <>
                  <Link className="btn btn-outline-primary my-1 mx-1" to={"/review"}>
                    My Review{" "}
                  </Link>
                  <Link className="btn btn-outline-primary my-1 mx-1" to={"/addservices"}>
                    Add Service{" "}
                  </Link>
                  <Link
                    onClick={logout}
                    className="btn btn-danger my-1 mx-1"
                    to={"/"}
                  >
                    Log Out{" "}
                  </Link>

                </>
              ) : (
                <>
                  <Link
                    className="btn btn-outline-primary my-1 mx-1"
                    to={"/login"}
                  >
                    Log In{" "}
                  </Link>
                  <Link
                    className="btn btn-outline-primary my-1 mx-1"
                    to={"/signup"}
                  >
                    Sign Up{" "}
                  </Link>
                </>
              )}

              <Link to={'/blogs'}
                className="btn btn-outline-secondary my-1 mx-1"
              >
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
