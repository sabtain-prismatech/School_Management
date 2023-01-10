const express = require('express');
const mongoose = require('mongoose');
const colors = require('./src/loader/colors');

const app = express();

// config
const config = require('./src/config/config');

// Loaders
require('./src/loader/cors')(app);
require('./src/loader/routers')(app);

// Initial-Roure
app.get('/', (req, res) => {
    res.send("Initial route Running");
})

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