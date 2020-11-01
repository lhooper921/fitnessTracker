const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const logger = require("morgan");

const mongoose = require("mongoose");

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


app.use(logger("dev"));

// Middleware used to send POST and PUT
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html')
});

const db = require("./models");

// Routing
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  