const Subject = require('../models/subject');
// status-helper
const responseStatus = require('../helpers/status');

// add-subject
const addSubject = async (req, res) => {
    try {
        const newSubject = await new Subject(req.body).save();
        res.status(201).json(
            responseStatus(true, 'created', "Subject", newSubject)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}

// get-subject
const getSubjects = async (req, res) => {
    try {
        const allSubjects = await Subject.find().populate('class');
        res.status(200).json(
            responseStatus(true, 'ok', "Success", allSubjects)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}

// update-subject-by-id
const updateSubjectById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSubject = await Subject.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(
            responseStatus(true, 'ok', "Success", updatedSubject)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }

}

// delete-subject-by-id
const deleteSubjectById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteSubject = await Subject.findByIdAndDelete({ _id: id }, { new: true });
        res.status(200).json(
            responseStatus(true, 'ok', "Success", deleteSubject)
        )
    } catch (error) {
        res.status(404).json(
            responseStatus(false, 'not-found', `unexpected Error ${error}`)
        )
    }
}

module.exports = { addSubject, getSubjects, updateSubjectById, deleteSubjectById };