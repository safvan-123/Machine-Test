import axios from "axios";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";

function Head2() {
  const { username } = useContext(LoginContext);
  const [user, setuser] = username;
  let navigate = useNavigate();

  const SignOut = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const res = await axios
      .post(
        "https://hiring-stackroots-server.herokuapp.com/auth/signout/user",
        {},
        config
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            src="https://thumbs.dreamstime.com/b/client-member-icon-splash-natural-blue-round-button-isolated-abstract-illustration-142316739.jpg"
            className="logoimg"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <Navbar.Brand className="brand font-weight-bold" href="#home">
            Welcome {user}
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="togglebtn"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                to="/home"
                className="active ml-4 nav-content font-weight-bold"
              >
                {}
              </Link>

              <Link
                onClick={SignOut}
                to="/"
                className="active ml-4 nav-content "
              >
                SignOut
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Head2;
