const Student = require('../models/student');

// Get-All-Students
const getAllStudent = async (req, res) => {
    try {
        const allStudents = await Student.find().populate('schoolClass');
        res.status(200).json({
            status: 200,
            message: 'success',
            data: allStudents
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `unexpected Error ${error}`
        })
    }
}

// Create-Student
const createStudent = async (req, res) => {
    try {
        const newStudents = await new Student(req.body).save();
        res.status(200).json({
            status: 200,
            message: 'success',
            data: newStudents
        });
    } catch (error) {
        console.log("ERROR",error);
        res.status(500).json({
            status: 500,
            message: `unexpected Error ${error}`
        })
    }
}

// Update-Student
const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const updateStudent = await Student.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json({
            status: 200,
            message: 'success',
            data: updateStudent
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `unexpected Error ${error}`
        })
    }
}

// Delete-Student
const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStudent = await Student.findByIdAndDelete({ _id: id }, { new: true });
        res.status(200).json({
            status: 200,
            message: 'success',
            data: deletedStudent
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `unexpected Error ${error}`
        })
    }
}


module.exports = { getAllStudent, createStudent, updateStudent, deleteStudent };