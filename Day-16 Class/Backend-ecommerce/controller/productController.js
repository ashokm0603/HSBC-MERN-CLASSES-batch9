const Products = require("../model/ProductsModel");

// add product details
const addProduct = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageSrc: req.body.imageSrc,
      categories: req.body.categories,
      ratings: req.body.ratings,
    };

    await Products.insertOne(newProduct);

    res
      .status(200)
      .json({ message: "Inserted Successfully", insertedProduct: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to add Product." });
  }
};

// retrieve All Products

const fetchProducts = async (req, res) => {
  try {
    const productDocument = await Products.find();
    if (productDocument == null) {
      res.status(404).json({ message: "Products are not found" });
    }
    res.status(200).json({ productDocument });
  } catch (error) {
    res.status(200).json({ message: "failed to fetch product details" });
  }
};

// delete product details
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Products.deleteOne({ _id: req.params.id });

    if (deletedProduct == null) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "deleted Successfully", deleteProduct });
  } catch (error) {
    res.status(500).json({ message: "failed delete product details" });
  }
};

// get product based on ID
const getProduct = async (req, res) => {
  try {
    const productDetails = await Products.findById(req.params.id);

    if (productDetails == null) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ productDetails });
  } catch (error) {
    res.status(500).json({ message: "failed get  product details" });
  }
};

// update product Details

const updateProductDetails = async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageSrc: req.body.imageSrc,
        categories: req.body.categories,
        ratings: req.body.ratings,
      },
      { new: true },
    );

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found please check ID" });
    }
    res.status(200).json({ message: "Updated Successfully", updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "failed Update " });
  }
};

module.exports = {
  addProduct,
  getProduct,
  fetchProducts,
  deleteProduct,
  updateProductDetails,
};
