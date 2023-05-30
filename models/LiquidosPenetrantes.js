const mongoose = require('mongoose');

const LiquidosPenetrantesSchema = mongoose.Schema({
    fechaInicio: {
        type: String,
        required: true
    },
    fechaFinal: {
        type: String,
        required: true
    },
    numeroReporte: {
        type: String,
        required: true
    },
    sistema: {
        type: String,
        required: true
    },
    presionOperacion: {
        type: String,
        required: true
    },
    temperaturaOperacion: {
        type: String,
        required: true
    },
    areaUnitaria: {
        type: String,
        required: true
    },
    kilometroInicial: {
        type: String,
        required: true
    },
    kilometroDestino: {
        type: String,
        required: true
    },
    // descripcionObra: {
    //     type: String,
    //     required: true
    // },
    // nombreLineaTramo: {
    //     type: String,
    //     required: true
    // },
    // localizacionCoordenadas: {
    //     type: Number,
    //     required: true
    // },
    // localizacionKilometraje: {
    //     type: String,
    //     required: true
    // },
    // desActividadesInspeccion: {
    //     type: String,
    //     required: true
    // },

    // diametro: {
    //     type: Number,
    //     required: true
    // },
    // espesorNominal: {
    //     type: Number,
    //     required: true
    // },
    // especificacion: {
    //     type: String,
    //     required: true
    // },
    // zonaInspeccionada: {
    //     type: String,
    //     required: true
    // },
    // tipoMaterial: {
    //     type: String,
    //     required: true
    // },
    // dimensiones: {
    //     type: String,
    //     required: true
    // },
    // descripcionPieza: {
    //     type: String,
    //     required: true
    // },

    // temperaturaPrueba: {
    //     type: Number,
    //     required: true
    // },
    // acabadoSuperficial: {
    //     type: String,
    //     required: true
    // },
    // iluminacion: {
    //     type: String,
    //     required: true
    // },
    // materialAbsorbente: {
    //     type: String,
    //     required: true
    // },
    // codigoAplicable: {
    //     type: String,
    //     required: true
    // },
    // parte: {
    //     type: Number,
    //     required: true
    // },
    // seccion: {
    //     type: String,
    //     required: true
    // },
    // procedimiento: {
    //     type: String,
    //     required: true
    // },
    // tecnicaMetodo: {
    //     type: String,
    //     required: true
    // },
    // aplicacion: {
    //     type: String,
    //     required: true
    // },
    // visible: {
    //     type: Boolean,
    //     required: true
    // },
    // fluorescente: {
    //     type: Boolean,
    //     required: true
    // },
    // tiempoPenetracion: {
    //     type: String,
    //     required: true
    // },
    // marcaPenetrante: {
    //     type: String,
    //     required: true
    // },
    // numLotePenetrante: {
    //     type: String,
    //     required: true
    // },
    // tiempoSecado: {
    //     type: String,
    //     required: true
    // },
    // marcaRemovedor: {
    //     type: String,
    //     required: true
    // },
    // numLoteRemovedor: {
    //     type: String,
    //     required: true
    // },
    // tiempoRevelado: {
    //     type: String,
    //     required: true
    // },
    // marcaRevelador: {
    //     type: String,
    //     required: true
    // },
    // numLoteMarca: {
    //     type: String,
    //     required: true
    // },
    // tipoGrupoPenetracion: {
    //     type: String,
    //     required: true
    // },
    // tipoPenetrante: {
    //     type: String,
    //     required: true
    // },
    // tipoRevelador: {
    //     type: String,
    //     required: true
    // },
    // referencia: {
    //     type: String,
    //     required: true
    // },
    // elemento: {
    //     type: String,
    //     required: true
    // },
    // descripcion: {
    //     type: String,
    //     required: true
    // },
    // identificacion: {
    //     type: String,
    //     required: true
    // },

    // tbl_identificacion: {
    //     type: String,
    // },
    // tbl_elemento_a: {
    //     type: String,
    // },
    // tbl_elemento_b: {
    //     type: String,
    // },
    // tbl_evaluacion: {
    //     type: Number,
    // },
    // tbl_evaluacion_longitud: {
    //     type: Number,
    // },
    // tbl_tipo_defecto: {
    //     type: String,
    // },
    // tbl_dimension_defecto: {
    //     type: String,
    // },
    // tbl_observaciones: {
    //     type: String,
    // },
    // tbl_resultado_dictamen: {
    //     type: Boolean,
    // },

    // resultado: {
    //     type: Number,
    //     required: true
    // },
    // observaciones: {
    //     type: String,
    //     required: true
    // },
    // fechaCreacionLP: {
    //     type: Date,
    //     default: Date.now()
    // }
});

module.exports = mongoose.model('LiquidosPenetrantes', LiquidosPenetrantesSchema);