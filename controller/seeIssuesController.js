// seeIssuesController.js

const Issue = require('../models/issue');

// GET request to retrieve containerList data
exports.getContainerList = async (req, res, next) => {
  try {
    const containerList = await Issue.find();
    res.render('seeissues', { containerList });
  } catch (error) {
    console.error("Error retrieving containerList:", error);
    res.render("error", { error });
  }
};

// POST request to retrieve container issues by name
exports.getContainerIssuesByName = async (req, res, next) => {
  try {
    const name = req.params.name;

    const containerList = await Issue.findOne({ name });

    if (!containerList) {
      res.render('error', { error: 'Container not found.' });
      return;
    }

    const issues = containerList.issues;

    res.render('seeissues', { title: name, issues });
  } catch (error) {
    console.error("Error retrieving container issues:", error);
    res.render("error", { error });
  }
};
