const mongoose = require('mongoose');

const AreaUnitariaKmSchema = mongoose.Schema({
    area_unitaria: {
        type: String,
    },
    clave: {
        type: String,
    },
    kilometro_destino: {
        type: String,
    },
    kilometro_inicial: {
        type: String,
    },
    km_destino_ddv: {
        type: String,
    },
    km_inicial_ddv: {
        type: String,
    },
    nombre_tramo: {
        type: String,
    },
    tramo: {
        type: Number,
    },
    // cve_au: {
    //     type: Number,
    // },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('AreaUnitariaKm', AreaUnitariaKmSchema);