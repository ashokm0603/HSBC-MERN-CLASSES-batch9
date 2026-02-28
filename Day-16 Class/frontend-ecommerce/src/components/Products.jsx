/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import ProductCards from "./ProductCards";

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://alpha-ecommerce-mart.onrender.com/api/fetchproducts",
      );

      console.log(response.data.productDocument);
      setProductDetails(response.data.productDocument);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  return (
    <div>
      <AdminNav />
      <main>
        <h1>Logic to display products</h1>
        <ProductCards productDetails={productDetails}/>
      </main>
    </div>
  );
};

export default Products;
