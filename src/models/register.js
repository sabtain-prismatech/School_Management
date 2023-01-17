const mongoose = require('mongoose');
// validator
var validator = require('validator');
const bcrypt = require('Bcrypt');

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email must be required."],
        validate: [validator.isEmail, "Invalid Email"]
    },
    password: {
        type: String,
        required: [true, "Password must be required."]
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirm password must be required"],
    }
});

// mongoose-middlewares
// this middleware work before saving the data into DB.
registerSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmPassword = undefined;
    }
    next();
});

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;