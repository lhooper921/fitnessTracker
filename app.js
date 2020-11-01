
var express = require('express');

var logger = require('morgan');
var app = express();
//Import the mongoose module
var mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnessTrackerDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger("dev"));

// Middleware used to send POST and PUT
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html')
});



// Routing
require("./routes/api-routes");
require("./routes/html-routes");


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  