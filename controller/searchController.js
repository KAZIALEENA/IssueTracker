// searchController.js

const Project = require('../models/pro');

exports.search = function(req, res) {
  const name = req.body.name;
  const author = req.body.author;
  const description = req.body.description;

  // Build the search query using the $or operator
  const query = {
    $or: [
      { name: name },
      { author: author },
      { description: description }
    ]
  };

  // Perform the search query based on the provided author and description
  Project.find(query)
    .then(searchResults => {
      res.render('search', { searchResults });
    })
    .catch(error => {
      console.error("Error retrieving search results:", error);
      res.render("error", { error });
    });
};
/*module.exports = {
    search
  };*/