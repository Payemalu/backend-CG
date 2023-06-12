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
