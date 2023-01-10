const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    name: {
        type: Number,
        require: true
    },
    roomNumber: {
        type: String,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    }
}, { timestamps: true });

const SchoolClass = mongoose.model("SchoolClass", classSchema);

module.exports = SchoolClass;