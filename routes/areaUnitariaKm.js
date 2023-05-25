// Rutas de las Areas Unitarias
const express = require('express');
const router = express.Router();
const areaUnitariaKmController = require('../controllers/areaUnitariaKmController');

// app/areaUnitariaKm
router.post('/', areaUnitariaKmController.crearAreaUnitariaKm);
router.get('/', areaUnitariaKmController.obtenerAreasUnitariasKm);
// router.put('/:id', areaUnitariaKmController.actualizarAreaUnitariaKm);
// router.get('/:id', areaUnitariaKmController.obtenerAreaUnitariaKm);
// router.delete('/:id', areaUnitariaKmController.borrarAreaUnitariaKm);

module.exports = router;