// Rutas de las Areas Unitarias
const express = require('express');
const router = express.Router();
const areaUnitariaKm = require('../controllers/areaUnitariaKmController');

// app/areaUnitariaKm
router.post('/', areaUnitariaKm.crearAreaUnitariaKm);
// router.get('/', areaUnitariaKm.obtenerAreasUnitariasKm);
router.get('/', areaUnitariaKm.getAreasUnitarias);
// router.put('/:id', areaUnitariaKm.actualizarAreaUnitariaKm);
// router.get('/:id', areaUnitariaKm.obtenerAreaUnitariaKm);
// router.delete('/:id', areaUnitariaKm.borrarAreaUnitariaKm);

module.exports = router;