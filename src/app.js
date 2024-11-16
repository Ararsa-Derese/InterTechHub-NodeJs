// src/app.js
const express = require('express');
const config = require('./config/config');
const nameRoutes = require('./routes/nameRoutes');
const hobbyRoutes = require('./routes/hobbyRoutes');
const dreamRoutes = require('./routes/dreamRoutes');

const app = express();

// Use the routes
app.use(nameRoutes);
app.use(hobbyRoutes);
app.use(dreamRoutes);

module.exports = app;
