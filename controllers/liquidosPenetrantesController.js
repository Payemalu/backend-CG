const LiquidosPenetrantes = require('../models/LiquidosPenetrantes');

exports.crearLiquidoPenetrante = async (req, res) => {
    try {
        let liquidoPenetrante;

        // Create the Liquidos Penetrantes
        liquidoPenetrante = new LiquidosPenetrantes(req.body);

        await liquidoPenetrante.save();
        res.send(liquidoPenetrante);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

// exports.obtenerDuctos = async (req, res) => {
//     try {
//         const ductos = await Ducto.find();
//         res.json(ductos);
//         console.log('Ductos', ductos);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// };

// exports.actualizarDucto = async (req, res) => {
//     try {
//         const {
//             FID,
//             clave,
//             SIST,
//             CVE_DUC,
//             DUCTO,
//             CVE_TRM,
//             TRAMO,
//             CVE_SEG,
//             SEGMENTO,
//             CVE_AU,
//             AREA_UNI,
//             LONG,
//             KM_INI,
//             KM_DEST,
//             DN,
//             ESP,
//             E_MATERIAL,
//             PRESION,
//             TEMP,
//             FECHA_CONS
//         } = req.body;
//         let ducto = await Ducto.findById(req.params.id);

//         if (!ducto) {
//         res.status(404).json({ msg: "No existe el ducto" });
//         }

//         ducto.FID = FID;
//         ducto.CVE = CVE;
//         ducto.SIST = SIST;
//         ducto.CVE_DUC = CVE_DUC;
//         ducto.DUCTO = DUCTO;
//         ducto.CVE_TRM = CVE_TRM;
//         ducto.TRAMO = TRAMO;
//         ducto.CVE_SEG = CVE_SEG;
//         ducto.SEGMENTO = SEGMENTO;
//         ducto.CVE_AU = CVE_AU;
//         ducto.AREA_UNI = AREA_UNI;
//         ducto.LONG = LONG;
//         ducto.KM_INI = KM_INI;
//         ducto.KM_DEST = KM_DEST;
//         ducto.DN = DN;
//         ducto.ESP = ESP;
//         ducto.E_MATERIAL = E_MATERIAL;
//         ducto.PRESION = PRESION;
//         ducto.TEMP = TEMP;
//         ducto.FECHA_CONS = FECHA_CONS 

//         ducto = await Ducto.findOneAndUpdate(
//             { _id: req.params.id },
//             ducto,
//             { new: true }
//         );
//         res.json(ducto);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// };

// exports.obtenerDucto = async (req, res) => {
//     try {
//         let ducto = await Ducto.findById(req.params.id);

//         if (!ducto) {
//         res.status(404).json({ msg: "No existe el ducto" });
//         }

//         res.json(ducto);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// };

// exports.borrarDucto = async (req, res) => {
//     try {
//         let ducto = await Ducto.findById(req.params.id);

//         if (!ducto) {
//         res.status(404).json({ msg: "No existe el ducto" });
//         }

//         await Ducto.findOneAndRemove({ _id: req.params.id });
//         res.json({ msg: "Ducto eliminado correctamente" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// };
