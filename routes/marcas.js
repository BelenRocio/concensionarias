const express = require('express');
const router = express.Router();

const marcasRouter = require('../controllers/marcasController');

router.get('/marcas', marcasController.index);
router.get('/marcas/:marca', marcasController);

module.exports = router;