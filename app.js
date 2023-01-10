const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const colors = require('./src/loader/colors');

const app = express();

// config
const config = require('./src/config/config');

// cors
require('./src/loader/cors');

// Routes
const studentRoute = require('./src/routes/student');
const classRoute = require('./src/routes/class');
const subjectRoute = require('./src/routes/subject');

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




// Initial-Roure
app.get('/', (req, res) => {
    res.send("Initial route Running");
})

// Routes
app.use('/student', studentRoute);
app.use('/class', classRoute);
app.use('/subject', subjectRoute);

// MongoDB-Connection
mongoose.set("strictQuery", false);
mongoose.connect(config.db)
    .then(() => console.log(colors.fg.white, 'Connected!', config.db, colors.reset));

// Listing
app.listen(config.port, () => {
    console.log(colors.fg.yellow, `
    ###########################
    listening on port ${config.port} 🛡️
    ###########################`, colors.reset)
})