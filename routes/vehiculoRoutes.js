const express = require('express');
const vehiculoController = require('../controllers/vehiculoController');
const router = express.Router();

router.post('/vehiculos', vehiculoController.registrarVehiculo);

module.exports = router;
