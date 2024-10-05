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

exports.listVehicles = async () => {
   
    const sql = 'SELECT * FROM vehiculos';
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};


exports.deleteVehicles = async (id) => {
    const sql = 'DELETE FROM vehiculos WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve({ success: true, message: 'Vehículo eliminado con éxito' });
        });
    });
};
