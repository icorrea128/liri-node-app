
var dotenv = require("dotenv").config();
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var fs = require("fs");


var client = new twitter({
  consumer_key: 'V2Q9g1obLzwJvJgC5OzKDRoYp',
  consumer_secret: 'VQ4RovCW87sayeaypdeJJ4CiDnqSlKhvGPeVorPq8QbvaS1jpU',
  access_token_key: '303599661-RvgP2Hredac8NjmFGHIy0Z01kW2E8eeiY2S5C0oL',
  access_token_secret: 'voppSkFvEyzcvdKWjoBmpHlEs4nz1UB0VPJXuYSBYwpdq'
});

var spotify = new spotify({
  id: "7871516a8b57449dab864f186ffc070b",
  secret: "3f10c217d93e4f4b85090f47e8581152"
});

var nuevoControl = process.argv
var nodeArguments = nuevoControl[2];
var thirdArgument = nuevoControl[3];


//my-tweets conditional
if (nodeArguments === "my-tweets"){
  function tweeter(){
    var tweets = { screen_name: 'nodejs', count: 5 }
    client.get('statuses/user_timeline',function(error, tweets, response) {
      console.log(tweets);
    });
    }
    tweeter();
  }

  //spotify-this-song conditional
  if (nodeArguments === "spotify-this-song"){
    function spotty(thirdArgument){
      if(!thirdArgument){
        spotifySong = "The Sign"
      }
      var artist = {type:"artist",query:thirdArgument};
      spotify.search(artist,function(err,data){
        if(err){
          return console.log("Error occured:"+ err);
        }
        console.log(data);
      });
      var songName = {type:"track",query:thirdArgument}
      spotify.search(songName,function(err,data){
        if(err){
          return console.log("Error occured:" + err);
        }
        console.log(data);
      })
      var  album = {type:"album",query:thirdArgument}
      spotify.search(album,function(err,data){
        if(err){
          return console.log("Error occured:" + err);
        }
        console.log(data);
      })
    }
    spotty();
  }

  if (nodeArguments === "movie-this"){
    var url = "http://www.omdbapi.com/?apikey=trilogy&" + thirdArgument;
    console.log(url);

    //the OMDB API url should be displaying all relevant information through retreiving the information

  }

  var content = "random.txt"

  //do-what-says
  if(nodeArguments === "do-what-it-says"){
    
    function readFile(){
      var tex = fs.readFile(content,"utf8",function(err,data){
        console.log(data);
      });
      }
      //this component should take in the output from the readFile and input it in the spotty function
      readFile();
      spotty();
      
    }