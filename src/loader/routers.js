const express = require('express');
const bodyParser = require('body-parser');

// Routes
const studentRoute = require('../routes/student');
const classRoute = require('../routes/class');
const subjectRoute = require('../routes/subject');
const teacherRoute = require('../routes/teacher');
const loginRoute = require('../routes/login');
const registerRoute = require('../routes/register');

module.exports = (app) => {
    // bodyParser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.json());
    // Routes
    app.use('/student', studentRoute);
    app.use('/class', classRoute);
    app.use('/subject', subjectRoute);
    app.use('/teacher', teacherRoute);
    app.use('/login', loginRoute);
    app.use('/register', registerRoute);
};