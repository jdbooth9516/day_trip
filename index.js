"use strict"
// randomly select destination, restaurant, transport, and entertainment,
// able to redo random choice. 
// confirm completed trip then print it too the console. 


// created our arrays 

let destinations = ["Bisbee", "Tombstone", "Flagstaff", "Williams", "Yuma"];
let restaurants = ["Fast-Food", "Fine-Dining","Mom and Pop"];
let transportation = ["Bus", "Pesonal Vehicle", "Rental Car", "Carpool"];
let entertainment = ["Tourist-site", 'Show', 'Urban-Exploration', "Trainride", "Hiking"];

// function for pulling a random destination
function getDestination () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * destinations.length);
    let randDestinations = destinations[randNum];
    let userConfrim = prompt(`Your destination is ${randDestinations}, Is this destination exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randDestinations;
    } 
  }
}
// function for pulling a random restaurants
function getRestaurants () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * restaurants.length);
    let randRestaurants = restaurants[randNum];
    let userConfrim = prompt(`Your restaurants is ${randRestaurants}, Is this restaurant exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randRestaurants;
    } 
  }
}

// function for pulling the trasportation
function getTransportation () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * transportation.length);
    let randTrasportation = transportation[randNum];
    let userConfrim = prompt(`Your trasportation is ${randTrasportation}, Is this trasportaion exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randTrasportation;
    } 
  }
}

// function for pulling the entertainment
function getEntertainment () {
  let confirmed = false;
  while(confirmed === false){
    let randNum = Math.floor(Math.random() * entertainment.length);
    let randEntertainment = entertainment[randNum];
    let userConfrim = prompt(`Your destination is ${randEntertainment}, Is this destination exceptable? (y/n):`);

    if (userConfrim == "y") {
    confirmed = true;
    return randEntertainment;
    } 
  }
}
// Ending function that puts it all together. 
function getTrip () {
  let confirmed = false;
  while(confirmed === false){
    let destination = getDestination();
    let restaurant = getRestaurants();
    let transport = getTransportation();
    let entertainment = getEntertainment();
    let userConfirm = prompt(`This is your trip ${destination}, ${restaurant}, ${transport}, ${entertainment}. Confirm your trip? (y/n):`)

    if(userConfirm == 'y'){
      confirmed = true;
      console.log(`Your trip of ${destination}, ${restaurant}, ${transport}, ${entertainment} Has been confirmed have a good trip.`)
    }
  }
}

getTrip();

