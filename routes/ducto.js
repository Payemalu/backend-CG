// Rutas de los Ductos
const express = require('express');
const router = express.Router();
const ductoController = require('../controllers/ductoController');

// app/ductos
router.post('/', ductoController.crearDucto);
router.get('/', ductoController.obtenerDuctos);
router.put('/:id', ductoController.actualizarDucto);
router.get('/:id', ductoController.obtenerDucto);
router.delete('/:id', ductoController.borrarDucto);

module.exports = router;