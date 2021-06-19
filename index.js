const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/routes')

const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000, () => console.log('Sever started at port: 3000'));

app.use('/employees', routes);