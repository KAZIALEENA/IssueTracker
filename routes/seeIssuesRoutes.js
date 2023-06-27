// seeIssuesRoutes.js

const express = require('express');
const router = express.Router();
const seeIssuesController = require('../controller/seeIssuesController');

// GET request to retrieve containerList data
router.get('/', seeIssuesController.getContainerList);

// POST request to retrieve container issues by name
router.post('/:name', seeIssuesController.getContainerIssuesByName);

module.exports = router;
