const mongoose = require('mongoose');
// validator
var validator = require('validator');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email must be required."],
        validate: [validator.isEmail, "Invalid Email"]
    },
    password: {
        type: String,
        required: [true, "Password must be required."]
    }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;