const mongoose = require('mongoose');
const Issue = require('../models/issue');

exports.createIssue = function(req, res) {
  //const containerId = req.body.containerId;
  const containerId = mongoose.Types.containerId;Id;
  const { name, author, description, options } = req.body;

  const newIssue = new Issue({
    name: name,
    author: author,
    description: description,
    options: Array.isArray(options) ? options : [options]
  });

  newIssue.save()
    .then(createdIssue => {
      console.log('New issue created:', createdIssue);
      // Perform other operations or send a response
      res.send('New issue created successfully');
    })
    .catch(error => {
      console.error('Error creating issue:', error);
      res.status(500).send('Error creating issue');
    });
};
