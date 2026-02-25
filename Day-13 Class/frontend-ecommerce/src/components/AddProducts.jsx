import React, { useState } from "react";
import AdminNav from "./AdminNav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddProducts = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    imageSrc: "",
    categories: "",
    ratings: "",
  });

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log(productDetails);
  };

  return (
    <div>
      <AdminNav />
      <div className="form-container">
        <Form onSubmit={handleProductSubmit}>
          <h1>Add Product Details</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label htmlFor="name">Product Name</Form.Label>
              <Form.Control
                id="name"
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter Product Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
                name="price"
                id="price"
                onChange={handleChange}
                type="text"
                placeholder="Enter product price"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="description"
              onChange={handleChange}
              placeholder="1234 Main St"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Image Src</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="url"
              placeholder="https://"
            />
          </Form.Group>

          <Row className="mb-3 my-2">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Categories</Form.Label>
              <Form.Select
                name="categories"
                onChange={handleChange}
                defaultValue="Choose..."
              >
                <option> Choose Categories</option>
                <option>Electronic Items</option>
                <option>Cloths</option>
                <option>Footwears</option>
                <option>Footwears</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ratings</Form.Label>
              <Form.Control
                name="ratings"
                onChange={handleChange}
                placeholder="Enter ratings 1/10"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div id="button-container">
            <Button variant="primary" type="submit">
              Add Product
            </Button>
            <Button variant="warning" type="reset">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProducts;
