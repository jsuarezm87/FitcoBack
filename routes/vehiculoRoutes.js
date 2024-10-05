const express = require('express');
const vehiculoController = require('../controllers/vehiculoController');
const router = express.Router();

router.post('/vehiculos', vehiculoController.registrarVehiculo);
router.get('/listVehicles', vehiculoController.listVehicles);

module.exports = router;
