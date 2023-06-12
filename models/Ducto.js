const mongoose = require('mongoose');

// const DuctoSchema = mongoose.Schema({
//     DUCTO: {
//         type: String,
//         required: true
//     },
//     CVE_AU: {
//         type: String,
//         required: true
//     },
//     AREA_UNI: {
//         type: String,
//         required: true
//     },
//     FECHA_CREACION: {
//         type: Date,
//         default: Date.now()
//     }
// });

// let myDecimal = Decimal(Double(0.0));

const DuctoSchema = mongoose.Schema({
    FID: {
        type: Number,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    SIST: {
        type: String,
        required: true
    },
    CVE_DUC: {
        type: String,
        required: true
    },
    DUCTO: {
        type: String,
        required: true
    },
    CVE_TRM: {
        type: String,
        required: true
    },
    TRAMO: {
        type: String,
        required: true
    },
    CVE_SEG: {
        type: Number,
        required: true
    },
    SEGMENTO: {
        type: String,
        required: true
    },
    CVE_AU: {
        type: String,
        required: true
    },
    AREA_UNI: {
        type: String,
        required: true
    },
    LONG: {
        type: Number,
        required: true
    },
    KM_INI: {
        type: String,
        required: true
    },
    KM_DEST: {
        type: String,
        required: true
    },
    DN: {
        type: Number,
        required: true
    },
    ESP: {
        type: Number,
        required: true
    },
    E_MATERIAL: {
        type: String,
        required: true
    },
    PRESION: {
        type: Number,
        required: true
    },
    TEMP: {
        type: Number,
        required: true
    },
    FECHA_CONS: {
        type: String,
        required: true
    },
    FECHA_CREACION: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Ducto', DuctoSchema);