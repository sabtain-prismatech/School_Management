// model
const Teacher = require('../models/teacher');
// status-helper
const responseStatus = require('../helpers/status');

// get-all-teachers
const getAllTeachers = async (req, res) => {
    try {
        const allTeacher = await Teacher.find().populate('class subject');
        res.status(200).json(
            responseStatus(true, 'ok', "Success", allTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}


// add-teacher
const addTeacher = async (req, res) => {
    try {
        const newTeacher = await new Teacher(req.body).save();
        const popolateTeacher = await newTeacher.populate('class subject');
        // is trah sa b ham populate kar skta ha
        // const popolateTeacher = await Teacher.populate(newTeacher, {
        //     path: "class subject",
        // });
        res.status(201).json(
            responseStatus(true, 'created', "Teacher", popolateTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `${error}`)
        )
    }
}

// update-teacher-by-id
const updateTeacherById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedTeacher = await Teacher.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(
            responseStatus(true, 'ok', "Success", updatedTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}

// delete-teacher-by-id
const deleteTeacher = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTeacher = await Teacher.findByIdAndDelete({ _id: id }, { new: true });
        res.status(200).json(
            responseStatus(true, 'ok', "Success", deleteTeacher)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}


module.exports = { getAllTeachers, addTeacher, updateTeacherById, deleteTeacher };