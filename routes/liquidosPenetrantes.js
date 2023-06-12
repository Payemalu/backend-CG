// Rutas de los Líquidos penetrantes
const express = require('express');
const router = express.Router();
const liquidosPenetrantesController = require('../controllers/liquidosPenetrantesController');

// app/liquidosPenetrantes
router.post('/', liquidosPenetrantesController.crearLiquidoPenetrante);

module.exports = router;