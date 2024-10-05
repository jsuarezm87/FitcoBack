const db = require('../utils/db');

exports.registrarVehiculo = async (make, model, year, color, licensePlate, price) => {
    const sql = 'INSERT INTO vehiculos (make, model, year, color, licensePlate, price) VALUES (?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        db.query(sql, [make, model, year, color, licensePlate, price], (err, result) => {
            if (err) return reject(err);
            resolve({ success: true, message: 'Vehículo registrado con éxito' });
        });
    });
};