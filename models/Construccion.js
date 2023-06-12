const mongoose = require('mongoose');

const ConstruccionSchema = mongoose.Schema({
    /* Identificacion *******/
    /* obligatorios *********/
    numerador: {
        type: Number,
        required: true,
        default: 1
    },
    clave: {
        type: String,
        required: true,
        default: ''
    },
    area_unitaria: {
        type: String,
        default: ''
    },
    nombre_tramo: {
        type: String,
        default: '',
    },
    tramo: {
        type: Number,
        required: true,
        default: '',
    },
    km_inicial_ddv: {
        type: String,
        required: true,
        default: ''
    },
    km_destino_ddv: {
        type: String,
        required: true,
        default: ''
    },

    /* Identificacion *******/
    /* No obligatorios ******/
    origen_coordenadas: {
        type: String,
        default: '',
    },
    destino_coordenadas: {
        type: String,
        default: '',
    },

    /* Construccion *********/
    /* No obligatorios ******/
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
        default: 'Formulario Construccion'
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Construccion', ConstruccionSchema);
