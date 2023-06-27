const express = require('express');
const issueController = require('../controller/issueController');

const router = express.Router();

router.post('/issue', issueController.createIssue);

module.exports = router;
