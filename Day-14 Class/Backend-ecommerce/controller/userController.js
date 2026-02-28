const Users = require("../model/UserModel");

//add  registered user

const register = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
    };
    await Users.insertOne(newUser);
    res.status(200).json({ message: "User register successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to register user please check server.." });
  }
};

//add login user
const login = async (req, res) => {
  const findUser=Users.find({name:req.body.name, email:req.body.email })
};
