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