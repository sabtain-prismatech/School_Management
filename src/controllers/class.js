const SchoolClass = require('../models/class');
// status-helper
const responseStatus = require('../helpers/status');
const { default: mongoose } = require('mongoose');


// get-all-classess
const getAllClasses = async (req, res) => {
    try {
        const allClasses = await SchoolClass.find();
        res.status(200).json({
            status: 200,
            message: 'success',
            data: allClasses
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error ${error}`
        })
    }
}

// create-class
const createClass = async (req, res) => {
    try {
        const { name, roomNumber, capacity } = req.body;
        const newClass = await new SchoolClass({
            name, roomNumber, capacity
        }).save();
        res.status(200).json({
            status: 200,
            message: 'success',
            data: newClass
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error ${error}`
        })
    }

}


// update-class-by-id
const updateClass = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, roomNumber, capacity } = req.body;
        const updatedClass = await SchoolClass.findByIdAndUpdate({ _id: id }, { name, roomNumber, capacity }, { new: true });
        res.status(200).json({
            status: 200,
            message: 'success',
            data: updatedClass
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error ${error}`
        })
    }

}


// create-class-by-id
const deleteClass = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteClass = await SchoolClass.findByIdAndDelete({ _id: id }, { new: true });
        res.status(200).json({
            status: 200,
            message: 'success',
            data: deleteClass
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error ${error}`
        })
    }
}


// get-student-by-class-id

const getStudentByClassId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const finalData = await SchoolClass.aggregate([
            {
                $lookup: {
                    from: "students",
                    localField: "_id",
                    foreignField: "schoolClass",
                    as: "students",
                },
            }
        ])
        res.status(200).json({
            status: 200,
            message: 'success',
            data: finalData
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error ${error}`
        })
    }
}


// get-teacher-by-class-id
const getTeacherByClassId = async (req, res) => {
    try {
        const findTeacher = await SchoolClass.aggregate([
            {
                $lookup: {
                    from: "teachers",
                    localField: "_id",
                    foreignField: "class",
                    as: "teachers",
                }
            }
        ])
        res.status(200).json(
            responseStatus(true, 'ok', "Success", findTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}

// get-teacher-by-class-id
const getSingleClassTeacherByClassId = async (req, res) => {
    try {
        const id = req.params.id;
        const findTeacher = await SchoolClass.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(id) } },
            {
                $lookup: {
                    from: "teachers",
                    localField: "_id",
                    foreignField: "class",
                    as: "teachers",
                }
            },
        ])
        res.status(200).json(
            responseStatus(true, 'ok', "Success", findTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}


module.exports = { getAllClasses, createClass, updateClass, deleteClass, getStudentByClassId, getTeacherByClassId, getSingleClassTeacherByClassId };