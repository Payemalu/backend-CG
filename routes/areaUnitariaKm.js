// Rutas de las Areas Unitarias
const express = require('express');
const router = express.Router();
const areaUnitariaKm = require('../controllers/areaUnitariaKmController');

// app/areaUnitariaKm
router.post('/', areaUnitariaKm.crearAreaUnitariaKm);
router.get('/', areaUnitariaKm.getAreasUnitarias);

module.exports = router;