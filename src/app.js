const express = require('express');
const cors = require('cors');

const app = express();

// Config App
app.use(cors());
app.use(express.json());

// Derivo las rutas a /api
app.use('/api', require('./routes/api'));

module.exports = app;