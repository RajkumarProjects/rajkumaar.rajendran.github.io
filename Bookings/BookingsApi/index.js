const express = require('express')
const routes = require('./routes/api')
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const cors = require('cors');
var option = {
  server: {
      socketOptions: {
          keepAlive: 300000,
          connectTimeoutMS: 30000
      }
  },
  replset: {
      socketOptions: {
          keepAlive: 300000,
          connectTimeoutMS: 30000
      }
  }
};

//Set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/booking',option).then(function(){
  console.log("MongoDB connected successfully!")
}, function(err) {
  console.log("Error in connecting MongoDB Server!")
});
;
mongoose.Promise=global.Promise;

app.use(cors());
//app.use(express.static('public'))
app.use(bodyParser.json())

//initiate routes
app.use(routes);

//error handling middleware
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message})
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
