const vehiculoService = require('../services/vehiculoService');

exports.registrarVehiculo = async (req, res) => {
    const {make, model, year, color, licensePlate, price } = req.body;
    try {
        const response = await vehiculoService.registrarVehiculo(make, model, year, color, licensePlate, price);
        res.json(response);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.listVehicles = async (req, res) => {
    try {
        const response = await vehiculoService.listVehicles();
        res.json(response);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.deleteVehicles = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await vehiculoService.deleteVehicles(id);
        res.json(response);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getVehicle = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await vehiculoService.getVehicle(id);
        res.json(response);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
