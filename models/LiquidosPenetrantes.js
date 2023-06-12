const mongoose = require('mongoose');

const LiquidosPenetrantesSchema = mongoose.Schema({
    fecha_inicio: {
        type: String,
        required: true,
        default: ''
    },
    fecha_final: {
        type: String,
        required: true,
        default: ''
    },
    numero_reporte: {
        type: String,
        required: true,
        default: ''
    },
    sistema: {
        type: String,
        required: true,
        default: ''
    },
    presion_operacion: {
        type: String,
        required: true,
        default: ''
    },
    temperatura_operacion: {
        type: String,
        required: true,
        default: ''
    },
    kilometro_inicial: {
        type: String,
        required: true,
        default: ''
    },
    area_unitaria: {
        type: String,
        required: true,
        default: ''
    },
    kilometro_destino: {
        type: String,
        required: true,
        default: ''
    },
    descripcion_obra: {
        type: String,
        default: ''
    },
    nombre_linea_tramo: {
        type: String,
        default: ''
    },
    localizacion_coordenadas: {
        type: Number,
        default: ''
    },
    localizacion_kilometraje: {
        type: String,
        default: ''
    },
    des_actividades_inspeccion: {
        type: String,
        default: ''
    },
    diametro: {
        type: Number,
        default: ''
    },
    espesor_nominal: {
        type: Number,
        default: ''
    },
    especificacion: {
        type: String,
        default: ''
    },
    zona_inspeccionada: {
        type: String,
        default: ''
    },
    tipo_material: {
        type: String,
        default: ''
    },
    dimensiones: {
        type: String,
        default: ''
    },
    descripcion_pieza: {
        type: String,
        default: ''
    },

    temperatura_prueba: {
        type: Number,
        default: ''
    },
    acabado_superficial: {
        type: String,
        default: ''
    },
    iluminacion: {
        type: String,
        default: ''
    },
    material_absorbente: {
        type: String,
        default: ''
    },
    codigo_aplicable: {
        type: String,
        default: ''
    },
    parte: {
        type: Number,
        default: ''
    },
    seccion: {
        type: String,
        default: ''
    },
    procedimiento: {
        type: String,
        default: ''
    },
    tecnica_metodo: {
        type: String,
        default: ''
    },
    aplicacion: {
        type: String,
        default: ''
    },
    visible: {
        type: Boolean,
        default: ''
    },
    fluorescente: {
        type: Boolean,
        default: ''
    },
    tiempo_penetracion: {
        type: String,
        default: ''
    },
    marca_penetrante: {
        type: String,
        default: ''
    },
    num_lote_penetrante: {
        type: String,
        default: ''
    },
    tiempo_secado: {
        type: String,
        default: ''
    },
    marca_removedor: {
        type: String,
        default: ''
    },
    num_lote_removedor: {
        type: String,
        default: ''
    },
    tiempo_revelado: {
        type: String,
        default: ''
    },
    marca_revelador: {
        type: String,
        default: ''
    },
    num_lote_marca: {
        type: String,
        default: ''
    },
    tipo_grupo_penetracion: {
        type: String,
        default: ''
    },
    tipo_penetrante: {
        type: String,
        default: ''
    },
    tipo_revelador: {
        type: String,
        default: ''
    },
    referencia: {
        type: String,
        default: ''
    },
    elemento: {
        type: String,
        default: ''
    },
    descripcion: {
        type: String,
        default: ''
    },
    identificacion: {
        type: String,
        default: ''
    },

    tbl_identificacion: {
        type: String,
    },
    tbl_elemento_a: {
        type: String,
    },
    tbl_elemento_b: {
        type: String,
    },
    tbl_evaluacion: {
        type: Number,
    },
    tbl_evaluacion_longitud: {
        type: Number,
    },
    tbl_tipo_defecto: {
        type: String,
    },
    tbl_dimension_defecto: {
        type: String,
    },
    tbl_observaciones: {
        type: String,
    },
    tbl_resultado_dictamen: {
        type: Boolean,
    },
    resultado: {
        type: Number,
        default: ''
    },
    observaciones: {
        type: String,
        default: ''
    },
    // nombre_forma: {
    //     type: mongoose.Schema.Types.ObjectId, ref: 'AreaUnitariaKm',
    //     default: 'Formulario Líquidos Penetrantes'
    // },
    fecha_creacion_lp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('LiquidosPenetrantes', LiquidosPenetrantesSchema);