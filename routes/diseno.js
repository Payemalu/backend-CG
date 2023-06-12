// Rutas de los Diseños
const express = require('express');
const router = express.Router();
const disenoController = require('../controllers/disenoController');

// app/diseño
router.post('/', disenoController.crearDiseno);
router.get('/', disenoController.obtenerDisenos);

module.exports = router;