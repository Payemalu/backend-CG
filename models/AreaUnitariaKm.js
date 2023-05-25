const mongoose = require('mongoose');

const AreaUnitariaKmSchema = mongoose.Schema({
    tramo: {
        type: Number,
        required: true
    },
    nombre_tramo: {
        type: String,
        required: true
    },
    cve_au: {
        type: Number,
        required: true
    },
    km_inicial: {
        type: String,
        required: true
    },
    km_final: {
        type: String,
        required: true
    },
    km_inicial_ddv: {
        type: String,
        required: true
    },
    km_final_ddv: {
        type: String,
        required: true
    },
    cve: {
        type: String,
        required: true
    },
    area_unitaria: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('AreaUnitariaKm', AreaUnitariaKmSchema);