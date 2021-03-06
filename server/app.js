const express = require('express');
const router = require('./router');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')))
app.use(cors());
app.use('/api', router);

module.exports = app;
