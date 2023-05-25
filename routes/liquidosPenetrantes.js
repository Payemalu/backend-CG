// Rutas de los Líquidos penetrantes
const express = require('express');
const router = express.Router();
const liquidosPenetrantesController = require('../controllers/liquidosPenetrantesController');

// app/liquidosPenetrantes
router.post('/', liquidosPenetrantesController.crearLiquidoPenetrante);
// router.get('/', liquidosPenetrantesController.obtenerLiquidosPenetrantes);
// router.put('/:id', liquidosPenetrantesController.actualizarLiquidoPenetrante);
// router.get('/:id', liquidosPenetrantesController.obtenerLiquidoPenetrante);
// router.delete('/:id', liquidosPenetrantesController.borrarLiquidoPenetrante);

module.exports = router;