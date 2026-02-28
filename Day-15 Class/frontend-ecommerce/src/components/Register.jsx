/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
function Register() {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });


  const navigate=useNavigate()
  const handleChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/register",
        registerDetails,
      );

      console.log(response);
      toast.success("user Register successfully");

      setTimeout(()=>{
        navigate("/signin")
      },4000)

    } catch (err) {
      toast.error("failed to register");
      console.log(err);
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
          <h1>Register </h1>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
              />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              name="phone"
              onChange={handleChange}
              type="tel"
              placeholder="+91"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
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
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            name="address"
            onChange={handleChange}
            placeholder="1234 Main St"
            />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              onChange={handleChange}
              placeholder="bangalore"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              required
              name="state"
              onChange={handleChange}
              defaultValue="Choose..."
            >
              <option>Choose State</option>
              <option>Karnataka</option>
              <option>Andhra Pradesh</option>
              <option>Tamil nadu</option>
              <option>Kerala</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              name="zipcode"
              onChange={handleChange}
              placeholder="561207"
              />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <div id="button-container">
          <Button variant="primary" className="m-2" type="submit">
            Submit
          </Button>
          <Button variant="warning" className="m-2" type="reset">
            Reset
          </Button>
        </div>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Label label="Check me out">
            If You Have Account click create{" "}
          </Form.Label>{" "}
          <Link to="/signin"> Sign In</Link>
        </Form.Group>
      </Form>
      <ToastContainer />
    </div>
              </>
  );
}

export default Register;
