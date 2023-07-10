const express = require("express");
const path=require("path");
const bodyParser = require('body-parser');
const app = express();
const issueRoutes = require('./routes/issueRoutes');
const port = 4001;

const db = require('./config/mongoose');

//const Pro = require('./models/pro');
const Project = require("./models/pro");
const Issue = require("./models/issue");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

//

var proList=[{
    name: "abc",
    author: "abc",
    description: "good",
}]
const searchRoute = require('./routes/searchRoute');
const filterRoutes = require('./routes/filterRoutes');

const filterController = require('./controller/filterController');
const seeIssuesRoutes = require('./routes/seeIssuesRoutes');
const seeIssuesController = require('./controller/seeIssuesController');

const HomeController = require('./controller/homeController');
const ContainerController = require('./controller/containerController');

app.get("/", HomeController.getHome);
app.post("/create-list", HomeController.createList);
app.get('/container/:id', ContainerController.getContainerDetails);
app.post("/container/:id", ContainerController.postContainer);






// Add routes
app.use('/search', searchRoute);

app.use('/filter-by-labels', filterRoutes);
app.use('/seeissues', seeIssuesRoutes);



  
// Parse request body
app.use(express.urlencoded({ extended: true }));


app.get("/bugs", function(req, res) {
    Issue.find()
      .then(containerList => {
        res.render('bugs', { containerList: containerList });
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });
  
  
  
app.post("/submit-form", function(req, res) {
 
    const newData = {

        name: req.body.title,
        author: req.body.author,
        description: req.body.description,
        options: req.body.options
    
  };
  console.log(newData);
//   return;
  
    Issue.create(newData)
    .then(createdData => {
      console.log('New document created:', createdData);
      res.redirect('/bugs');
   
      // Perform other operations
    })
    .catch(error => {
      console.error('Error creating document:', error);
    });
  

});


  


  app.post('/search-Title', function(req, res) {
    const name= req.body.name;
    const author = req.body.author;
    const description = req.body.description;
  
    // Build the search query using the $or operator
    const query = {
      $or: [
        {name: name},
        { description: description }
      ]
    };
  
    // Perform the search query based on the provided author and description
    Project.find(query)
      .then(searchResults => {
        res.render('search-results', { searchResults });
      })
      .catch(error => {
        console.error("Error retrieving search results:", error);
        res.render("error", { error });
      });
  });
  
 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

