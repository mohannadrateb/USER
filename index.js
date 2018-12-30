const express= require ('express');
const bodyParser= require('body-parser');
var UserController=require("./routes/UserController");
var AdminController=require('./routes/AdminController');
var methodOverride = require('method-override')
 var router= express.Router(); 

const User = require("./models/User");

var app = express();


const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/NewAPP',{ useNewUrlParser: true } );


mongoose.connection.on('connected', function () {  
    console.log("The connnection to the database was made");
  });


  mongoose.connection.on('error', function () {  
    console.log('was not able to connect to the database');
  });

  mongoose.Promise=global.Promise;
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(bodyParser.json());
  app.use(methodOverride('_method'));
  

  // redirect to the Appropriate controller
  
  app.use('/api/user',UserController);
  app.use('/api/Admin',AdminController);
  
  app.use(express.static('./public'));// for static files
  app.get('/', function(req, res) {
    res.redirect('/api/user/login');
   });
//set view engine 

app.set('view engine', 'ejs');

// listening to port 
app.listen('3000',function(){
    console.log(" you are listening to port 3000");
});


