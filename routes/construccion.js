// Rutas de las Construcciones
const express = require('express');
const router = express.Router();
const construccionController = require('../controllers/construccionController');

// app/construccion
router.post('/', construccionController.crearConstruccion);
router.get('/', construccionController.obtenerConstrucciones);

module.exports = router;