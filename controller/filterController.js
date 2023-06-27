// filterController.js

const Issue = require('../models/issue');

// POST request to filter by labels
exports.filterByLabels = (req, res, next) => {
  const labelsToFilter = req.body.options || [];

  Issue.find({ options: { $in: labelsToFilter } })
    .then(filteredData => {
      res.render('filtered-results', { data: filteredData });
    })
    .catch(error => {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
};
