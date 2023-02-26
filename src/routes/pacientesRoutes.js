const express = require('express');
const router = express.Router();

const {getPacientes, getPacienteById, createPaciente, updatePaciente, deletePaciente} = require('../controller/pacientesController'); 

//ruta  para ver todos los pacientes
router.route('/').get(getPacientes);

//ruta consultar la información de un paciente
router.route('/:id').get(getPacienteById);

//ruta para crear la infomación de un paciente
router.route('/new').post(createPaciente);

//ruta para actualizar la información de un paciente
router.route('/:id').put(updatePaciente);

//ruta para eliminar la información de un paciente
router.route('/:id').delete(deletePaciente);

module.exports = router;
