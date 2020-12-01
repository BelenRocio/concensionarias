const express = require('express');
const router = express.Router();

const autoRouter = require('../controllers/autosController');

router.get('/autos', autosController.index);
router.get('/autos/:marca', autosController);

module.exports = router;