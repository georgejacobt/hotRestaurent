// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var reservations = [
    {
      routeName: "sendy",
      name: "Sendy",
      phonenumber: 777 - 777 - 7777,
      email: "sendy@sendy.com",
      unique_id: "table1"
    },
    {
        routeName: "george",
        name: "George",
        phonenumber: 333 - 333 - 3333,
        email: "george@g.com",
        unique_id: "table2"
    },
  ];

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservation to start 

var reservations = [
  {
 
    name: "Sendy",
    phonenumber: 7777777777,
    email: "sendy@sendy.com",
    unique_id: "table1"
  },
 
 
 ];


app.get("/", function(req, res) {
  
    res.sendFile(path.join(__dirname, "index.html"));
  });

  

  app.get("/tables", function(req, res) {

    res.sendFile(path.join(__dirname, "tables.html"));
  });


  app.get("/reservations", function(req, res) {

    res.sendFile(path.join(__dirname, "reservation.html"));
  });


  app.get("/api/tables", function(req, res) {
    return res.json(reservations);
  });

    // Create New Reservation - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    // We then add the json the user sent to the character array
    reservations.push(newReservation);
  
    // We then display the JSON to the users
    res.json(newReservation);
  });




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
