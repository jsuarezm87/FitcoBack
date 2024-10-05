const express = require('express');
const vehiculoController = require('../controllers/vehiculoController');
const router = express.Router();

router.post('/vehiculos', vehiculoController.registrarVehiculo);
router.get('/listVehicles', vehiculoController.listVehicles);
router.get('/getVehicle/:id', vehiculoController.getVehicle);
router.delete('/deleteVehicles/:id', vehiculoController.deleteVehicles);

module.exports = router;
