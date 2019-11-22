//Done it,  We need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Museum = require("./../models/MuseumModel");

// Create schema for the city
const museumSchema = [
  {
    name: "Museo Nacional de Arte de Cataluña",
    type: "Art",
    rating: 9,
    contact: [
      {
        addres: "Barcelona",
        phone: 666828384
      }
    ],
    web:
      "https://www.museunacional.cat/es",
    description: `
    The National Museum of Art of Catalonia, also known by its initials MNAC, 
    is located in the city of Barcelona. It stands out for its collection of Romanesque art, 
    specifically one of the most complete in the world. Its director is Josep Serra i Villalba.
        `,
    comments: [
      {
        name: "fernando",
        date: "2016-5-13",
        comment: "Best museum in Barcelona"
      }
    ]
  },

  {
    name: "Picasso museum",
    type: "Art",
    rating: 4,
    contact: [
      {
        addres: "Barcelona",
        phone: 677334566
      }
    ],
    web: "http://www.museupicasso.bcn.cat/es",
    description: `The Picasso Museum in Barcelona, officially and in Catalan Museu Picasso,
     has a collection of 4,249 works by the Malaga-born painter Pablo Picasso in the multiple
      media that addressed which is the most complete in the world in works of his youth. It is
       located on Montcada street in Barcelona
    `,
    comments: [
      {
        name: "Laura",
        date: "2018-5-3",
        comment: "Abstract art"
      }
    ]
  },

//   {
//     name: "String",
//     type: String,
//     rating: Number,
//     contact: [
//       {
//         addres: String,
//         phone: Number
//       }
//     ],
//     web: String,
//     description: String,
//     comments: [
//       {
//         name: String,
//         date: Date,
//         comment: String
//       }
// ]
//   }
];




mongoose
.connect("mongodb://localhost:27017/CityEasier", {
    useNewUrlParser: true
})
.then(()=>{
    return Museum.create(museumSchema);
})
.then( (insertedMuseums) => {
    console.log("Inserted Cities : ", insertedMuseums.length);
    mongoose.connection.close();
    
})
.catch( (err) => console.log(err));

// module.exports = Museum;