"use strict"
// randomly select destination, restaurant, transport, and entertainment,
// able to redo random choice. 
// confirm completed trip then print it too the console. 


// created our arrays 

let destinations = ["Bisbee", "Tombstone", "Flagstaff", "Williams", "Yuma"]
let restaurants = ["Fast-Food", "Fine-Dining","MomandPop"]
let transportation = ["Bus", "Pesonal", "Rental", "Carpool"]
let entertainment = ["Tourist-site", 'Show', 'Urban-Exploration', "Trainride", "Hiking"]

function getDestination () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * 5);
    let randDestinations = destinations[randNum];
    let userConfrim = prompt(`Your destination is ${randDestinations}, Is this destination exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randDestinations;
    } 
  }
}

