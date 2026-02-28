import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { toast, ToastContainer } from "react-toastify";
const UpdateProducts = () => {
  const [productDetails, setProductDetails] = useState([]);

  const [product, setProduct] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://alpha-ecommerce-mart.onrender.com/api/fetchproducts",
      );

      setProductDetails(response.data.productDocument);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const getProduct = async (id) => {
    try {
      const response = await axios.get(
        `https://alpha-ecommerce-mart.onrender.com/api/getproduct/${id}`,
      );
      setProduct(response.data.productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProductDetails = async (id) => {
    try {
      const response = await axios.put(
        `https://alpha-ecommerce-mart.onrender.com/api/updateproduct/${id}`,
        product,
      );

      toast.success("updated successfully");
      alert("update successfully")
      console.log(response);
      setTimeout(() => {
        fetchData();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("failed to update");
    }
  };

  return (
    <>
      <AdminNav />
      <h1 className="text-center m-5">Update products </h1>
      <div className="p-5 update-main">
        <table className="table">
          <thead>
            <tr>
              <th className="bg-success-subtle border border-success text-center">
                Name{" "}
              </th>
              <th className="bg-success-subtle border border-success text-center">
                Cost
              </th>
              <th className="bg-success-subtle border border-success text-center">
                description
              </th>
              <th className="bg-success-subtle border border-success text-center">
                categories
              </th>
              <th className="bg-success-subtle border border-success text-center">
                Image
              </th>
              <th className="bg-success-subtle border border-success text-center">
                Actions{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((product, ind) => (
              <tr key={ind}>
                <td className="border border-success">{product.name}</td>
                <td className="border border-success">{product.price}</td>
                <td className="border border-success">{product.description}</td>
                <td className="border border-success">{product.categories}</td>
                <td className="border border-success">
                  <img
                    src={product.imageSrc}
                    style={{ height: "90px", width: "90px" }}
                    alt=""
                  />
                </td>
                <td className="border border-success">
                  <div
                    className="btn btn-warning"
                    onClick={() => getProduct(product._id)}
                  >
                    Edit Details
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="updateForm-container">
          <Form>
            <h1>Add Product Details</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label htmlFor="name">Product Name</Form.Label>
                <Form.Control
                  name="name"
                  value={product.name}
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
                  value={product.price}
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
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="1234 Main St"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Image Src</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="url"
                name="imageSrc"
                value={product.imageSrc}
                placeholder="https://"
              />
            </Form.Group>

            <Row className="mb-3 my-2">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Categories</Form.Label>
                <Form.Select
                  name="categories"
                  value={product.categories}
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
                  value={product.ratings}
                  onChange={handleChange}
                  placeholder="Enter ratings 1/10"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <div id="button-container">
              <Button
                variant="warning"
                type="submit"
                onClick={() => updateProductDetails(product._id)}
              >
                Update Product
              </Button>
              <Button variant="danger" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateProducts;
