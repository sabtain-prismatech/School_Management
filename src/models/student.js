const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rollNo: {
        type: String,
        require: true,
        unique: true
    },
    registration: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
    },
    schoolClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SchoolClass',
        require: true
    },
    subjects: {
        type: [String],
        require: true
    },
    address: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;