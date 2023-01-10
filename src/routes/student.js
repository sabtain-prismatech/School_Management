const express = require('express');

const router = express.Router();

// controller-import 
const { getAllStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/student');

// get-all-students
router.post('/', getAllStudent);

// create-Student
router.post('/add', createStudent);

// update-Student
router.post('/update/:id', updateStudent);

// delete-Student-by-id
router.post('/delete/:id', deleteStudent);


module.exports = router;