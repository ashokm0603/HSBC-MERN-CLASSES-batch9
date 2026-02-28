import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
const DeleteProduct = () => {
  const [productDetails, setProductDetails] = useState([]);

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

  const deleteProductDetails = async (id) => {
    try {
      const response = await axios.delete(
        `https://alpha-ecommerce-mart.onrender.com/api/deleteproduct/${id}`,
      );

      toast.success("Deleted successfully");
      //   alert("Deleted successfully");
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
      toast.error("failed to Deleted");
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
           {productDetails.length>0?( productDetails.map((product, ind) => (
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
                <td className="border border-success text-center">
                  <div
                    className="btn btn-danger"
                    onClick={() => deleteProductDetails(product._id)}
                  >
                    Delete Product
                  </div>
                </td>
              </tr>
            ))):( <tr>
                <td colSpan={6} className="text-center border border-success">Products Not Found</td>
            </tr> )}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </>
  );
};

export default DeleteProduct;
