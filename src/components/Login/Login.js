import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect } from "react";
import { LoginContext } from "../../App";

function Login() {
  const Navigate = useNavigate();
  const { value1 } = useContext(LoginContext);
  const [LoggedIn, setloggedIn] = value1;
  console.log(LoggedIn);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://hiring-stackroots-server.herokuapp.com/auth/signin/user", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.isError) {
          alert(res.data.message);
        } else {
          let token = res.data.data.user.accessToken;
          localStorage.setItem("token", token);
          Navigate("/home");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloggedIn(true);
    sendRequest();
  };
  //   useEffect(() => {
  //     setloggedIn(true);
  //   }, []);
  return (
    <div className="login-box text-center">
      <h2 className="font-weight-bold mt-5">Login</h2>
      <Form onSubmit={handleSubmit} className="loginform">
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

export default Login;
