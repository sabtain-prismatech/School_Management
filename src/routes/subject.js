const express = require('express');

const router = express.Router();

// controllers
const { addSubject, getSubjects, updateSubjectById, deleteSubjectById } = require('../controllers/subject');

// add-subject
router.post('/add', addSubject);

// get-all-subject
router.post('/', getSubjects);

// update-Suject-by-Id
router.post('/update/:id', updateSubjectById);

// delete-Subject-by-Id
router.post('/delete/:id', deleteSubjectById);


module.exports = router;