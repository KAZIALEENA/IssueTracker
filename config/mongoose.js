const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pro_list_db');

const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running print msg
db.once('open',function(){
    console.log("Successfully connect to database");
});