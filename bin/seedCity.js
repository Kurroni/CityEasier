// It is missing to enter the value Id fromt restaurant, museum, hotel, events
const mongoose = require("mongoose");

const Cities = require("./../models/CitiesModel");
require("dotenv").config();

const cities = [{
    name: "Barcelona",
    // img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Naples",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Paris",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Mallorca",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Warsaw",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Berlin",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Amsterdam",
    //img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },

];

mongoose
 .connect(process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
    return Cities.create(cities);
  })
  .then((insertedCities) => {
    console.log("Inserted Cities : ", insertedCities.length);
    mongoose.connection.close();

  })
  .catch((err) => console.log(err));