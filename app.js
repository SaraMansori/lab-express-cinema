require('dotenv/config');

require('./db');

const express = require('express');


const hbs = require('hbs');

const app = express();

require('./config')(app);

const projectName = 'Ironhack Cinema!';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

const index = require('./routes/index');
app.use('/', index);

require('./error-handling')(app);

module.exports = app;
