const mongoose = require('mongoose');

const DisenoSchema = mongoose.Schema({
    nombre_propio: {
        type: String,
        required: true
    },
    origen_km: {
        type: String,
        required: true
    },
    destino_km: {
        type: String,
        required: true
    },
    origen_coordenadas: {
        type: String,
        required: true
    },
    destino_coordenadas: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    diametro_mm: {
        type: Number,
        required: true
    },
    diametro_inch: {
        type: Number,
        required: true
    },
    espesor_pared_mm: {
        type: Number,
        required: true
    },
    espesor_pared_inch: {
        type: Number,
        required: true
    },
    especificacion_material: {
        type: String,
        required: true
    },
    temperatura_diseno_c: {
        type: Number,
        required: true
    },
    temperatura_diseno_f: {
        type: Number,
        required: true
    },
    fecha_fabricacion: {
        type: String,
        required: true
    },
    resistencia_traccion: {
        type: String,
        required: true
    },
    elemento_maximo_c: {
        type: String,
        required: true
    },
    limite_elastico: {
        type: String,
        required: true
    },
    fecha_construccion: {
        type: String,
        required: true
    },
    metodo_recubrimiento: {
        type: String,
        required: true
    },
    tipo_suelo: {
        type: String,
        required: true
    },
    material_relleno: {
        type: String,
        required: true
    },
    proteccion_catodica: {
        type: String,
        required: true
    },
    tipo_recubrimiento: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Diseno', DisenoSchema);