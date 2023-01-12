const express = require('express');

const router = express.Router();

// controllers
const { getAllTeachers, addTeacher, updateTeacherById, deleteTeacher } = require('../controllers/teacher');
// Middlewares
const { middleAddTeacher } = require('../middleware/teacher');

// get-All-Teachers
router.post('/list', getAllTeachers);

// Add-Teacher
router.post('/add', middleAddTeacher, addTeacher);

// update-teacher-by-id
router.post('/update/:id', updateTeacherById);

// Delete-Teacher-By-Id
router.post('/delete/:id', deleteTeacher);


module.exports = router;