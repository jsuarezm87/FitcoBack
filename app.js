require('dotenv').config({path:'./.env'});
const express = require('express');
const cors = require('cors');
const vehiculoRoutes = require('./routes/vehiculoRoutes');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', vehiculoRoutes);

// Servidor corriendo
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
