import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginDetails);
  };
  return (
    <div id="register-container">
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <h1>Login </h1>
        </div>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email/username</Form.Label>
          <Form.Control
            required
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="enter password"
          />
        </Form.Group>

        <br />

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div id="button-container">
          <Button variant="primary" className="m-2" type="submit">
            Sing In
          </Button>
          <Button variant="warning" className="m-2" type="reset">
            Reset
          </Button>
        </div>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Label label="Check me out">
            If You Doesn't Have Account click create{" "}
          </Form.Label>{" "}
          <Link to="/signup"> Sign Up</Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
