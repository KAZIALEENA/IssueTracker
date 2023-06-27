const Project = require("../models/pro");

exports.getContainerDetails = async function (req, res) {
  try {
    // Get the ID parameter from the request
    const id = req.params.id;
     // Log the ID to the console for debugging
    console.log(req.params.id);
    // Get the path parameter from the request
    const path = req.params.path; 
    // Construct the file path using the ID and path
    const filePath = `/${id}/${path}`;
    // Log the file path to the console for debugging
    console.log(filePath);
    // Find the container by ID using the Project model
    const container = await Project.findById(req.params.id);
    // Render the 'container-details' view and pass the container and filePath as data
    res.render('container-details', { container, filePath });
  } catch (error) {
    console.error("Error retrieving container details:", error);
    res.render("error", { error });
  }
};

exports.postContainer = function (req, res) {
  res.redirect('/container-details'); // Redirect to the 'container-details' route after the container is created
};
