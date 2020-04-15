const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/burgers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const burgerSchema = new mongoose.Schema({
  restaurant: String,
  type: String,
  drivethru: Boolean,
  avgCost: String
});

// Create a model for items in the museum. (COLLECTION)
const Burger = mongoose.model('Burger', burgerSchema);

app.listen(3000, () => console.log('Server listening on port 3000!'));