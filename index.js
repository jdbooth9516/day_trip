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

function getRestaurants () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * 5);
    let randRestaurants = restaurants[randNum];
    let userConfrim = prompt(`Your restaurants is ${randRestaurants}, Is this restaurant exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randRestaurant;
    } 
  }
}

function getTransportation () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * 5);
    let randTrasportation = transportation[randNum];
    let userConfrim = prompt(`Your trasportation is ${randTrasportation}, Is this trasportaion exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randTrasportation;
    } 
  }
}

function getEntertainment () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * 5);
    let randEntertainment = entertainment[randNum];
    let userConfrim = prompt(`Your destination is ${randEntertainment}, Is this destination exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randEntertainment;
    } 
  }
}

