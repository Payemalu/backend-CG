// Rutas de los Diseños
const express = require('express');
const router = express.Router();
const disenoController = require('../controllers/disenoController');

// app/diseño
router.post('/', disenoController.crearDiseno);
router.get('/', disenoController.obtenerDisenos);
// router.put('/:id', disenoController.actualizarDiseno);
// router.get('/:id', disenoController.obtenerDiseno);
// router.delete('/:id', disenoController.borrarDiseno);

module.exports = router;