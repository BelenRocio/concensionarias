const express = require('express');
const router = express.Router();

const sucursalesRouter = require('../controllers/sucursalesController');

router.get('/sucursales', sucursalesController.index);
router.get('/sucursales/sucursal', sucursalesController.sucursal);

module.exports = router;