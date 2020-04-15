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
  restaurantType: String,
  drivethru: String,
  avgCost: String,
  tier: String
});

// Create a model for items in the museum. (COLLECTION)
const Burger = mongoose.model('Burger', burgerSchema);



/* API Endpoints */

app.get('/api/burgers', async (req, res) => {
  try {
    let burgers = await Burger.find();
    res.send({burgers: burgers});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/burgers', async (req, res) => {
  const burger = new Burger({
    restaurant: req.body.restaurant,
    restaurantType: req.body.restaurantType,
    drivethru: req.body.drivethru,
    avgCost: req.body.avgCost,
    tier: req.body.tier,
  });
  try {
    await burger.save();
    res.send({
      burger: burger
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 3000!'));