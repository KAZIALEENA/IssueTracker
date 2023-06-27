// filterRoutes.js

const express = require('express');
const router = express.Router();
const filterController = require('../controller/filterController');

// POST request to filter by labels
router.post('/', filterController.filterByLabels);

module.exports = router;
