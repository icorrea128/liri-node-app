
var dotenv = require("dotenv").config();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'V2Q9g1obLzwJvJgC5OzKDRoYp',
  consumer_secret: 'VQ4RovCW87sayeaypdeJJ4CiDnqSlKhvGPeVorPq8QbvaS1jpU',
  access_token_key: '303599661-RvgP2Hredac8NjmFGHIy0Z01kW2E8eeiY2S5C0oL',
  access_token_secret: 'voppSkFvEyzcvdKWjoBmpHlEs4nz1UB0VPJXuYSBYwpdq'
});

var nuevoControl = process.argv
var nodeArguments = nuevoControl[2];
var spotifySong = nuevoControl[3];


//my-tweets conditional
if (twitter === "my-tweets"){
  function tweeter(){
    console.log("Yo whats good my nukkah. We oout here nukkah. post up and szend them dfucking shots. nukkah.");
    var tweets = { screen_name: 'nodejs', count: 5 }
    client.get('statuses/user_timeline',function(error, tweets, response) {
      console.log(tweets);
    });
    }
    tweeter();
  }


  var song = ""

  //spotify-this-song conditional
  if (nodeArguments === "spotify-this-song"){
    function spotty(){
      
    }
  }


