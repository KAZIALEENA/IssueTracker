const Project = require("../models/pro");

exports.getHome = function (req, res) {
  Project.find()
    .then(newData => {
      res.render('home', {
        pro_list: newData
      });
    })
    .catch(error => {
      console.error('Error retrieving data:', error);
      res.render("error", { error });
    });
};

exports.createList = function (req, res) {
  const newData = {
    name: req.body.name,
    author: req.body.author,
    description: req.body.description
  };

  Project.create(newData)
    .then(createdData => {
      console.log('New document created:', createdData);
      // Perform other operations
      res.redirect('/');
    })
    .catch(error => {
      console.error('Error creating document:', error);
      res.render("error", { error });
    });
};
