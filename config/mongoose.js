const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.8olx8vv.mongodb.net/issuetracker');

const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running print msg
db.once('open',function(){
    console.log("Successfully connect to database");
});