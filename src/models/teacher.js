const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cnic: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    class: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "SchoolClass",
        require: true
    },
    subject: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Subject",
        require: true
    }
}, { timestamps: true });


const Teacher = mongoose.model("Teachers", teacherSchema);

module.exports = Teacher;