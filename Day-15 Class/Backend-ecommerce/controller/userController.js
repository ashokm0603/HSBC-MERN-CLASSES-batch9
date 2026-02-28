const Users = require("../model/UserModel");
const bcrypt = require("bcrypt");

//add  registered user
const register = async (req, res) => {
  try {
    const { name, phone, email, password, address, city, state, zipcode } =
      req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name: name,
      phone: phone,
      email: email,
      password: encryptedPassword,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
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
  try {
    const { email, password } = req.body;
    const findUser = await Users.findOne({ email: req.body.email });

    const comparedPassword = bcrypt.compare(password, findUser.password);

    if (findUser.email == email && comparedPassword) {
      res.status(200).json({ message: "Login Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "email or password is wrong" });
  }
};

module.exports = { register, login };
