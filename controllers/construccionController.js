const Construccion = require('../models/Construccion');

exports.crearConstruccion = async (req, res) => {
    try {
        let construccion;

        // Create the construction
        construccion = new Construccion(req.body);

        await construccion.save();
        res.send(construccion);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.obtenerConstrucciones = async (req, res) => {
    try {
        const construcciones = await Construccion.find();
        res.json(construcciones);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.actualizarConstruccion = async (req, res) => {
    try {
        const {
            clave,
            area_unitaria,
            nombre_tramo,
            tramo,
            km_inicial_ddv,
            km_destino_ddv,
            
            origen_coordenadas,
            destino_coordenadas,

            fecha_construccion,
            metodo_recubrimiento,
            tipo_suelo,
            material_relleno,
            proteccion_catodica,
            tipo_recubrimiento
        } = req.body;
        let construccion = await Construccion.findById(req.params.id);

        if (!construccion) {
        res.status(404).json({ msg: "No existe la construcción" });
        }

        construccion.clave = clave;
        construccion.area_unitaria = area_unitaria;
        construccion.nombre_tramo = nombre_tramo;
        construccion.tramo = tramo;
        construccion.km_inicial_ddv = km_inicial_ddv;
        construccion.km_destino_ddv = km_destino_ddv;
        
        construccion.origen_coordenadas = origen_coordenadas;
        construccion.destino_coordenadas = destino_coordenadas;

        construccion.fecha_construccion = fecha_construccion;
        construccion.metodo_recubrimiento = metodo_recubrimiento;
        construccion.tipo_suelo = tipo_suelo;
        construccion.material_relleno = material_relleno;
        construccion.proteccion_catodica = proteccion_catodica;
        construccion.tipo_recubrimiento = tipo_recubrimiento;

        construccion = await Construccion.findOneAndUpdate(
            { _id: req.params.id },
            construccion,
            { new: true }
        );
        res.json(construccion);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.obtenerConstruccion = async (req, res) => {
    try {
        let construccion = await Construccion.findById(req.params.id);

        if (!construccion) {
        res.status(404).json({ msg: "No existe la construcción" });
        }

        res.json(construccion);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

exports.borrarConstruccion = async (req, res) => {
    try {
        let construccion = await Construccion.findById(req.params.id);

        if (!construccion) {
        res.status(404).json({ msg: "No existe la construcción" });
        }

        await Construccion.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "Construccion eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};
