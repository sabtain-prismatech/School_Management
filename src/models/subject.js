const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    discription: {
        type: String,
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SchoolClass",
        require: true
    },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
