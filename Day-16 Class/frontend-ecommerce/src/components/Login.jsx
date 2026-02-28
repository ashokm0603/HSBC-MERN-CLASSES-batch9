import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate()
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://alpha-ecommerce-mart.onrender.com/api/login",
        loginDetails,
      );

      console.log(response.data);
      toast.success("login Successfully 😊");

        setTimeout(()=>{
        navigate("/home")
      },4000)

    } catch (error) {
      toast.error("failed to login 😥");
      console.log(error);
    }
  };
  return (



    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <a href="/">
            <div id="brand-container">
            <img
              src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-152.jpg"
              height={"60px"}
              alt=""
            />
            <h1>E-commerce</h1>
          </div>
          </a>

          <div>
            <button className="btn btn-primary">
              <Link to="/signin">SignIn</Link>
            </button>
          </div>
        </Container>
      </Navbar>
    
    
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

      <ToastContainer />
    </div>
            </>
  );
};

export default Login;
