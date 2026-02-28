const {
  addProduct,
  getProduct,
  fetchProducts,
  deleteProduct,
  updateProductDetails,
} = require("../controller/productController");

const express = require("express");
const router = express.Router();

router.post("/add-product", addProduct);
router.get("/getproduct/:id", getProduct);
router.get("/fetchproducts", fetchProducts);
router.delete("/deleteproduct/:id", deleteProduct);
router.put("/updateproduct/:id",updateProductDetails)


module.exports = router;
