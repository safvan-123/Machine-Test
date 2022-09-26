import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Register.css";
import { LoginContext } from "../../App";

function Signup() {
  const { username } = useContext(LoginContext);
  const [user, setuser] = username;
  console.log(user);
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    // lastname: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setuser(input.fullname);
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://hiring-stackroots-server.herokuapp.com/auth/signup/user", {
        fullname: input.fullname,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        console.log(res, "successfully send");
      })
      .catch((err) => {
        console.log("error", err);
        alert(err.response.data.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    sendRequest().then(() => Navigate("/login"));
  };
  //   useEffect(() => {
  //     setloggedIn(true);
  //   }, []);
  return (
    <div className="login-box text-center">
      <h2 className="font-weight-bold mt-5">SIGNUP</h2>
      <Form onSubmit={handleSubmit} className="registerform">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Full Name"
            onChange={handlechange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            minLength={8}
            maxLength={20}
            placeholder="Password"
            onChange={handlechange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
