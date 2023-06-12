const Diseno = require('../models/Diseno');

exports.crearDiseno = async (req, res) => {
    try {
        let diseno;

        // Create the design
        diseno = new Diseno(req.body);

        await diseno.save();
        res.send(diseno);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.obtenerDisenos = async (req, res) => {
    try {
        const disenos = await Diseno.find();
        res.json(disenos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.actualizarDiseno = async (req, res) => {
    try {
        const {
            clave,
            area_unitaria,
            km_inicial_ddv,
            km_destino_ddv,
            tramo,
            origen_coordenadas,
            destino_coordenadas,
            fecha_fabricacion,
            resistencia_traccion,
            elemento_maximo_c,
            limite_elastico,
            fecha_construccion,
            metodo_recubrimiento,
            tipo_suelo,
            material_relleno,
            proteccion_catodica,
            tipo_recubrimiento
        } = req.body;
        let diseno = await Diseno.findById(req.params.id);

        if (!diseno) {
        res.status(404).json({ msg: "No existe el diseño" });
        }

        diseno.clave = clave;
        diseno.area_unitaria = area_unitaria;
        diseno.tramo = tramo;
        diseno.km_inicial_ddv = km_inicial_ddv;
        diseno.km_destino_ddv = km_destino_ddv;
        diseno.origen_coordenadas = origen_coordenadas;
        diseno.destino_coordenadas = destino_coordenadas;
        diseno.longitud = longitud;
        diseno.diametro_mm = diametro_mm;
        diseno.diametro_inch = diametro_inch;
        diseno.espesor_pared_mm = espesor_pared_mm;
        diseno.espesor_pared_inch = espesor_pared_inch;
        diseno.especificacion_material = especificacion_material;
        diseno.temperatura_diseno_c = temperatura_diseno_c;
        diseno.temperatura_diseno_f = temperatura_diseno_f;
        diseno.fecha_fabricacion = fecha_fabricacion;
        diseno.resistencia_traccion = resistencia_traccion;
        diseno.elemento_maximo_c = elemento_maximo_c;
        diseno.limite_elastico = limite_elastico;
        diseno.fecha_construccion = fecha_construccion;
        diseno.metodo_recubrimiento = metodo_recubrimiento;
        diseno.tipo_suelo = tipo_suelo;
        diseno.material_relleno = material_relleno;
        diseno.proteccion_catodica = proteccion_catodica;
        diseno.tipo_recubrimiento = tipo_recubrimiento;

        diseno = await Diseno.findOneAndUpdate(
            { _id: req.params.id },
            diseno,
            { new: true }
        );
        res.json(diseno);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.obtenerDiseno = async (req, res) => {
    try {
        let diseno = await Diseno.findById(req.params.id);

        if (!diseno) {
        res.status(404).json({ msg: "No existe el diseño" });
        }

        res.json(diseno);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.borrarDiseno = async (req, res) => {
    try {
        let diseno = await Diseno.findById(req.params.id);

        if (!diseno) {
        res.status(404).json({ msg: "No existe el diseño" });
        }

        await Diseno.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "Diseno eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};
