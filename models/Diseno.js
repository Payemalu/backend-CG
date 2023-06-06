const mongoose = require('mongoose');

const DisenoSchema = mongoose.Schema({
    clave: {
        type: String,
        default: '',
    },
    area_unitaria: {
        type: Number,
        default: '',
    },
    tramo: {
        type: String,
        required: true,
        default: '',
    },
    origen_km: {
        type: String,
        required: true,
        default: '',
    },
    destino_km: {
        type: String,
        required: true,
        default: '',
    },
    origen_coordenadas: {
        type: String,
        default: '',
    },
    destino_coordenadas: {
        type: String,
        default: '',
    },
    longitud: {
        type: Number,
        default: 0,
    },
    diametro_mm: {
        type: Number,
        default: 0,
    },
    diametro_inch: {
        type: Number,
        default: 0,
    },
    espesor_pared_mm: {
        type: Number,
        default: 0,
    },
    espesor_pared_inch: {
        type: Number,
        default: 0,
    },
    especificacion_material: {
        type: String,
        default: '',
    },
    temperatura_diseno_c: {
        type: Number,
        default: 0,
    },
    temperatura_diseno_f: {
        type: Number,
        default: 0,
    },
    fecha_fabricacion: {
        type: String,
        default: '',
    },
    resistencia_traccion: {
        type: Number,
        default: 0,
    },
    elemento_maximo_c: {
        type: String,
        default: '',
    },
    limite_elastico: {
        type: Number,
        default: 0,
    },
    fecha_construccion: {
        type: String,
        default: '',
    },
    metodo_recubrimiento: {
        type: String,
        default: '',
    },
    tipo_suelo: {
        type: String,
        default: '',
    },
    material_relleno: {
        type: String,
        default: '',
    },
    proteccion_catodica: {
        type: String,
        default: '',
    },
    tipo_recubrimiento: {
        type: String,
        default: '',
    },
    nombre_forma: {
        type: String,
        default: 'Formulario Diseño'
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Diseno', DisenoSchema);