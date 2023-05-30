const AreaUnitariaKm = require('../models/AreaUnitariaKm');

const areaUnitariaCtrl = {};

areaUnitariaCtrl.crearAreaUnitariaKm = async (req, res) => {
    try {
        let areaUnitaria;

        areaUnitaria = new AreaUnitariaKm(req.body);

        await areaUnitaria.save();
        res.send(areaUnitaria);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

// areaUnitariaCtrl.obtenerAreasUnitariasKm = async (req, res) => {
//     try {
//         const areaUnitariaKm = await AreaUnitariaKm.find();
//         res.json(areaUnitariaKm);
//         // console.log('AreaUnitaria', areaUnitariaKm);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Hubo un error");
//     }
// };

areaUnitariaCtrl.getAreasUnitarias = async (req, res, next) => {
    const areasUnitarias = await AreaUnitariaKm.find();
    res.json(areasUnitarias);
};

module.exports = areaUnitariaCtrl;