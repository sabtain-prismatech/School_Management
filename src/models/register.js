const mongoose = require("mongoose");
// validator
var validator = require("validator");
const bcrypt = require("Bcrypt");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be required."],
    validate: [validator.isEmail, "Invalid Email"],
  },
  password: {
    type: String,
    required: [true, "Password must be required."],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm password must be required"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// mongoose-middlewares

//Methods-middleware
registerSchema.methods.createToken = async function () {
  try {
    console.log(this._id);
    const token = jwt.sign(
      { _id: this._id },
      "thisismysceratkeyforgenearate:jwt_token"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

// this middleware work before saving the data into DB.
registerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = this.password;
  }
  next();
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
