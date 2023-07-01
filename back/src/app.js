<<<<<<< HEAD
const router = require('./routes/index.js');
const cors = require('cors');
const express = require('express');
const app = express();

const corsOptions = {
  origin: '*',
=======
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");

// Configuración con problema de CORS
const corsOptions = {
  origin: "*",
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
  credentials: true, // access-control-allow-credentials: true
  optionSuccessStatus: 200,
};

<<<<<<< HEAD
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

module.exports = app;
=======
app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/", router);

module.exports = app;
>>>>>>> 0f3850301f2b96b45d73babcd65f1119cf56a3b0
