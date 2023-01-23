const Register = require("../models/register");
// status-helper
const responseStatus = require("../helpers/status");

// user-login
const userRegister = async (req, res) => {
  try {
    const newUser = new Register(req.body);
    const tokenData = await newUser.createToken();
    console.log("tokenData", tokenData);
    const finalData = await newUser.save();
    res.status(201).json(responseStatus(true, "created", "User", finalData));
  } catch (error) {
    res.status(404).json(responseStatus(false, "not-found", `${error}`));
  }
};

module.exports = { userRegister };
