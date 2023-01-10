const express = require('express');

const router = express.Router();

// controller
const { getAllClasses, createClass, updateClass, deleteClass } = require('../controllers/class');


// get-all-classes
router.post('/', getAllClasses);

// create-new-class
router.post('/add', createClass);

// update-class-by-id
router.post('/update/:id', updateClass);

// delete-class-by-id
router.post('/delete/:id', deleteClass);


module.exports = router;