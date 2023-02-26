const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

const pacientes = require('./routes/pacientesRoutes')
  app.use('/api/pacientes', pacientes);



module.exports = app;