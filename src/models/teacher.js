const mongoose = require('mongoose');
// validator
var validator = require('validator');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be required."]
    },
    phone: {
        type: String,
        required: [true, "Phone must be required."],
        validate: [validator.isMobilePhone, "Invalid Phone Number"]
    },
    email: {
        type: String,
        required: [true, "Email must be required."],
        validate: [validator.isEmail, "Invalid Email"]
    },
    cnic: {
        type: String,
        required: [true, "CNIC must be required."],
    },
    address: {
        type: String,
        required: [true, "Address must be required."],
    },
    age: {
        type: Number,
        required: [true, "Age must be required."],
    },
    class: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "SchoolClass",
    },
    subject: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Subject",
        validate(value) {
            if (value.length === 0) {
                throw new Error("Must be 1 Subject select.")
            }
        }
    }
}, { timestamps: true });


const Teacher = mongoose.model("Teachers", teacherSchema);

module.exports = Teacher;