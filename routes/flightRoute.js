const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights);
router.post('/', controller.newFlight);
router.get('/:id',controller.getSingleFlight);
router.put('/:id',controller.updateFlight);
router.delete('/:id',controller.delFlight);

module.exports = router;

