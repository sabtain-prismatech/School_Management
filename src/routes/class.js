const express = require('express');

const router = express.Router();

// controller
const { getAllClasses, createClass, updateClass, deleteClass, getStudentByClassId } = require('../controllers/class');


// get-all-classes
router.post('/', getAllClasses);

// create-new-class
router.post('/add', createClass);

// update-class-by-id
router.post('/update/:id', updateClass);

// delete-class-by-id
router.post('/delete/:id', deleteClass);

// get-student-by-class-id
router.post('/student/:id', getStudentByClassId);

module.exports = router;